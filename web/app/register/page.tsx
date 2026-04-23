import Link from 'next/link'
import Image from 'next/image'

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full text-center">
        <Link href="/">
          <Image src="/openrun_logo.svg" alt="Open Run" width={140} height={36} className="mx-auto mb-8 h-auto" priority />
        </Link>

        <div className="glass-card rounded-2xl p-8 sm:p-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent-warm/15 border border-accent-warm/30 mb-6">
            <svg className="w-7 h-7 text-accent-warm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold mb-3">Winners Announced</h1>
          <p className="text-muted mb-6">
            Open Run Agentic Pay has wrapped. Congratulations to all winners — see the full list on the homepage.
          </p>

          <p className="text-sm text-accent-warm mb-8">
            Thank you to every builder who shipped.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/#winners"
              className="w-full sm:w-auto px-6 py-3 bg-accent-warm hover:bg-accent-warm/80 text-white font-semibold rounded-lg transition-colors"
            >
              See Winners
            </Link>
            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-3 border border-accent/30 hover:border-accent/60 text-white font-semibold rounded-lg transition-all hover:bg-accent/5"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
