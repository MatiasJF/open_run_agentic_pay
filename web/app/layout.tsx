import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AgentPay Global Hackathon | BSV Blockchain',
  description: 'Build the future where AI agents pay each other. A global hackathon focused on agentic payments using BSV micro-transactions.',
  keywords: ['AgentPay', 'hackathon', 'BSV', 'blockchain', 'AI agents', 'micro-payments', 'agentic payments'],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'AgentPay Global Hackathon',
    description: 'Build the future where AI agents pay each other.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AgentPay Global Hackathon',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
