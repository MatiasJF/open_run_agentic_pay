import Image from 'next/image'

export default function Partners() {
  return (
    <section id="partners" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Partners</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Open Run AgentPay is powered by the BSV Association and supported by community partner ESBC.
          </p>
        </div>

        {/* Organizer */}
        <div className="text-center mb-16">
          <div className="text-sm font-mono text-accent mb-4 uppercase tracking-wider">Organized By</div>
          <div className="glass-card rounded-xl px-8 py-6 inline-block">
            <Image src="/openrun/logo-bsva-lockup-white.svg" alt="Open Run - powered by BSV Association" width={260} height={120} />
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
                <Image src="/partners/esbc.jpeg" alt="ESBC" width={64} height={64} className="rounded" />
                <span className="text-lg font-bold">ESBC</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
