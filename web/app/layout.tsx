import type { Metadata } from 'next'
import Script from 'next/script'
import PasswordGate from '@/components/PasswordGate'
import './globals.css'

export const metadata: Metadata = {
  title: 'Open Run Agentic Pay | Powered by the BSV Association',
  description: 'Build the future where AI agents pay each other. A global online hackathon challenging developers to build applications where AI agents autonomously discover, negotiate, and exchange value through BSV micro-payments.',
  keywords: ['Open Run', 'Agentic Pay', 'Open Run Agentic Pay', 'hackathon', 'BSV', 'blockchain', 'AI agents', 'micro-payments', 'agentic payments', 'BSV Association'],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Open Run Agentic Pay | Powered by the BSV Association',
    description: 'Build the future where AI agents pay each other.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Open Run Agentic Pay | Powered by the BSV Association',
    description: 'Build the future where AI agents pay each other.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TBZFF2MR');`}
        </Script>
        {/* End Google Tag Manager */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TBZFF2MR"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <PasswordGate>{children}</PasswordGate>
        {/* HubSpot Tracking Code */}
        <Script
          id="hs-script-loader"
          src="//js.hs-scripts.com/9196045.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
