'use client'

import { useState, useMemo, useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2, User, Mail, Phone, FileText, MapPin, Calendar, Users, CheckCircle2, Globe } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

import { translations, languageNames, type Language, type Translations } from '@/lib/translations'
import { countries, getCountryName } from '@/lib/countries'

// Get countries in the selected language
const getCountries = (language: Language) => {
  return countries.map(country => ({
    value: country.code,
    label: getCountryName(country.code, language)
  })).sort((a, b) => a.label.localeCompare(b.label, language === 'ru' ? 'ru' : language === 'de' ? 'de' : language === 'fr' ? 'fr' : language === 'es' ? 'es' : language === 'en' ? 'en' : 'it'))
}

// Document types
const getDocumentTypes = (t: Translations) => [
  { value: 'carta_identita', label: t.idCard },
  { value: 'passaporto', label: t.passport },
  { value: 'carta_identita_spagnola', label: t.spanishIdCard },
  { value: 'nie', label: t.nie },
]

// Gender options (only Male and Female)
const getGenders = (t: Translations) => [
  { value: 'M', label: t.male },
  { value: 'F', label: t.female },
]

// Year options for date picker (1925 to current year)
const currentYear = new Date().getFullYear()
const yearOptions = Array.from({ length: currentYear - 1924 }, (_, i) => currentYear - i)

// Year options for check-in (current year and next year only)
const checkinYearOptions = [currentYear, currentYear + 1]

// Month options
const getMonthOptions = (t: Translations) => t.months.map((month, index) => ({
  value: index.toString(),
  label: month
}))

// Day options (1-31)
const dayOptions = Array.from({ length: 31 }, (_, i) => i + 1)

// Language Selection Component
function LanguageSelector({ onSelect }: { onSelect: (lang: Language) => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center py-8 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Globe className="w-12 h-12 text-slate-600" />
          </div>
          <CardTitle className="text-2xl">Select Language</CardTitle>
          <CardDescription>Choose your language to continue</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {(Object.keys(languageNames) as Language[]).map((lang) => (
            <Button
              key={lang}
              variant="outline"
              className="w-full justify-start text-lg py-6"
              onClick={() => onSelect(lang)}
            >
              <span className="text-2xl mr-3">{languageNames[lang].flag}</span>
              {languageNames[lang].name}
            </Button>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

// Custom Date Picker Component - uses native HTML selects with local state
function CustomDatePicker({
  value,
  onChange,
  t,
  disabled,
  error,
  years
}: {
  value: Date | undefined
  onChange: (date: Date | undefined) => void
  t: Translations
  disabled?: boolean
  error?: boolean
  years?: number[] // Optional: custom year options (defaults to yearOptions)
}) {
  // Local state for each field - managed locally
  const [year, setYear] = useState<string>('')
  const [month, setMonth] = useState<string>('')
  const [day, setDay] = useState<string>('')
  
  // Use provided years or default yearOptions
  const availableYears = years || yearOptions
  
  // Initialize from prop on mount
  useEffect(() => {
    if (value) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- Sync external value to local state
      setYear(value.getFullYear().toString())
      // eslint-disable-next-line react-hooks/set-state-in-effect -- Sync external value to local state
      setMonth(value.getMonth().toString())
      // eslint-disable-next-line react-hooks/set-state-in-effect -- Sync external value to local state
      setDay(value.getDate().toString())
    }
  }, [value])

  // Get days in selected month
  const daysInMonth = useMemo(() => {
    const y = year ? parseInt(year) : new Date().getFullYear()
    const m = month !== '' ? parseInt(month) : 0
    return new Date(y, m + 1, 0).getDate()
  }, [year, month])

  // Update parent when all fields are selected
  const updateDate = useCallback((y: string, m: string, d: string) => {
    if (y && m !== '' && d) {
      onChange(new Date(parseInt(y), parseInt(m), parseInt(d)))
    } else {
      onChange(undefined)
    }
  }, [onChange])

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newYear = e.target.value
    setYear(newYear)
    updateDate(newYear, month, day)
  }

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMonth = e.target.value
    setMonth(newMonth)
    // Adjust day if necessary
    const maxDay = new Date(year ? parseInt(year) : new Date().getFullYear(), parseInt(newMonth) + 1, 0).getDate()
    const adjustedDay = day && parseInt(day) > maxDay ? maxDay.toString() : day
    if (adjustedDay !== day) setDay(adjustedDay)
    updateDate(year, newMonth, adjustedDay)
  }

  const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newDay = e.target.value
    setDay(newDay)
    updateDate(year, month, newDay)
  }

  const selectClassName = `flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${error ? 'border-red-500' : ''}`

  return (
    <div className="flex gap-2">
      {/* Year */}
      <select
        value={year}
        onChange={handleYearChange}
        disabled={disabled}
        className={selectClassName}
        style={{ minWidth: '100px' }}
      >
        <option value="">{t.selectYear}</option>
        {availableYears.map((yr) => (
          <option key={yr} value={yr.toString()}>
            {yr}
          </option>
        ))}
      </select>

      {/* Month */}
      <select
        value={month}
        onChange={handleMonthChange}
        disabled={disabled}
        className={selectClassName}
        style={{ minWidth: '120px' }}
      >
        <option value="">{t.selectMonth}</option>
        {getMonthOptions(t).map((mo) => (
          <option key={mo.value} value={mo.value}>
            {mo.label}
          </option>
        ))}
      </select>

      {/* Day */}
      <select
        value={day}
        onChange={handleDayChange}
        disabled={disabled}
        className={selectClassName}
        style={{ width: '80px' }}
      >
        <option value="">{t.selectDay}</option>
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((d) => (
          <option key={d} value={d.toString()}>
            {d}
          </option>
        ))}
      </select>
    </div>
  )
}

