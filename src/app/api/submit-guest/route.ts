import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'
import ZAI from 'z-ai-web-dev-sdk'
import { translations, type Language } from '@/lib/translations'

// Helper per validare la richiesta
function validateFormData(data: unknown, t: typeof translations.it): { valid: boolean; errors: string[] } {
  const errors: string[] = []
  
  if (!data || typeof data !== 'object') {
    return { valid: false, errors: ['Invalid data'] }
  }
  
  const form = data as Record<string, unknown>
  
  // Campi obbligatori
  if (!form.nome || typeof form.nome !== 'string' || form.nome.length < 2) {
    errors.push(t.errors.nameMin)
  }
  if (!form.cognome || typeof form.cognome !== 'string' || form.cognome.length < 2) {
    errors.push(t.errors.surnameMin)
  }
  
  // Secondo cognome obbligatorio per spagnoli
  if (form.nazionalita === 'ES') {
    if (!form.secondoCognome || typeof form.secondoCognome !== 'string' || form.secondoCognome.length < 1) {
      errors.push(t.errors.secondSurnameRequired)
    }
  }
  
  if (!form.nazionalita || typeof form.nazionalita !== 'string') {
    errors.push(t.errors.selectNationality)
  }
  if (!form.dataNascita) {
    errors.push(t.errors.birthDateRequired)
  }
  if (!form.email || typeof form.email !== 'string' || !form.email.includes('@')) {
    errors.push(t.errors.email)
  }
  if (!form.telefono || typeof form.telefono !== 'string') {
    errors.push(t.errors.phoneMin)
  } else {
    const digits = form.telefono.replace(/\D/g, '')
    if (digits.length < 8) {
      errors.push(t.errors.phoneDigits)
    }
  }
  if (!form.tipoDocumento || typeof form.tipoDocumento !== 'string') {
    errors.push(t.errors.selectDocumentType)
  }
  
  // Numero documento obbligatorio
  if (!form.numeroDocumento || typeof form.numeroDocumento !== 'string' || form.numeroDocumento.length < 1) {
    errors.push(t.errors.documentNumberRequired)
  }
  
  // Validazione numero supporto per carta spagnola
  if (form.tipoDocumento === 'carta_identita_spagnola') {
    if (!form.numeroSupporto || typeof form.numeroSupporto !== 'string' || !/^[A-Z]{3}[0-9]{6}$/.test(form.numeroSupporto)) {
      errors.push(t.errors.supportNumberInvalid)
    }
  }
  
  if (!form.sesso || typeof form.sesso !== 'string') {
    errors.push(t.errors.selectGender)
  }
  if (!form.via || typeof form.via !== 'string') {
    errors.push(t.errors.streetMin)
  }
  if (!form.citta || typeof form.citta !== 'string') {
    errors.push(t.errors.cityMin)
  }
  if (!form.cap || typeof form.cap !== 'string') {
    errors.push(t.errors.postalCodeMin)
  }
  if (!form.dataCheckin) {
    errors.push(t.errors.checkinRequired)
  }
  
  // Validazione data nascita non nel futuro
  if (form.dataNascita) {
    const birthDate = new Date(form.dataNascita as string)
    if (birthDate > new Date()) {
      errors.push(t.errors.birthDateFuture)
    }
  }
  
  // Validazione data check-in non nel passato
  if (form.dataCheckin) {
    const checkinDate = new Date(form.dataCheckin as string)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (checkinDate < today) {
      errors.push(t.errors.checkinPast)
    }
  }
  
  // Validazione relazioni famigliari se minorenni presenti
  if (form.presenzaMinorenni === true) {
    if (!form.relazioniFamigliari || typeof form.relazioniFamigliari !== 'string' || form.relazioniFamigliari.length === 0) {
      errors.push(t.errors.familyRelationsRequired)
    }
  }
  
  return { valid: errors.length === 0, errors }
}

