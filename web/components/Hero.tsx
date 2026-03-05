import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ASCII art background */}
      <div className="absolute inset-0">
        <Image
          src="/ascii/hero-bg.png"
          alt=""
          fill
          className="object-cover opacity-40 hidden sm:block"
          priority
        />
        <Image
          src="/ascii/hero-bg-mobile.png"
          alt=""
          fill
          className="object-cover opacity-40 sm:hidden"
          priority
        />
      </div>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/60 via-dark-bg/40 to-dark-bg" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-32">
        {/* Open Run Logo */}
        <div className="">
          <Image
            src="/openrun/logo-stacked-cyan.svg"
            alt="Open Run"
            width={280}
            height={200}
            className="mx-auto"
            priority
          />
        </div>

        <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-6 mt-4">
          Build the future of autonomous AI payments.
        </p>

        {/* Prize total */}
        <div className="mb-8">
          <span className="text-4xl sm:text-5xl font-black font-mono text-accent-warm">
            $10,000 in Prizes
          </span>
        </div>

        {/* Dates — bigger and bolder */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 font-mono">
          <div className="glass-card rounded-lg px-6 py-4">
            <div className="text-accent font-bold text-sm sm:text-base tracking-wide">REGISTRATION</div>
            <div className="text-white text-xl sm:text-2xl font-bold">Mar 16 &ndash; 25</div>
          </div>
          <div className="glass-card rounded-lg px-6 py-4">
            <div className="text-accent font-bold text-sm sm:text-base tracking-wide">HACKATHON</div>
            <div className="text-white text-xl sm:text-2xl font-bold">Mar 26 &ndash; Apr 9</div>
          </div>
          <div className="glass-card rounded-lg px-6 py-4">
            <div className="text-accent font-bold text-sm sm:text-base tracking-wide">RESULTS</div>
            <div className="text-white text-xl sm:text-2xl font-bold">Apr 15</div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/register"
            className="px-8 py-3.5 bg-accent-warm hover:bg-accent-warm/80 text-white font-bold rounded-lg text-lg transition-all glow-magenta hover:scale-105"
          >
            Register Now
          </Link>
          <a
            href="#challenge"
            className="px-8 py-3.5 border border-accent/30 hover:border-accent/60 text-white font-semibold rounded-lg text-lg transition-all hover:bg-accent/5"
          >
            View Challenge
          </a>
        </div>

        {/* Minimum registration notice */}
        <div className="mt-10 inline-block px-4 py-2 rounded-lg border border-accent-warm/20 bg-accent-warm/5">
          <p className="text-sm text-accent-warm/80">
            This event is subject to a minimum number of registrations. If the required number is not met, the event may be postponed or cancelled.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="mt-6 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
