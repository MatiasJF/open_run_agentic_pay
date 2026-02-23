import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-dark-bg to-dark-bg" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24">
        {/* BSV Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
          <Image src="/logo2_bsv.png" alt="BSV" width={20} height={20} />
          <span className="text-sm text-muted">BSV Blockchain Association</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6">
          <span className="text-white">Agent</span>
          <span className="text-accent">Pay</span>
          <br />
          <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-muted">
            Global Hackathon
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-4">
          Vibe-code the future of autonomous AI payments.
        </p>
        <p className="text-base text-muted/70 max-w-xl mx-auto mb-10">
          Use any AI coding tool you love. Build apps where AI agents discover each other, negotiate, and exchange value through BSV micro-payments.
        </p>

        {/* Dates */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 font-mono text-sm">
          <div className="glass-card rounded-lg px-5 py-3">
            <div className="text-accent font-semibold">REGISTRATION</div>
            <div className="text-white">Feb 24 &ndash; Mar 13</div>
          </div>
          <div className="glass-card rounded-lg px-5 py-3">
            <div className="text-accent font-semibold">HACKING</div>
            <div className="text-white">Mar 15 &ndash; 22</div>
          </div>
          <div className="glass-card rounded-lg px-5 py-3">
            <div className="text-accent font-semibold">RESULTS</div>
            <div className="text-white">Mar 28</div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/register"
            className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg text-lg transition-all glow-primary hover:scale-105"
          >
            Register Now
          </Link>
          <a
            href="#challenge"
            className="px-8 py-3.5 border border-white/20 hover:border-white/40 text-white font-semibold rounded-lg text-lg transition-all hover:bg-white/5"
          >
            View Challenge
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
