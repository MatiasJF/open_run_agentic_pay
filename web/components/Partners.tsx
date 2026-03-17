import Image from 'next/image'

export default function Partners() {
  return (
    <section id="partners" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Partners</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Open Run Agentic Pay is powered by the BSV Association and supported by community partner ESBC.
          </p>
        </div>

        {/* Organizer */}
        <div className="text-center mb-16">
          <div className="text-sm font-mono text-accent mb-4 uppercase tracking-wider">Powered By</div>
          <div className="glass-card rounded-xl px-8 py-8 inline-block text-center">
            <Image src="/openrun_logo.svg" alt="Open Run Agentic Pay" width={360} height={160} className="mx-auto mb-4" />
            <p className="text-lg font-semibold text-white">BSV Association</p>
          </div>
        </div>

        {/* Partner tiers */}
        <div className="space-y-12">
          {/* Community */}
          <div>
            <div className="text-center mb-6">
              <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-muted text-sm font-mono">
                COMMUNITY PARTNERS
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.linkedin.com/company/european-students-blockchain-coalition/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-lg px-6 py-4 flex items-center gap-3 hover:border-accent/20 transition-all"
              >
                <Image src="/partners/esbc.jpeg" alt="ESBC" width={100} height={100} className="rounded-lg" />
                <span className="text-2xl font-bold">ESBC</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
