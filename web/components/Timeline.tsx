export default function Timeline() {
  const events = [
    { date: 'Mon Mar 16', label: 'Registration Opens', desc: 'Website live, announcement across all channels', active: true },
    { date: 'Mar 16 – 25', label: 'Registration Period', desc: '10 days of signups + marketing push', active: true },
    { date: 'Thu Mar 20', label: 'Resources Published', desc: 'Starter templates & guides released', active: false },
    { date: 'Tue Mar 25', label: 'Registration Closes', desc: 'Last day to sign up', active: false },
    { date: 'Tue Mar 25', label: 'Onboarding Email', desc: 'Pre-hackathon info sent to all registrants', active: false },
    { date: 'Thu Mar 26', label: 'Hacking Begins', desc: 'Kickoff livestream at 10:00 UTC — 14 days to build', highlight: true, active: false },
    { date: 'Mar 26 – Apr 9', label: 'Hacking Period', desc: '14 days to build your multi-agent application', active: false },
    { date: 'Wed Apr 9', label: 'Submissions Due', desc: 'Hard deadline: 23:59 UTC', active: false },
    { date: 'Apr 10 – 14', label: 'Judging Period', desc: 'Panel reviews all submissions', active: false },
    { date: 'Tue Apr 15', label: 'Results Announced', desc: 'Winners announced — 18:00 UTC', highlight: true, active: false },
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
