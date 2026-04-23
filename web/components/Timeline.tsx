export default function Timeline() {
  const events = [
    { date: 'Mon Mar 23', label: 'Registrations Start', desc: 'Website live, announcement across all channels', active: false },
    { date: 'Thu Mar 27', label: 'Resources Published', desc: 'Starter templates & guides released', active: false },
    { date: 'Mon Apr 6', label: 'Hacking Begins', desc: '12 days to build your multi-agent application', highlight: true, active: false },
    { date: 'Apr 17 – 23', label: 'Judging Window', desc: 'Judges reviewed all submissions', highlight: true, active: false },
    { date: 'Wed Apr 23', label: 'Winners Announced', desc: 'Results live — see Winners section', highlight: true, active: true },
  ]

  return (
    <section id="timeline" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Timeline</h2>
          <p className="text-muted text-lg">All times in UTC</p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-white/10 sm:-translate-x-px" />

          <div className="space-y-8">
            {events.map((event, i) => (
              <div
                key={i}
                className={`relative flex items-start gap-6 sm:gap-0 ${
                  i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full -translate-x-1.5 mt-1.5 z-10"
                  style={{
                    backgroundColor: event.highlight ? '#FFB800' : event.active ? '#00D4FF' : '#1E1E2E',
                    border: `2px solid ${event.highlight ? '#FFB800' : event.active ? '#00D4FF' : '#94A3B8'}`,
                  }}
                />

                {/* Content */}
                <div className={`ml-10 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                  <div className={`glass-card rounded-lg p-4 inline-block ${event.highlight ? 'border-accent-warm/30' : ''}`}>
                    <div className="font-mono text-xs text-accent mb-1">{event.date}</div>
                    <div className="font-bold">{event.label}</div>
                    <div className="text-sm text-muted">{event.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
