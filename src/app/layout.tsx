import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Registrazione Ospiti",
  description: "Modulo di registrazione ospiti per strutture turistiche.",
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
};

// Script iniettato lato client per catturare errori non gestiti
// e inviarli all'API route /api/log-error → Google Sheets "ErrorLog"
const errorLoggerScript = `
(function() {
  function sendError(data) {
    try {
      fetch('/api/log-error', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).catch(function() {});
    } catch(e) {}
  }

  window.addEventListener('error', function(event) {
    sendError({
      message: event.message || 'Unknown error',
      stack: event.error ? event.error.stack : '',
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
    });
  });

  window.addEventListener('unhandledrejection', function(event) {
    sendError({
      message: 'Unhandled Promise Rejection: ' + (event.reason ? String(event.reason) : 'Unknown'),
      stack: event.reason && event.reason.stack ? event.reason.stack : '',
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
    });
  });
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: errorLoggerScript }} />
      </head>
      <body className="antialiased bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
