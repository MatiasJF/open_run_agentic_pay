'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Who can participate?',
    a: 'Anyone, anywhere in the world. Individuals and teams of up to 4 members. You must be 18 or older to be eligible for prizes.',
  },
  {
    q: 'Is it free to participate?',
    a: 'Yes, participation is completely free. You will need a small amount of BSV to fund your agent wallets for on-chain transactions (typically less than $1 worth).',
  },
  {
    q: 'Do I need BSV or blockchain experience?',
    a: 'No prior BSV experience is required. We provide the @bsv/simple library, MCP server for AI-assisted development, starter templates, and comprehensive documentation. The tools are designed to make blockchain integration straightforward.',
  },
  {
    q: 'Can I participate solo?',
    a: 'Absolutely! Solo developers using AI coding assistants are treated as first-class participants — this is not a team-only event. Grab your favourite AI coding tool and start building.',
  },
  {
    q: 'What counts as a "working demo"?',
    a: 'A video recording (3-5 minutes) or deployed web app showing your AI agents discovering each other and making autonomous BSV transactions. The agents must transact on-chain — simulated transactions don\'t count.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-dark-bg via-card-bg/20 to-dark-bg">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">FAQ</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold pr-4">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-muted flex-shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-muted text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