// Funzione per generare un riepilogo formattato
async function generateFormattedSummary(data: Record<string, unknown>, language: Language): Promise<string> {
  try {
    const zai = await ZAI.create()
    const t = translations[language]
    
    const documentTypeLabels: Record<string, string> = {
      'carta_identita': t.idCard,
      'passaporto': t.passport,
      'carta_identita_spagnola': t.spanishIdCard,
    }
    
    const genderLabels: Record<string, string> = {
      'M': t.male,
      'F': t.female,
      'Altro': t.other,
    }
    
    const prompt = `Generate a formatted and professional summary for a guest registration at a tourist accommodation. The data is as follows:

PERSONAL DATA:
- Name: ${data.nome}
- Surname: ${data.cognome}
${data.secondoCognome ? `- Second Surname: ${data.secondoCognome}` : ''}
- Nationality: ${data.nazionalita}
- Date of birth: ${data.dataNascita ? new Date(data.dataNascita as string).toLocaleDateString(language === 'en' ? 'en-US' : language === 'es' ? 'es-ES' : language === 'fr' ? 'fr-FR' : language === 'de' ? 'de-DE' : language === 'ru' ? 'ru-RU' : 'it-IT') : 'Not specified'}
- Gender: ${data.sesso ? genderLabels[data.sesso as string] || data.sesso : 'Not specified'}

CONTACTS:
- Email: ${data.email}
- Phone: ${data.telefono}

DOCUMENT:
- Type: ${data.tipoDocumento ? documentTypeLabels[data.tipoDocumento as string] || data.tipoDocumento : 'Not specified'}
- Document Number: ${data.numeroDocumento || 'Not specified'}
${data.tipoDocumento === 'carta_identita_spagnola' ? `- Support Number: ${data.numeroSupporto}` : ''}

ADDRESS:
- Street: ${data.via}
- City: ${data.citta}
- Postal Code: ${data.cap}

CHECK-IN:
- Arrival date: ${data.dataCheckin ? new Date(data.dataCheckin as string).toLocaleDateString(language === 'en' ? 'en-US' : language === 'es' ? 'es-ES' : language === 'fr' ? 'fr-FR' : language === 'de' ? 'de-DE' : language === 'ru' ? 'ru-RU' : 'it-IT') : 'Not specified'}

${data.presenzaMinorenni ? `MINORS:
- Minors present: Yes
- Family relations: ${data.relazioniFamigliari}` : '- Minors present: No'}

Generate an elegant and professional summary in ${language === 'it' ? 'Italian' : language === 'en' ? 'English' : language === 'es' ? 'Spanish' : language === 'fr' ? 'French' : language === 'de' ? 'German' : 'Russian'}, formatted clearly and legibly, ready to be sent via email.`

    const completion = await zai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `You are an assistant that generates professional summaries for hotel registrations. Respond in ${language === 'it' ? 'Italian' : language === 'en' ? 'English' : language === 'es' ? 'Spanish' : language === 'fr' ? 'French' : language === 'de' ? 'German' : 'Russian'} in a formal but friendly manner.`
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
    })

    return completion.choices[0]?.message?.content || generateBasicSummary(data, language)
  } catch {
    // Fallback al riepilogo base se l'AI non è disponibile
    return generateBasicSummary(data, language)
  }
}

// Funzione di fallback per generare un riepilogo base
function generateBasicSummary(data: Record<string, unknown>, language: Language): string {
  const t = translations[language]
  
  const documentTypeLabels: Record<string, string> = {
    'carta_identita': t.idCard,
    'passaporto': t.passport,
    'carta_identita_spagnola': t.spanishIdCard,
  }
  
  const genderLabels: Record<string, string> = {
    'M': t.male,
    'F': t.female,
    'Altro': t.other,
  }
  
  const dateLocale = language === 'en' ? 'en-US' : language === 'es' ? 'es-ES' : language === 'fr' ? 'fr-FR' : language === 'de' ? 'de-DE' : language === 'ru' ? 'ru-RU' : 'it-IT'
  
  return `
${t.title.toUpperCase()}
${'='.repeat(40)}

${t.personalData.toUpperCase()}
${'-'.repeat(20)}
${t.name}: ${data.nome}
${t.surname}: ${data.cognome}
${data.secondoCognome ? `${t.secondSurname}: ${data.secondoCognome}` : ''}
${t.nationality}: ${data.nazionalita}
${t.birthDate}: ${data.dataNascita ? new Date(data.dataNascita as string).toLocaleDateString(dateLocale) : 'N/A'}
${t.gender}: ${data.sesso ? genderLabels[data.sesso as string] || data.sesso : 'N/A'}

${t.contacts.toUpperCase()}
${'-'.repeat(20)}
${t.email}: ${data.email}
${t.phone}: ${data.telefono}

${t.document.toUpperCase()}
${'-'.repeat(20)}
${t.documentType}: ${data.tipoDocumento ? documentTypeLabels[data.tipoDocumento as string] || data.tipoDocumento : 'N/A'}
${t.documentNumber}: ${data.numeroDocumento || 'N/A'}
${data.tipoDocumento === 'carta_identita_spagnola' ? `${t.supportNumber}: ${data.numeroSupporto}` : ''}

${t.address.toUpperCase()}
${'-'.repeat(20)}
${t.street}: ${data.via}
${t.city}: ${data.citta}
${t.postalCode}: ${data.cap}

${t.checkin.toUpperCase()}
${'-'.repeat(20)}
${t.checkinDate}: ${data.dataCheckin ? new Date(data.dataCheckin as string).toLocaleDateString(dateLocale) : 'N/A'}

${data.presenzaMinorenni ? `${t.minors.toUpperCase()}
${'-'.repeat(20)}
${t.minorsPresent}: ✓
${t.familyRelations}: ${data.relazioniFamigliari}` : `${t.minors.toUpperCase()}\n${'-'.repeat(20)}\n${t.minorsPresent}: ✗`}

${'='.repeat(40)}
${new Date().toLocaleString(dateLocale)}
`
}

