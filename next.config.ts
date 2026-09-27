import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default withSentryConfig(nextConfig, {
  org: "alessandro-pavoni",
  project: "javascript-nextjs",

  // Carica le source maps su Sentry per vedere il codice originale negli errori
  silent: !process.env.CI,

  widenClientFileUpload: true,

  hideSourceMaps: true,

  disableLogger: true,

  automaticVercelMonitors: true,
});
