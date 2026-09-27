import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://66edba6ada6a5e463d82c89c68610b4e@o4512159695044608.ingest.de.sentry.io/4512159712411728",

  // Cattura il 100% degli errori, riduce le performance traces al 10%
  tracesSampleRate: 0.1,

  // Mostra il dialog "Segnala bug" all'utente quando si verifica un crash
  // Puoi disabilitarlo mettendo false se preferisci silenzioso
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,

  integrations: [
    Sentry.replayIntegration(),
  ],

  // In sviluppo locale puoi vedere i log di Sentry nella console
  debug: false,
});
