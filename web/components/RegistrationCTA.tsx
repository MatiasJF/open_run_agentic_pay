import Link from 'next/link'

export default function RegistrationCTA() {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative glass-card rounded-2xl p-10 sm:p-16 overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent-warm/15 rounded-full blur-[100px]" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Build the Future?
            </h2>
            <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
              Grab your favorite AI tool, join builders worldwide, and create the first generation of autonomous AI agent payment systems.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/register"
                className="px-8 py-4 bg-accent-warm hover:bg-accent-warm/80 text-white font-bold rounded-lg text-lg transition-all glow-magenta hover:scale-105"
              >
                Register Now
              </Link>
              <a
                href="/resources"
                className="px-8 py-4 border border-accent/30 hover:border-accent/60 text-white font-semibold rounded-lg text-lg transition-all hover:bg-accent/5"
              >
                View Resources
              </a>
            </div>
            <p className="mt-6 text-sm text-muted">
              Registration closes March 25, 2026 &middot; Hacking period March 26 &ndash; April 9
            </p>
            <p className="mt-3 text-xs text-accent-warm/80">
              Note: The hackathon may be turned down if too few teams register. Register early and spread the word!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