// Main Form Component
function GuestRegistrationForm({ language, onChangeLanguage }: { language: Language; onChangeLanguage: (lang: Language) => void }) {
  const t = translations[language]
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  // Create dynamic schema based on language for translations
  const guestFormSchema = useMemo(() => z.object({
    // Personal data
    nome: z.string().min(2, t.errors.nameMin),
    cognome: z.string().min(2, t.errors.surnameMin),
    secondoCognome: z.string().optional(),
    nazionalita: z.string().min(1, t.errors.selectNationality),
    dataNascita: z.date({
      required_error: t.errors.birthDateRequired,
    }).refine((date) => date <= new Date(), {
      message: t.errors.birthDateFuture,
    }),
    
    // Contacts
    email: z.string().email(t.errors.email),
    telefono: z.string().min(8, t.errors.phoneMin).refine((val) => {
      const digits = val.replace(/\D/g, '')
      return digits.length >= 8
    }, {
      message: t.errors.phoneDigits,
    }),
    
    // Document
    tipoDocumento: z.string().min(1, t.errors.selectDocumentType),
    numeroDocumento: z.string().min(1, t.errors.documentNumberRequired),
    numeroSupporto: z.string().optional(),
    
    // Gender
    sesso: z.string().min(1, t.errors.selectGender),
    
    // Address
    via: z.string().min(3, t.errors.streetMin),
    citta: z.string().min(2, t.errors.cityMin),
    cap: z.string().min(3, t.errors.postalCodeMin).max(10, t.errors.postalCodeMax),
    
    // Check-in
    dataCheckin: z.date({
      required_error: t.errors.checkinRequired,
    }).refine((date) => {
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      return date >= today
    }, {
      message: t.errors.checkinPast,
    }),
    
    // Minors
    presenzaMinorenni: z.boolean().default(false),
    relazioniFamigliari: z.string().optional(),
  }).refine((data) => {
    if (data.tipoDocumento === 'carta_identita_spagnola' || data.tipoDocumento === 'nie') {
      return data.numeroSupporto !== undefined && /^[A-Z]{3}[0-9]{6}$/.test(data.numeroSupporto)
    }
    return true
  }, {
    message: t.errors.supportNumberInvalid,
    path: ['numeroSupporto'],
  }).refine((data) => {
    if (data.presenzaMinorenni) {
      return data.relazioniFamigliari !== undefined && data.relazioniFamigliari.length > 0
    }
    return true
  }, {
    message: t.errors.familyRelationsRequired,
    path: ['relazioniFamigliari'],
  }).refine((data) => {
    // Second surname is required for Spanish citizens
    if (data.nazionalita === 'ES') {
      return data.secondoCognome !== undefined && data.secondoCognome.length > 0
    }
    return true
  }, {
    message: t.errors.secondSurnameRequired,
    path: ['secondoCognome'],
  }), [t])

  type GuestFormValues = z.infer<typeof guestFormSchema>

  const form = useForm<GuestFormValues>({
    resolver: zodResolver(guestFormSchema),
    defaultValues: {
      nome: '',
      cognome: '',
      secondoCognome: '',
      nazionalita: '',
      email: '',
      telefono: '',
      tipoDocumento: '',
      numeroDocumento: '',
      numeroSupporto: '',
      sesso: '',
      via: '',
      citta: '',
      cap: '',
      presenzaMinorenni: false,
      relazioniFamigliari: '',
    },
  })

  const tipoDocumento = form.watch('tipoDocumento')
  const presenzaMinorenni = form.watch('presenzaMinorenni')
  const nazionalita = form.watch('nazionalita')
  const showNumeroSupporto = tipoDocumento === 'carta_identita_spagnola' || tipoDocumento === 'nie'
  const isSpanishNationality = nazionalita === 'ES'

  async function onSubmit(data: GuestFormValues) {
    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      const response = await fetch('/api/submit-guest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, language }),
      })

      const result = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        form.reset()
      } else {
        setErrorMessage(result.error || t.genericError)
      }
    } catch {
      setErrorMessage(t.connectionError)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-green-200 bg-green-50">
            <CardContent className="pt-8 pb-8 text-center">
              <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-green-800 mb-2">{t.successTitle}</h2>
              <p className="text-green-700 mb-6">
                {t.successMessage}
              </p>
              <div className="flex gap-4 justify-center">
                <Button onClick={() => setIsSuccess(false)} variant="outline">
                  {t.registerAnother}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header with Language Switcher */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">{t.title}</h1>
          <p className="text-slate-600 mb-2">{t.subtitle}</p>
          <p className="text-sm text-slate-500 mb-2">
            {t.legalInfo}{' '}
            <a 
              href={t.legalLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              {t.legalLink}
            </a>
          </p>
          <p className="text-sm font-bold text-slate-700 mb-4">{t.allGuestsRequired}</p>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => onChangeLanguage(language)}
            className="gap-2"
          >
            <Globe className="w-4 h-4" />
            {languageNames[language].flag} {t.changeLanguage}
          </Button>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Data */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <User className="w-5 h-5 text-slate-600" />
                  {t.personalData}
                </CardTitle>
                <CardDescription>{t.personalDataDesc}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="nome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.name} {t.required}</FormLabel>
                        <FormControl>
                          <Input placeholder={t.namePlaceholder} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cognome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.surname} {t.required}</FormLabel>
                        <FormControl>
                          <Input placeholder={t.surnamePlaceholder} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="secondoCognome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          {t.secondSurname} {isSpanishNationality ? t.required : t.secondSurnameOptional}
                        </FormLabel>
                        <FormControl>
                          <Input placeholder={t.secondSurnamePlaceholder} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="nazionalita"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.nationality} {t.required}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder={t.selectNationality} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="max-h-60">
                            {getCountries(language).map((country) => (
                              <SelectItem key={country.value} value={country.value}>
                                {country.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="dataNascita"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>{t.birthDate} {t.required}</FormLabel>
                      <FormControl>
                        <CustomDatePicker
                          value={field.value}
                          onChange={field.onChange}
                          t={t}
                          disabled={field.disabled}
                          error={!!fieldState.error}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Contacts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Mail className="w-5 h-5 text-slate-600" />
                  {t.contacts}
                </CardTitle>
                <CardDescription>{t.contactsDesc}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.email} {t.required}</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder={t.emailPlaceholder} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="telefono"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.phone} {t.required}</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder={t.phonePlaceholder} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Document */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <FileText className="w-5 h-5 text-slate-600" />
                  {t.document}
                </CardTitle>
                <CardDescription>{t.documentDesc}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="tipoDocumento"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.documentType} {t.required}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder={t.selectDocumentType} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {getDocumentTypes(t).map((doc) => (
                              <SelectItem key={doc.value} value={doc.value}>
                                {doc.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="numeroDocumento"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.documentNumber} {t.required}</FormLabel>
                        <FormControl>
                          <Input placeholder={t.documentNumberPlaceholder} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {showNumeroSupporto && (
                  <FormField
                    control={form.control}
                    name="numeroSupporto"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.supportNumber} {t.required}</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder={t.supportNumberPlaceholder} 
                            {...field} 
                            className="uppercase"
                            onChange={(e) => field.onChange(e.target.value.toUpperCase())}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </CardContent>
            </Card>

            {/* Gender */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <User className="w-5 h-5 text-slate-600" />
                  {t.personalInfo}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <FormField
                  control={form.control}
                  name="sesso"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.gender} {t.required}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-full md:w-1/3">
                            <SelectValue placeholder={t.selectGender} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {getGenders(t).map((gender) => (
                            <SelectItem key={gender.value} value={gender.value}>
                              {gender.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Address */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MapPin className="w-5 h-5 text-slate-600" />
                  {t.address}
                </CardTitle>
                <CardDescription>{t.addressDesc}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="via"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.street} {t.required}</FormLabel>
                      <FormControl>
                        <Input placeholder={t.streetPlaceholder} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="citta"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.city} {t.required}</FormLabel>
                        <FormControl>
                          <Input placeholder={t.cityPlaceholder} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cap"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.postalCode} {t.required}</FormLabel>
                        <FormControl>
                          <Input placeholder={t.postalCodePlaceholder} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Check-in */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Calendar className="w-5 h-5 text-slate-600" />
                  {t.checkin}
                </CardTitle>
                <CardDescription>{t.checkinDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <FormField
                  control={form.control}
                  name="dataCheckin"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>{t.checkinDate} {t.required}</FormLabel>
                      <FormControl>
                        <CustomDatePicker
                          value={field.value}
                          onChange={field.onChange}
                          t={t}
                          error={!!fieldState.error}
                          years={checkinYearOptions}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Minors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Users className="w-5 h-5 text-slate-600" />
                  {t.minors}
                </CardTitle>
                <CardDescription>{t.minorsDesc}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="presenzaMinorenni"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">{t.minorsPresent}</FormLabel>
                      </div>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="h-6 w-6"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                {presenzaMinorenni && (
                  <FormField
                    control={form.control}
                    name="relazioniFamigliari"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.familyRelations} {t.required}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t.familyRelationsPlaceholder}
                            className="min-h-24"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </CardContent>
            </Card>

            {/* Error Message */}
            {errorMessage && (
              <Card className="border-red-200 bg-red-50">
                <CardContent className="pt-4">
                  <p className="text-red-600 text-sm">{errorMessage}</p>
                </CardContent>
              </Card>
            )}

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="min-w-64"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t.submitting}
                  </>
                ) : (
                  t.submit
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

// Main Page Component
export default function Page() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null)
  const [showLanguageSelector, setShowLanguageSelector] = useState(false)

  const handleLanguageSelect = (lang: Language) => {
    setSelectedLanguage(lang)
    setShowLanguageSelector(false)
  }

  const handleChangeLanguage = () => {
    setShowLanguageSelector(true)
  }

  // Show language selector if no language is selected or user wants to change
  if (!selectedLanguage || showLanguageSelector) {
    return <LanguageSelector onSelect={handleLanguageSelect} />
  }

  return (
    <GuestRegistrationForm 
      language={selectedLanguage} 
      onChangeLanguage={handleChangeLanguage}
    />
  )
}
