import Link from 'next/link'
import Image from 'next/image'

export default function RulesPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-muted hover:text-white transition-colors text-sm mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <Image src="/agentpay-logo.svg" alt="AgentPay" width={120} height={32} />
          </div>
          <h1 className="text-3xl font-bold mb-2">Official Rules</h1>
          <p className="text-muted">AgentPay Global Hackathon 2026</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <section className="glass-card rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold mb-4">1. Eligibility</h2>
            <ul className="space-y-2 text-muted text-sm">
              <li>Open to individuals and teams worldwide, 18 years or older.</li>
              <li>Teams may have 1 to 4 members.</li>
              <li>Employees of BSV Blockchain Association and judges are not eligible for prizes but may participate for fun.</li>
              <li>Participation is free of charge.</li>
            </ul>
          </section>

          <section className="glass-card rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold mb-4">2. Registration</h2>
            <ul className="space-y-2 text-muted text-sm">
              <li>Registration is open from February 24 to March 13, 2026.</li>
              <li>All team members must register individually.</li>
              <li>Each participant may only be part of one team/submission.</li>
              <li>Providing false information will result in disqualification.</li>
            </ul>
          </section>

          <section className="glass-card rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold mb-4">3. The Challenge</h2>
            <ul className="space-y-2 text-muted text-sm">
              <li>Build an application where two or more AI agents autonomously discover each other, negotiate, and exchange value through BSV micro-payments, solving a real-world problem.</li>
              <li>All submissions must include at least 2 AI agents with their own BSV wallets.</li>
              <li>Agents must discover each other using identity registry, DIDs, or overlay.</li>
              <li>Agents must transact autonomously (MessageBox P2P or direct payments).</li>
              <li>A human-facing web UI showing agent activity is required.</li>
            </ul>
          </section>

          <section className="glass-card rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold mb-4">4. Hacking Period</h2>
            <ul className="space-y-2 text-muted text-sm">
              <li>Hacking period: March 15, 2026 at 10:00 UTC to March 22, 2026 at 23:59 UTC.</li>
              <li>All core agent logic and BSV payment integration must be built during this period.</li>
              <li>Pre-existing boilerplate (UI frameworks, auth systems, etc.) is permitted.</li>
              <li>Open-source libraries, APIs, and provided starter templates may be used.</li>
              <li>You may use any AI coding tools or models.</li>
            </ul>
          </section>

          <section className="glass-card rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold mb-4">5. Submission Requirements</h2>
            <ul className="space-y-2 text-muted text-sm">
              <li>A working demo is <strong className="text-white">mandatory</strong>: 3-5 minute video recording or deployed web application.</li>
              <li>Source code in a public or shared GitHub repository.</li>
              <li>README with: project description, architecture diagram, setup instructions, team members.</li>
              <li>On-chain BSV transactions must be verifiable.</li>
              <li>Submissions must be received by March 22, 2026 at 23:59 UTC.</li>
            </ul>
          </section>

          <section className="glass-card rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold mb-4">6. Judging</h2>
            <ul className="space-y-2 text-muted text-sm">
              <li>Innovation & Creativity: 30%</li>
              <li>Technical Execution: 25%</li>
              <li>Working Demo: 20%</li>
              <li>Real-World Applicability: 15%</li>
              <li>Presentation & Clarity: 10%</li>
            </ul>
            <p className="text-muted text-sm mt-3">Judges&apos; decisions are final.</p>
          </section>

          <section className="glass-card rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold mb-4">7. Disqualification</h2>
            <p className="text-muted text-sm mb-3">Submissions will be disqualified for:</p>
            <ul className="space-y-2 text-muted text-sm">
              <li>No on-chain BSV transactions.</li>
              <li>No autonomous agent behavior (human-triggered transactions don&apos;t count).</li>
              <li>Plagiarism or use of someone else&apos;s hackathon submission.</li>
              <li>No working demo submitted.</li>
              <li>Violation of the Code of Conduct.</li>
            </ul>
          </section>

          <section className="glass-card rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold mb-4">8. Intellectual Property</h2>
            <ul className="space-y-2 text-muted text-sm">
              <li>You retain full ownership of your code and intellectual property.</li>
              <li>By submitting, you grant BSV Blockchain Association a non-exclusive license to feature your project in promotional materials.</li>
              <li>Open-sourcing your project is encouraged but not required.</li>
            </ul>
          </section>

          <section className="glass-card rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold mb-4">9. Prizes</h2>
            <ul className="space-y-2 text-muted text-sm">
              <li>Prize categories: Grand Prize, Runner Up, Best Solo Builder, Most Innovative, Best MCP Use.</li>
              <li>Prize amounts will be announced as partner contributions are confirmed.</li>
              <li>Prizes may be awarded in BSV or fiat currency at the organizer&apos;s discretion.</li>
              <li>Winners are responsible for any applicable taxes.</li>
            </ul>
          </section>

          <section id="code-of-conduct" className="glass-card rounded-xl p-6 sm:p-8 border-accent/20">
            <h2 className="text-xl font-bold mb-4">Code of Conduct</h2>
            <p className="text-muted text-sm mb-4">
              All participants, sponsors, and judges are expected to uphold the following standards:
            </p>
            <ul className="space-y-2 text-muted text-sm">
              <li><strong className="text-white">Be respectful.</strong> Treat everyone with dignity. No harassment, discrimination, or intimidation of any kind.</li>
              <li><strong className="text-white">Be inclusive.</strong> Welcome people of all backgrounds, identities, and experience levels.</li>
              <li><strong className="text-white">Be constructive.</strong> Provide helpful feedback. Celebrate others&apos; work.</li>
              <li><strong className="text-white">Be honest.</strong> Don&apos;t misrepresent your work, credentials, or submissions.</li>
              <li><strong className="text-white">Be collaborative.</strong> Help fellow participants. Share knowledge in the Discord.</li>
            </ul>
            <p className="text-muted text-sm mt-4">
              Violations should be reported to <a href="mailto:hackathon@bsvblockchain.org" className="text-accent hover:underline">hackathon@bsvblockchain.org</a>. Organizers reserve the right to remove any participant who violates this code.
            </p>
          </section>
        </div>

        <div className="mt-8 text-center">
          <Link href="/register" className="inline-block px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors">
            Register Now
          </Link>
        </div>
      </div>
    </div>
  )
}