// Funzione per scrivere su Google Sheets
async function appendToGoogleSheet(data: Record<string, unknown>): Promise<{ success: boolean; error?: string }> {
  try {
    // Check if environment variables are set
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) {
      return { success: false, error: 'GOOGLE_SERVICE_ACCOUNT_EMAIL not configured' }
    }
    if (!process.env.GOOGLE_PRIVATE_KEY) {
      return { success: false, error: 'GOOGLE_PRIVATE_KEY not configured' }
    }
    if (!process.env.GOOGLE_SHEET_ID) {
      return { success: false, error: 'GOOGLE_SHEET_ID not configured' }
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })
    
    // Prepara la riga di dati
    const documentTypeLabels: Record<string, string> = {
      'carta_identita': 'Carta d\'identità',
      'passaporto': 'Passaporto',
      'carta_identita_spagnola': 'Carta d\'identità spagnola',
    }
    
    const genderLabels: Record<string, string> = {
      'M': 'Maschio',
      'F': 'Femmina',
      'Altro': 'Altro',
    }
    
    const dateLocale = 'it-IT'
    
    const row = [
      new Date().toLocaleString(dateLocale),                              // Data registrazione
      data.nome || '',                                                     // Nome
      data.cognome || '',                                                  // Cognome
      data.secondoCognome || '',                                           // Secondo Cognome
      data.nazionalita || '',                                              // Nazionalità
      data.dataNascita ? new Date(data.dataNascita as string).toLocaleDateString(dateLocale) : '', // Data Nascita
      data.email || '',                                                    // Email
      data.telefono || '',                                                 // Telefono
      data.tipoDocumento ? documentTypeLabels[data.tipoDocumento as string] || data.tipoDocumento : '', // Tipo Documento
      data.numeroDocumento || '',                                          // Numero Documento
      data.numeroSupporto || '',                                           // Numero Supporto
      data.sesso ? genderLabels[data.sesso as string] || data.sesso : '',  // Sesso
      data.via || '',                                                      // Indirizzo
      data.citta || '',                                                    // Città
      data.cap || '',                                                      // CAP
      data.dataCheckin ? new Date(data.dataCheckin as string).toLocaleDateString(dateLocale) : '', // Data Check-in
      data.presenzaMinorenni ? 'Sì' : 'No',                                // Minori presenti
      data.relazioniFamigliari || '',                                      // Relazioni famigliari
    ]

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:R', // Colonne A-R (18 colonne)
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [row],
      },
    })

    return { success: true }
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error('Error writing to Google Sheets:', errorMessage)
    return { success: false, error: errorMessage }
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const language: Language = body.language || 'it'
    const t = translations[language]
    
    // Validazione server-side
    const validation = validateFormData(body, t)
    if (!validation.valid) {
      return NextResponse.json(
        { error: t.errorTitle, details: validation.errors },
        { status: 400 }
      )
    }
    
    // Genera il riepilogo formattato
    const summary = await generateFormattedSummary(body, language)
    
    // Scrivi su Google Sheets
    const sheetSuccess = await appendToGoogleSheet(body)
    
    if (!sheetSuccess) {
      console.error('Failed to write to Google Sheets')
    }
    
    // Log per debug
    console.log('=====================================')
    console.log('GUEST REGISTRATION')
    console.log('=====================================')
    console.log(`Guest: ${body.nome} ${body.cognome}${body.secondoCognome ? ` ${body.secondoCognome}` : ''}`)
    console.log(`Email: ${body.email}`)
    console.log(`Google Sheets: ${sheetSuccess ? 'OK' : 'FAILED'}`)
    console.log('-------------------------------------')
    console.log(summary)
    console.log('=====================================')
    
    return NextResponse.json({
      success: true,
      message: t.successTitle,
      summary,
    })
    
  } catch (error) {
    console.error('Error saving registration:', error)
    return NextResponse.json(
      { error: 'An error occurred while saving the registration' },
      { status: 500 }
    )
  }
}
