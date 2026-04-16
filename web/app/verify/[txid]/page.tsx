import Link from 'next/link'
import Image from 'next/image'
import { VerifyPanel, verifyCertificateTx } from '@/certificate-kit'

export default async function VerifyTx({ params }: { params: Promise<{ txid: string }> }) {
  const { txid } = await params
  const result = await verifyCertificateTx(txid)

  return (
    <main className="min-h-screen">
      <header className="border-b border-white/5 bg-dark-bg/80 backdrop-blur-lg">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/openrun_logo.svg" alt="Open Run Agentic Pay" width={160} height={40} />
          </Link>
          <Link href="/certificate" className="text-sm text-muted hover:text-white">
            ← Claim a certificate
          </Link>
        </div>
      </header>

      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex items-baseline justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">Verification</p>
              <h1 className="mt-2 text-3xl font-bold text-white">Certificate check</h1>
            </div>
            <a
              href={`https://whatsonchain.com/tx/${txid}`}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-accent hover:underline"
            >
              Open on WhatsOnChain →
            </a>
          </div>

          <VerifyPanel result={result} />
        </div>
      </section>
    </main>
  )
}
