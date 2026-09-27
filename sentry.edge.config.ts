import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://66edba6ada6a5e463d82c89c68610b4e@o4512159695044608.ingest.de.sentry.io/4512159712411728",

  tracesSampleRate: 0.1,

  debug: false,
});
