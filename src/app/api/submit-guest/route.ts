import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
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
    
    // Prepara i dati da salvare
    const submissionData = {
      ...body,
      submittedAt: new Date().toISOString(),
      summary,
    }
    
    // Crea la cartella data se non esiste
    // Su Vercel usiamo /tmp che è scrivibile
    const isVercel = process.env.VERCEL === '1'
    const dataDir = isVercel 
      ? path.join('/tmp', 'guest-data')
      : path.join(process.cwd(), 'data')
    
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true })
    }
    
    // Genera un nome file unico basato sul timestamp e nome ospite
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
    const fileName = `guest_${body.nome}_${body.cognome}_${timestamp}.json`
    const filePath = path.join(dataDir, fileName)
    
    // Salva i dati in formato JSON
    await writeFile(filePath, JSON.stringify(submissionData, null, 2), 'utf-8')
    
    // Log per simulare l'invio email
    console.log('=====================================')
    console.log('GUEST REGISTRATION SAVED')
    console.log('=====================================')
    console.log(`File: ${fileName}`)
    console.log(`Guest: ${body.nome} ${body.cognome}${body.secondoCognome ? ` ${body.secondoCognome}` : ''}`)
    console.log(`Email: ${body.email}`)
    console.log(`Document Number: ${body.numeroDocumento}`)
    console.log('-------------------------------------')
    console.log(summary)
    console.log('=====================================')
    
    return NextResponse.json({
      success: true,
      message: t.successTitle,
      fileName,
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
