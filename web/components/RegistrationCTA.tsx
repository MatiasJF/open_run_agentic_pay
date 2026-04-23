export default function RegistrationCTA() {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative glass-card rounded-2xl p-10 sm:p-16 overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent-warm/15 rounded-full blur-[100px]" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Winners Announced
            </h2>
            <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
              Congratulations to John Calhoun, Brendan Lee, B0ase, Francisco, and Thomas Høiby — and a huge thank you to every builder who shipped during Open Run.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#winners"
                className="px-8 py-4 bg-accent-warm hover:bg-accent-warm/80 text-white font-bold rounded-lg text-lg transition-colors"
              >
                See Winners
              </a>
              <a
                href="/resources"
                className="px-8 py-4 border border-accent/30 hover:border-accent/60 text-white font-semibold rounded-lg text-lg transition-all hover:bg-accent/5"
              >
                View Resources
              </a>
            </div>
            <p className="mt-6 text-base text-muted font-semibold">
              Open Run Agentic Pay · Apr 6 – 23
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
