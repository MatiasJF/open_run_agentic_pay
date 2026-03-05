import type { Metadata } from 'next'
import PasswordGate from '@/components/PasswordGate'
import './globals.css'

export const metadata: Metadata = {
  title: 'Open Run AgentPay | Powered by the BSV Association',
  description: 'Build the future where AI agents pay each other. A global online hackathon challenging developers to build applications where AI agents autonomously discover, negotiate, and exchange value through BSV micro-payments.',
  keywords: ['Open Run', 'AgentPay', 'Open Run AgentPay', 'hackathon', 'BSV', 'blockchain', 'AI agents', 'micro-payments', 'agentic payments', 'BSV Association'],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Open Run AgentPay | Powered by the BSV Association',
    description: 'Build the future where AI agents pay each other.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Open Run AgentPay | Powered by the BSV Association',
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
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <PasswordGate>{children}</PasswordGate>
      </body>
    </html>
  )
}
