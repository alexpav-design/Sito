import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { message, stack, url, userAgent, timestamp } = body

    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ||
        !process.env.GOOGLE_PRIVATE_KEY ||
        !process.env.GOOGLE_SHEET_ID) {
      return NextResponse.json({ error: 'Google Sheets not configured' }, { status: 500 })
    }

    let privateKey = process.env.GOOGLE_PRIVATE_KEY
    if (privateKey.startsWith('LS0tLS')) {
      privateKey = Buffer.from(privateKey, 'base64').toString('utf-8')
    }
    privateKey = privateKey
      .replace(/\\n/g, '\n')
      .replace(/\\r\\n/g, '\n')
      .replace(/\r\n/g, '\n')

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: privateKey,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    const row = [
      new Date(timestamp).toLocaleString('it-IT'), // Data/ora
      message || '',                                // Messaggio errore
      stack || '',                                  // Stack trace
      url || '',                                    // URL pagina
      userAgent || '',                              // Browser/dispositivo
    ]

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'ErrorLog!A:E',
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [row],
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error('Error logging to Google Sheets:', errorMessage)
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}
