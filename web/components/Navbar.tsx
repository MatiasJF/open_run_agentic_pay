'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { href: '#winners', label: 'Winners' },
  { href: '#prizes', label: 'Prizes' },
  { href: '#challenge', label: 'Challenge' },
  { href: '#techstack', label: 'Tech Stack' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#judges', label: 'Judges' },
  { href: '#partners', label: 'Partners' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/openrun_logo.svg" alt="Open Run Agentic Pay" width={160} height={40} />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#winners"
              className="ml-2 px-5 py-2 bg-accent-warm hover:bg-accent-warm/80 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              See Winners
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-dark-bg/95 backdrop-blur-lg border-b border-white/5">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-muted hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#winners"
              className="block mt-4 px-5 py-2 bg-accent-warm hover:bg-accent-warm/80 text-white text-center font-semibold rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              See Winners
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
