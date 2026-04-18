export default function RegistrationCTA() {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative glass-card rounded-2xl p-10 sm:p-16 overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent-warm/15 rounded-full blur-[100px]" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Judging Window Is On
            </h2>
            <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
              Our judges are reviewing the autonomous AI agent payment systems built by participants. Winners will be announced on April 23.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <span
                aria-disabled="true"
                className="px-8 py-4 bg-accent-warm/30 text-white/60 font-bold rounded-lg text-lg cursor-not-allowed select-none"
              >
                Registration Closed
              </span>
              <a
                href="/resources"
                className="px-8 py-4 border border-accent/30 hover:border-accent/60 text-white font-semibold rounded-lg text-lg transition-all hover:bg-accent/5"
              >
                View Resources
              </a>
            </div>
            <p className="mt-6 text-base text-muted font-semibold">
              Results announced April 23
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
