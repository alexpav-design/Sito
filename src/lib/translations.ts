export type Language = 'it' | 'en' | 'es' | 'fr' | 'de' | 'ru'

export const languageNames: Record<Language, { name: string; flag: string }> = {
  it: { name: 'Italiano', flag: '🇮🇹' },
  en: { name: 'English', flag: '🇬🇧' },
  es: { name: 'Español', flag: '🇪🇸' },
  fr: { name: 'Français', flag: '🇫🇷' },
  de: { name: 'Deutsch', flag: '🇩🇪' },
  ru: { name: 'Русский', flag: '🇷🇺' },
}

export const translations = {
  it: {
    // Header
    title: "Registrazione Ospiti",
    subtitle: "Compila il modulo con i tuoi dati per completare la registrazione",
    legalInfo: "Dati raccolti in ottemperanza al decreto Legge 933/2021, per maggiori informazioni:",
    legalLink: "https://www.boe.es/eli/es/rd/2021/10/26/933",
    allGuestsRequired: "Il modulo deve essere compilato per tutti gli ospiti!",
    
    // Language selection
    selectLanguage: "Seleziona Lingua",
    chooseLanguage: "Scegli la lingua per continuare",
    continue: "Continua",
    changeLanguage: "Cambia Lingua",
    
    // Sections
    personalData: "Dati Personali",
    personalDataDesc: "Inserisci i tuoi dati anagrafici",
    contacts: "Contatti",
    contactsDesc: "Inserisci i tuoi recapiti",
    document: "Documento di Identità",
    documentDesc: "Inserisci i dati del tuo documento",
    personalInfo: "Informazioni Personali",
    address: "Domicilio",
    addressDesc: "Inserisci il tuo indirizzo di residenza",
    checkin: "Check-in",
    checkinDesc: "Inserisci la data di arrivo",
    minors: "Minorenni",
    minorsDesc: "Indica se ci sono minori nel gruppo",
    
    // Fields
    name: "Nome",
    namePlaceholder: "Mario",
    surname: "Cognome",
    surnamePlaceholder: "Rossi",
    secondSurname: "Secondo Cognome",
    secondSurnamePlaceholder: "Verdi",
    secondSurnameOptional: "(opzionale)",
    nationality: "Nazionalità",
    selectNationality: "Seleziona nazionalità",
    birthDate: "Data di Nascita",
    selectDate: "Seleziona data",
    selectYear: "Anno",
    selectMonth: "Mese",
    selectDay: "Giorno",
    
    // Contacts
    email: "Email",
    emailPlaceholder: "mario.rossi@email.com",
    phone: "Telefono",
    phonePlaceholder: "+39 333 1234567",
    
    // Document
    documentType: "Tipo di Documento",
    selectDocumentType: "Seleziona tipo documento",
    documentNumber: "Numero Documento",
    documentNumberPlaceholder: "AA1234567",
    supportNumber: "Numero di Supporto",
    supportNumberPlaceholder: "ABC123456",
    
    // Document types
    idCard: "Carta di identità",
    passport: "Passaporto",
    spanishIdCard: "Carta di identità spagnola",
    nie: "NIE (Numero Identità Straniero)",
    
    // Gender
    gender: "Sesso",
    selectGender: "Seleziona sesso",
    male: "Maschio",
    female: "Femmina",
    other: "Altro",
    
    // Address
    street: "Via/Piazza e numero civico",
    streetPlaceholder: "Via Roma 123",
    city: "Città",
    cityPlaceholder: "Milano",
    postalCode: "Codice Postale (CAP)",
    postalCodePlaceholder: "20100",
    
    // Check-in
    checkinDate: "Data di Check-in",
    
    // Minors
    minorsPresent: "Ci sono minorenni nel gruppo?",
    familyRelations: "Relazioni Famigliari",
    familyRelationsPlaceholder: "Descrivi la relazione tra i minori e gli accompagnatori (es. Mario Rossi è il padre di Luca Rossi, Anna Bianchi è la madre di Giulia Bianchi)",
    familyRelationsDesc: "Indica il legame di parentela tra i minori e gli accompagnatori adulti",
    
    // Submit
    submit: "Invia Registrazione",
    submitting: "Invio in corso...",
    
    // Success
    successTitle: "Registrazione Completata!",
    successMessage: "Grazie per aver completato la registrazione. I tuoi dati sono stati salvati con successo.",
    registerAnother: "Registra un altro ospite",
    
    // Errors
    errorTitle: "Si è verificato un errore",
    connectionError: "Si è verificato un errore di connessione. Riprova più tardi.",
    genericError: "Si è verificato un errore durante l'invio del modulo",
    
    // Validation errors
    errors: {
      required: "Questo campo è obbligatorio",
      nameMin: "Il nome deve avere almeno 2 caratteri",
      surnameMin: "Il cognome deve avere almeno 2 caratteri",
      secondSurnameRequired: "Il secondo cognome è obbligatorio per i cittadini spagnoli",
      email: "Inserisci un indirizzo email valido",
      phoneMin: "Il numero di telefono deve avere almeno 8 cifre",
      phoneDigits: "Il numero di telefono deve contenere almeno 8 cifre",
      selectNationality: "Seleziona la nazionalità",
      birthDateRequired: "La data di nascita è obbligatoria",
      birthDateFuture: "La data di nascita non può essere nel futuro",
      selectDocumentType: "Seleziona il tipo di documento",
      documentNumberRequired: "Il numero del documento è obbligatorio",
      supportNumberInvalid: "Il numero di supporto inserito non è valido",
      selectGender: "Seleziona il sesso",
      streetMin: "Inserisci la via/piazza e il numero civico",
      cityMin: "Inserisci la città",
      postalCodeMin: "Inserisci il codice postale",
      postalCodeMax: "Il CAP non può superare i 10 caratteri",
      checkinRequired: "La data di check-in è obbligatoria",
      checkinPast: "La data di check-in non può essere nel passato",
      familyRelationsRequired: "Inserisci le relazioni famigliari dei minori",
    },
    
    // Months
    months: [
      "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
      "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
    ],
    
    // Required field indicator
    required: "*",
  },
  
  en: {
    // Header
    title: "Guest Registration",
    subtitle: "Fill out the form with your details to complete registration",
    legalInfo: "Data collected in compliance with Decree Law 933/2021, for more information:",
    legalLink: "https://www.boe.es/eli/es/rd/2021/10/26/933",
    allGuestsRequired: "The form must be completed for all guests!",
    
    // Language selection
    selectLanguage: "Select Language",
    chooseLanguage: "Choose a language to continue",
    continue: "Continue",
    changeLanguage: "Change Language",
    
    // Sections
    personalData: "Personal Data",
    personalDataDesc: "Enter your personal information",
    contacts: "Contacts",
    contactsDesc: "Enter your contact details",
    document: "Identity Document",
    documentDesc: "Enter your document details",
    personalInfo: "Personal Information",
    address: "Address",
    addressDesc: "Enter your residential address",
    checkin: "Check-in",
    checkinDesc: "Enter your arrival date",
    minors: "Minors",
    minorsDesc: "Indicate if there are minors in the group",
    
    // Fields
    name: "First Name",
    namePlaceholder: "John",
    surname: "Last Name",
    surnamePlaceholder: "Smith",
    secondSurname: "Second Surname",
    secondSurnamePlaceholder: "Johnson",
    secondSurnameOptional: "(optional)",
    nationality: "Nationality",
    selectNationality: "Select nationality",
    birthDate: "Date of Birth",
    selectDate: "Select date",
    selectYear: "Year",
    selectMonth: "Month",
    selectDay: "Day",
    
    // Contacts
    email: "Email",
    emailPlaceholder: "john.smith@email.com",
    phone: "Phone",
    phonePlaceholder: "+1 555 1234567",
    
    // Document
    documentType: "Document Type",
    selectDocumentType: "Select document type",
    documentNumber: "Document Number",
    documentNumberPlaceholder: "AA1234567",
    supportNumber: "Support Number",
    supportNumberPlaceholder: "ABC123456",
    
    // Document types
    idCard: "Identity Card",
    passport: "Passport",
    spanishIdCard: "Spanish Identity Card",
    nie: "NIE (Foreigner Identity Number)",
    
    // Gender
    gender: "Gender",
    selectGender: "Select gender",
    male: "Male",
    female: "Female",
    other: "Other",
    
    // Address
    street: "Street and house number",
    streetPlaceholder: "Main Street 123",
    city: "City",
    cityPlaceholder: "New York",
    postalCode: "Postal Code",
    postalCodePlaceholder: "10001",
    
    // Check-in
    checkinDate: "Check-in Date",
    
    // Minors
    minorsPresent: "Are there minors in the group?",
    familyRelations: "Family Relations",
    familyRelationsPlaceholder: "Describe the relationship between minors and accompanying adults (e.g., John Smith is the father of Luke Smith, Anna White is the mother of Julia White)",
    familyRelationsDesc: "Indicate the family relationship between minors and accompanying adults",
    
    // Submit
    submit: "Submit Registration",
    submitting: "Submitting...",
    
    // Success
    successTitle: "Registration Complete!",
    successMessage: "Thank you for completing the registration. Your data has been successfully saved.",
    registerAnother: "Register another guest",
    
    // Errors
    errorTitle: "An error occurred",
    connectionError: "A connection error occurred. Please try again later.",
    genericError: "An error occurred while submitting the form",
    
    // Validation errors
    errors: {
      required: "This field is required",
      nameMin: "First name must be at least 2 characters",
      surnameMin: "Last name must be at least 2 characters",
      secondSurnameRequired: "Second surname is required for Spanish citizens",
      email: "Please enter a valid email address",
      phoneMin: "Phone number must have at least 8 digits",
      phoneDigits: "Phone number must contain at least 8 digits",
      selectNationality: "Please select nationality",
      birthDateRequired: "Date of birth is required",
      birthDateFuture: "Date of birth cannot be in the future",
      selectDocumentType: "Please select document type",
      documentNumberRequired: "Document number is required",
      supportNumberInvalid: "The support number entered is not valid",
      selectGender: "Please select gender",
      streetMin: "Please enter street and house number",
      cityMin: "Please enter city",
      postalCodeMin: "Please enter postal code",
      postalCodeMax: "Postal code cannot exceed 10 characters",
      checkinRequired: "Check-in date is required",
      checkinPast: "Check-in date cannot be in the past",
      familyRelationsRequired: "Please enter family relations of minors",
    },
    
    // Months
    months: [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ],
    
    // Required field indicator
    required: "*",
  },
  
  es: {
    // Header
    title: "Registro de Huéspedes",
    subtitle: "Complete el formulario con sus datos para finalizar el registro",
    legalInfo: "Datos recopilados en cumplimiento del Decreto Ley 933/2021, para más información:",
    legalLink: "https://www.boe.es/eli/es/rd/2021/10/26/933",
    allGuestsRequired: "¡El formulario debe ser completado para todos los huéspedes!",
    
    // Language selection
    selectLanguage: "Seleccionar Idioma",
    chooseLanguage: "Elija un idioma para continuar",
    continue: "Continuar",
    changeLanguage: "Cambiar Idioma",
    
    // Sections
    personalData: "Datos Personales",
    personalDataDesc: "Ingrese sus datos personales",
    contacts: "Contactos",
    contactsDesc: "Ingrese sus datos de contacto",
    document: "Documento de Identidad",
    documentDesc: "Ingrese los datos de su documento",
    personalInfo: "Información Personal",
    address: "Domicilio",
    addressDesc: "Ingrese su dirección de residencia",
    checkin: "Check-in",
    checkinDesc: "Ingrese la fecha de llegada",
    minors: "Menores de Edad",
    minorsDesc: "Indique si hay menores en el grupo",
    
    // Fields
    name: "Nombre",
    namePlaceholder: "Juan",
    surname: "Primer Apellido",
    surnamePlaceholder: "García",
    secondSurname: "Segundo Apellido",
    secondSurnamePlaceholder: "López",
    secondSurnameOptional: "(opcional)",
    nationality: "Nacionalidad",
    selectNationality: "Seleccionar nacionalidad",
    birthDate: "Fecha de Nacimiento",
    selectDate: "Seleccionar fecha",
    selectYear: "Año",
    selectMonth: "Mes",
    selectDay: "Día",
    
    // Contacts
    email: "Correo Electrónico",
    emailPlaceholder: "juan.garcia@email.com",
    phone: "Teléfono",
    phonePlaceholder: "+34 666 123456",
    
    // Document
    documentType: "Tipo de Documento",
    selectDocumentType: "Seleccionar tipo de documento",
    documentNumber: "Número de Documento",
    documentNumberPlaceholder: "AA1234567",
    supportNumber: "Número de Soporte",
    supportNumberPlaceholder: "ABC123456",
    
    // Document types
    idCard: "Documento Nacional de Identidad",
    passport: "Pasaporte",
    spanishIdCard: "DNI Español",
    nie: "NIE (Número de Identidad de Extranjero)",
    
    // Gender
    gender: "Sexo",
    selectGender: "Seleccionar sexo",
    male: "Masculino",
    female: "Femenino",
    other: "Otro",
    
    // Address
    street: "Calle y número",
    streetPlaceholder: "Calle Mayor 123",
    city: "Ciudad",
    cityPlaceholder: "Madrid",
    postalCode: "Código Postal",
    postalCodePlaceholder: "28001",
    
    // Check-in
    checkinDate: "Fecha de Check-in",
    
    // Minors
    minorsPresent: "¿Hay menores de edad en el grupo?",
    familyRelations: "Relaciones Familiares",
    familyRelationsPlaceholder: "Describa la relación entre los menores y los acompañantes (ej. Juan García es el padre de Lucas García, Ana López es la madre de Julia López)",
    familyRelationsDesc: "Indique el vínculo familiar entre los menores y los adultos acompañantes",
    
    // Submit
    submit: "Enviar Registro",
    submitting: "Enviando...",
    
    // Success
    successTitle: "¡Registro Completado!",
    successMessage: "Gracias por completar el registro. Sus datos han sido guardados exitosamente.",
    registerAnother: "Registrar otro huésped",
    
    // Errors
    errorTitle: "Se ha producido un error",
    connectionError: "Se ha producido un error de conexión. Inténtelo de nuevo más tarde.",
    genericError: "Se ha producido un error al enviar el formulario",
    
    // Validation errors
    errors: {
      required: "Este campo es obligatorio",
      nameMin: "El nombre debe tener al menos 2 caracteres",
      surnameMin: "El apellido debe tener al menos 2 caracteres",
      secondSurnameRequired: "El segundo apellido es obligatorio para ciudadanos españoles",
      email: "Ingrese una dirección de correo electrónico válida",
      phoneMin: "El número de teléfono debe tener al menos 8 dígitos",
      phoneDigits: "El número de teléfono debe contener al menos 8 dígitos",
      selectNationality: "Seleccione la nacionalidad",
      birthDateRequired: "La fecha de nacimiento es obligatoria",
      birthDateFuture: "La fecha de nacimiento no puede ser en el futuro",
      selectDocumentType: "Seleccione el tipo de documento",
      documentNumberRequired: "El número de documento es obligatorio",
      supportNumberInvalid: "El número de soporte introducido no es válido",
      selectGender: "Seleccione el sexo",
      streetMin: "Ingrese la calle y número",
      cityMin: "Ingrese la ciudad",
      postalCodeMin: "Ingrese el código postal",
      postalCodeMax: "El código postal no puede exceder los 10 caracteres",
      checkinRequired: "La fecha de check-in es obligatoria",
      checkinPast: "La fecha de check-in no puede ser en el pasado",
      familyRelationsRequired: "Ingrese las relaciones familiares de los menores",
    },
    
    // Months
    months: [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ],
    
    // Required field indicator
    required: "*",
  },
  
  fr: {
    // Header
    title: "Enregistrement des Invités",
    subtitle: "Remplissez le formulaire avec vos informations pour compléter l'enregistrement",
    legalInfo: "Données collectées conformément au décret-loi 933/2021, pour plus d'informations:",
    legalLink: "https://www.boe.es/eli/es/rd/2021/10/26/933",
    allGuestsRequired: "Le formulaire doit être rempli pour tous les invités!",
    
    // Language selection
    selectLanguage: "Sélectionner la Langue",
    chooseLanguage: "Choisissez une langue pour continuer",
    continue: "Continuer",
    changeLanguage: "Changer de Langue",
    
    // Sections
    personalData: "Données Personnelles",
    personalDataDesc: "Entrez vos informations personnelles",
    contacts: "Contacts",
    contactsDesc: "Entrez vos coordonnées",
    document: "Document d'Identité",
    documentDesc: "Entrez les informations de votre document",
    personalInfo: "Informations Personnelles",
    address: "Domicile",
    addressDesc: "Entrez votre adresse de résidence",
    checkin: "Enregistrement",
    checkinDesc: "Entrez votre date d'arrivée",
    minors: "Mineurs",
    minorsDesc: "Indiquez s'il y a des mineurs dans le groupe",
    
    // Fields
    name: "Prénom",
    namePlaceholder: "Jean",
    surname: "Nom",
    surnamePlaceholder: "Dupont",
    secondSurname: "Deuxième Nom",
    secondSurnamePlaceholder: "Martin",
    secondSurnameOptional: "(optionnel)",
    nationality: "Nationalité",
    selectNationality: "Sélectionner la nationalité",
    birthDate: "Date de Naissance",
    selectDate: "Sélectionner une date",
    selectYear: "Année",
    selectMonth: "Mois",
    selectDay: "Jour",
    
    // Contacts
    email: "Email",
    emailPlaceholder: "jean.dupont@email.com",
    phone: "Téléphone",
    phonePlaceholder: "+33 6 12 34 56 78",
    
    // Document
    documentType: "Type de Document",
    selectDocumentType: "Sélectionner le type de document",
    documentNumber: "Numéro de Document",
    documentNumberPlaceholder: "AA1234567",
    supportNumber: "Numéro de Support",
    supportNumberPlaceholder: "ABC123456",
    
    // Document types
    idCard: "Carte d'Identité",
    passport: "Passeport",
    spanishIdCard: "Carte d'Identité Espagnole",
    nie: "NIE (Numéro d'Identité Étranger)",
    
    // Gender
    gender: "Sexe",
    selectGender: "Sélectionner le sexe",
    male: "Masculin",
    female: "Féminin",
    other: "Autre",
    
    // Address
    street: "Rue et numéro",
    streetPlaceholder: "Rue de la Paix 123",
    city: "Ville",
    cityPlaceholder: "Paris",
    postalCode: "Code Postal",
    postalCodePlaceholder: "75001",
    
    // Check-in
    checkinDate: "Date d'Enregistrement",
    
    // Minors
    minorsPresent: "Y a-t-il des mineurs dans le groupe?",
    familyRelations: "Relations Familiales",
    familyRelationsPlaceholder: "Décrivez la relation entre les mineurs et les accompagnateurs (ex. Jean Dupont est le père de Lucas Dupont, Anne Martin est la mère de Julie Martin)",
    familyRelationsDesc: "Indiquez le lien familial entre les mineurs et les adultes accompagnateurs",
    
    // Submit
    submit: "Soumettre l'Enregistrement",
    submitting: "Envoi en cours...",
    
    // Success
    successTitle: "Enregistrement Terminé!",
    successMessage: "Merci d'avoir complété l'enregistrement. Vos données ont été enregistrées avec succès.",
    registerAnother: "Enregistrer un autre invité",
    
    // Errors
    errorTitle: "Une erreur s'est produite",
    connectionError: "Une erreur de connexion s'est produite. Veuillez réessayer plus tard.",
    genericError: "Une erreur s'est produite lors de l'envoi du formulaire",
    
    // Validation errors
    errors: {
      required: "Ce champ est obligatoire",
      nameMin: "Le prénom doit avoir au moins 2 caractères",
      surnameMin: "Le nom doit avoir au moins 2 caractères",
      secondSurnameRequired: "Le deuxième nom est obligatoire pour les citoyens espagnols",
      email: "Veuillez entrer une adresse email valide",
      phoneMin: "Le numéro de téléphone doit avoir au moins 8 chiffres",
      phoneDigits: "Le numéro de téléphone doit contenir au moins 8 chiffres",
      selectNationality: "Veuillez sélectionner la nationalité",
      birthDateRequired: "La date de naissance est obligatoire",
      birthDateFuture: "La date de naissance ne peut pas être dans le futur",
      selectDocumentType: "Veuillez sélectionner le type de document",
      documentNumberRequired: "Le numéro de document est obligatoire",
      supportNumberInvalid: "Le numéro de support saisi n'est pas valide",
      selectGender: "Veuillez sélectionner le sexe",
      streetMin: "Veuillez entrer la rue et le numéro",
      cityMin: "Veuillez entrer la ville",
      postalCodeMin: "Veuillez entrer le code postal",
      postalCodeMax: "Le code postal ne peut pas dépasser 10 caractères",
      checkinRequired: "La date d'enregistrement est obligatoire",
      checkinPast: "La date d'enregistrement ne peut pas être dans le passé",
      familyRelationsRequired: "Veuillez entrer les relations familiales des mineurs",
    },
    
    // Months
    months: [
      "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
      "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ],
    
    // Required field indicator
    required: "*",
  },
  
  de: {
    // Header
    title: "Gäste-Registrierung",
    subtitle: "Füllen Sie das Formular mit Ihren Daten aus, um die Registrierung abzuschließen",
    legalInfo: "Daten erhoben gemäß Dekretgesetz 933/2021, für weitere Informationen:",
    legalLink: "https://www.boe.es/eli/es/rd/2021/10/26/933",
    allGuestsRequired: "Das Formular muss für alle Gäste ausgefüllt werden!",
    
    // Language selection
    selectLanguage: "Sprache Auswählen",
    chooseLanguage: "Wählen Sie eine Sprache, um fortzufahren",
    continue: "Fortfahren",
    changeLanguage: "Sprache Ändern",
    
    // Sections
    personalData: "Persönliche Daten",
    personalDataDesc: "Geben Sie Ihre persönlichen Daten ein",
    contacts: "Kontakte",
    contactsDesc: "Geben Sie Ihre Kontaktinformationen ein",
    document: "Identitätsdokument",
    documentDesc: "Geben Sie Ihre Dokumentdaten ein",
    personalInfo: "Persönliche Informationen",
    address: "Wohnort",
    addressDesc: "Geben Sie Ihre Wohnadresse ein",
    checkin: "Check-in",
    checkinDesc: "Geben Sie Ihr Anreisedatum ein",
    minors: "Minderjährige",
    minorsDesc: "Geben Sie an, ob Minderjährige in der Gruppe sind",
    
    // Fields
    name: "Vorname",
    namePlaceholder: "Hans",
    surname: "Nachname",
    surnamePlaceholder: "Müller",
    secondSurname: "Zweiter Nachname",
    secondSurnamePlaceholder: "Schmidt",
    secondSurnameOptional: "(optional)",
    nationality: "Nationalität",
    selectNationality: "Nationalität auswählen",
    birthDate: "Geburtsdatum",
    selectDate: "Datum auswählen",
    selectYear: "Jahr",
    selectMonth: "Monat",
    selectDay: "Tag",
    
    // Contacts
    email: "E-Mail",
    emailPlaceholder: "hans.mueller@email.com",
    phone: "Telefon",
    phonePlaceholder: "+49 170 1234567",
    
    // Document
    documentType: "Dokumententyp",
    selectDocumentType: "Dokumententyp auswählen",
    documentNumber: "Dokumentennummer",
    documentNumberPlaceholder: "AA1234567",
    supportNumber: "Unterstützungsnummer",
    supportNumberPlaceholder: "ABC123456",
    
    // Document types
    idCard: "Personalausweis",
    passport: "Reisepass",
    spanishIdCard: "Spanischer Personalausweis",
    nie: "NIE (Ausländeridentitätsnummer)",
    
    // Gender
    gender: "Geschlecht",
    selectGender: "Geschlecht auswählen",
    male: "Männlich",
    female: "Weiblich",
    other: "Divers",
    
    // Address
    street: "Straße und Hausnummer",
    streetPlaceholder: "Hauptstraße 123",
    city: "Stadt",
    cityPlaceholder: "Berlin",
    postalCode: "Postleitzahl",
    postalCodePlaceholder: "10115",
    
    // Check-in
    checkinDate: "Check-in Datum",
    
    // Minors
    minorsPresent: "Gibt es Minderjährige in der Gruppe?",
    familyRelations: "Familienbeziehungen",
    familyRelationsPlaceholder: "Beschreiben Sie die Beziehung zwischen Minderjährigen und Begleitern (z.B. Hans Müller ist der Vater von Lucas Müller, Anna Schmidt ist die Mutter von Julia Schmidt)",
    familyRelationsDesc: "Geben Sie die familiäre Beziehung zwischen Minderjährigen und erwachsenen Begleitern an",
    
    // Submit
    submit: "Registrierung Absenden",
    submitting: "Wird gesendet...",
    
    // Success
    successTitle: "Registrierung Abgeschlossen!",
    successMessage: "Vielen Dank für das Ausfüllen der Registrierung. Ihre Daten wurden erfolgreich gespeichert.",
    registerAnother: "Einen weiteren Gast registrieren",
    
    // Errors
    errorTitle: "Ein Fehler ist aufgetreten",
    connectionError: "Ein Verbindungsfehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
    genericError: "Beim Senden des Formulars ist ein Fehler aufgetreten",
    
    // Validation errors
    errors: {
      required: "Dieses Feld ist erforderlich",
      nameMin: "Der Vorname muss mindestens 2 Zeichen haben",
      surnameMin: "Der Nachname muss mindestens 2 Zeichen haben",
      secondSurnameRequired: "Der zweite Nachname ist für spanische Staatsbürger erforderlich",
      email: "Bitte geben Sie eine gültige E-Mail-Adresse ein",
      phoneMin: "Die Telefonnummer muss mindestens 8 Ziffern haben",
      phoneDigits: "Die Telefonnummer muss mindestens 8 Ziffern enthalten",
      selectNationality: "Bitte wählen Sie die Nationalität",
      birthDateRequired: "Das Geburtsdatum ist erforderlich",
      birthDateFuture: "Das Geburtsdatum kann nicht in der Zukunft liegen",
      selectDocumentType: "Bitte wählen Sie den Dokumententyp",
      documentNumberRequired: "Die Dokumentennummer ist erforderlich",
      supportNumberInvalid: "Die eingegebene Unterstützungsnummer ist ungültig",
      selectGender: "Bitte wählen Sie das Geschlecht",
      streetMin: "Bitte geben Sie Straße und Hausnummer ein",
      cityMin: "Bitte geben Sie die Stadt ein",
      postalCodeMin: "Bitte geben Sie die Postleitzahl ein",
      postalCodeMax: "Die Postleitzahl darf 10 Zeichen nicht überschreiten",
      checkinRequired: "Das Check-in Datum ist erforderlich",
      checkinPast: "Das Check-in Datum kann nicht in der Vergangenheit liegen",
      familyRelationsRequired: "Bitte geben Sie die Familienbeziehungen der Minderjährigen ein",
    },
    
    // Months
    months: [
      "Januar", "Februar", "März", "April", "Mai", "Juni",
      "Juli", "August", "September", "Oktober", "November", "Dezember"
    ],
    
    // Required field indicator
    required: "*",
  },
  
  ru: {
    // Header
    title: "Регистрация Гостей",
    subtitle: "Заполните форму своими данными для завершения регистрации",
    legalInfo: "Данные собраны в соответствии с декретом-законом 933/2021, для дополнительной информации:",
    legalLink: "https://www.boe.es/eli/es/rd/2021/10/26/933",
    allGuestsRequired: "Форма должна быть заполнена для всех гостей!",
    
    // Language selection
    selectLanguage: "Выбрать Язык",
    chooseLanguage: "Выберите язык для продолжения",
    continue: "Продолжить",
    changeLanguage: "Сменить Язык",
    
    // Sections
    personalData: "Личные Данные",
    personalDataDesc: "Введите вашу личную информацию",
    contacts: "Контакты",
    contactsDesc: "Введите ваши контактные данные",
    document: "Документ, Удостоверяющий Личность",
    documentDesc: "Введите данные вашего документа",
    personalInfo: "Личная Информация",
    address: "Адрес Проживания",
    addressDesc: "Введите ваш адрес проживания",
    checkin: "Заезд",
    checkinDesc: "Введите дату прибытия",
    minors: "Несовершеннолетние",
    minorsDesc: "Укажите, есть ли в группе несовершеннолетние",
    
    // Fields
    name: "Имя",
    namePlaceholder: "Иван",
    surname: "Фамилия",
    surnamePlaceholder: "Иванов",
    secondSurname: "Вторая Фамилия",
    secondSurnamePlaceholder: "Петров",
    secondSurnameOptional: "(необязательно)",
    nationality: "Национальность",
    selectNationality: "Выберите национальность",
    birthDate: "Дата Рождения",
    selectDate: "Выберите дату",
    selectYear: "Год",
    selectMonth: "Месяц",
    selectDay: "День",
    
    // Contacts
    email: "Электронная Почта",
    emailPlaceholder: "ivan.ivanov@email.com",
    phone: "Телефон",
    phonePlaceholder: "+7 900 1234567",
    
    // Document
    documentType: "Тип Документа",
    selectDocumentType: "Выберите тип документа",
    documentNumber: "Номер Документа",
    documentNumberPlaceholder: "AA1234567",
    supportNumber: "Номер Поддержки",
    supportNumberPlaceholder: "ABC123456",
    
    // Document types
    idCard: "Удостоверение Личности",
    passport: "Паспорт",
    spanishIdCard: "Испанское Удостоверение Личности",
    nie: "NIE (Идентификационный номер иностранца)",
    
    // Gender
    gender: "Пол",
    selectGender: "Выберите пол",
    male: "Мужской",
    female: "Женский",
    other: "Другой",
    
    // Address
    street: "Улица и номер дома",
    streetPlaceholder: "Улица Ленина 123",
    city: "Город",
    cityPlaceholder: "Москва",
    postalCode: "Почтовый Индекс",
    postalCodePlaceholder: "123456",
    
    // Check-in
    checkinDate: "Дата Заезда",
    
    // Minors
    minorsPresent: "Есть ли в группе несовершеннолетние?",
    familyRelations: "Семейные Связи",
    familyRelationsPlaceholder: "Опишите отношения между несовершеннолетними и сопровождающими (напр. Иван Иванов - отец Луки Иванова, Анна Петрова - мать Юлии Петровой)",
    familyRelationsDesc: "Укажите родственные связи между несовершеннолетними и взрослыми сопровождающими",
    
    // Submit
    submit: "Отправить Регистрацию",
    submitting: "Отправка...",
    
    // Success
    successTitle: "Регистрация Завершена!",
    successMessage: "Спасибо за завершение регистрации. Ваши данные успешно сохранены.",
    registerAnother: "Зарегистрировать другого гостя",
    
    // Errors
    errorTitle: "Произошла ошибка",
    connectionError: "Произошла ошибка соединения. Пожалуйста, попробуйте позже.",
    genericError: "Произошла ошибка при отправке формы",
    
    // Validation errors
    errors: {
      required: "Это поле обязательно для заполнения",
      nameMin: "Имя должно содержать минимум 2 символа",
      surnameMin: "Фамилия должна содержать минимум 2 символа",
      secondSurnameRequired: "Вторая фамилия обязательна для граждан Испании",
      email: "Пожалуйста, введите действительный адрес электронной почты",
      phoneMin: "Номер телефона должен содержать минимум 8 цифр",
      phoneDigits: "Номер телефона должен содержать минимум 8 цифр",
      selectNationality: "Пожалуйста, выберите национальность",
      birthDateRequired: "Дата рождения обязательна",
      birthDateFuture: "Дата рождения не может быть в будущем",
      selectDocumentType: "Пожалуйста, выберите тип документа",
      documentNumberRequired: "Номер документа обязателен",
      supportNumberInvalid: "Введенный номер поддержки недействителен",
      selectGender: "Пожалуйста, выберите пол",
      streetMin: "Пожалуйста, введите улицу и номер дома",
      cityMin: "Пожалуйста, введите город",
      postalCodeMin: "Пожалуйста, введите почтовый индекс",
      postalCodeMax: "Почтовый индекс не может превышать 10 символов",
      checkinRequired: "Дата заезда обязательна",
      checkinPast: "Дата заезда не может быть в прошлом",
      familyRelationsRequired: "Пожалуйста, укажите семейные связи несовершеннолетних",
    },
    
    // Months
    months: [
      "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
      "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ],
    
    // Required field indicator
    required: "*",
  },
}

export type Translations = typeof translations.it
