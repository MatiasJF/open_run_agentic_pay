import Link from 'next/link'
import Image from 'next/image'

export default function TermsPage() {
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
            <Image src="/openrun/logo-stacked-cyan.svg" alt="Open Run" width={120} height={32} />
          </div>
          <h1 className="text-3xl font-bold mb-2">Terms and Conditions</h1>
          <p className="text-muted">Open Run Agentic Pay 2026 &mdash; Rules and Regulations</p>
          <a
            href="/OpenRunAgenticPay_Terms_and_Conditions.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-accent hover:underline text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF version
          </a>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          {/* §1 General Provisions */}
          <section className="glass-card rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold mb-4">&sect;1 General Provisions</h2>
            <p className="text-muted text-sm mb-3">
              The Event is organised by BSV Association with its registered office in Zug. Additional information about the Event Organiser is provided in &sect;2 of the Regulations.
            </p>
            <p className="text-muted text-sm">
              Registration for participation in the Event is tantamount to accepting the provisions of the Rules and Regulations.
            </p>
          </section>

          {/* §2 Definitions */}
          <section className="glass-card rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold mb-4">&sect;2 Definitions</h2>
            <ol className="space-y-4 text-muted text-sm list-decimal list-inside">
              <li><strong className="text-white">Event</strong> &ndash; Open Run Agentic Pay hackathon event organised by the Organiser, which will take place between March 16, 2026 through April 15, 2026 in an online form. The Event is global and open to participants worldwide.</li>
              <li><strong className="text-white">Organiser</strong> &ndash; BSV Association. The BSV Association is a Switzerland-based non-profit organisation that serves as the global advocate for the BSV blockchain. Its mission is to advance adoption and unlock the full potential of BSV as a scalable, secure, energy-efficient public blockchain built for data integrity, enterprise solutions, and government applications.</li>
              <li><strong className="text-white">Participant</strong> &ndash; A person participating in the Event, who meets the conditions of participation specified in &sect;3 of this document.</li>
              <li><strong className="text-white">Mentors</strong> &ndash; Individuals with knowledge and experience in the fields of business, blockchain technology, and artificial intelligence. The role of mentors during the Event is to support Participants with their knowledge and experience and provide advice to teams.</li>
              <li><strong className="text-white">Team Formation</strong> &ndash; Teams may consist of 1 to 4 members. Participants may form teams independently or be matched through the hackathon platform. Solo developers using AI coding assistants are treated as first-class participants.</li>
              <li><strong className="text-white">Solution</strong> &ndash; A working web or mobile application created by the Participant during the course of the Event. The Solution must feature at least two AI agents with their own BSV wallets that autonomously discover each other, negotiate, and exchange value through BSV micro-payments, solving a real-world problem. The Solution must include a human-facing web UI showing agent activity. It must be the Participant&apos;s original work and must not be copied or stolen from other sources.</li>
              <li><strong className="text-white">Jury</strong> &ndash; A panel of judges appointed by the Organiser, consisting of individuals with experience and recognition in the fields of artificial intelligence, blockchain technology, and business.</li>
              <li><strong className="text-white">Website</strong> &ndash; The official hackathon website as published by the Organiser.</li>
              <li><strong className="text-white">Prize</strong> &ndash; A cash prize to be equally divided among the members of the winning team, along with other prizes announced on the Website. Detailed information regarding the Prize is provided in &sect;6 of these Regulations.</li>
              <li><strong className="text-white">Discord</strong> &ndash; The official BSV Association Discord Community created by the Organiser.</li>
            </ol>
          </section>

          {/* §3 Conditions of Participation */}
          <section className="glass-card rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold mb-4">&sect;3 Conditions of Participation in the Event</h2>
            <ol className="space-y-3 text-muted text-sm list-decimal list-inside">
              <li>Participants must be above the age of majority in the country, state, province, or jurisdiction in which they reside at the time of entry.</li>
              <li>To participate in the Event, you must register using the form available on the Website. Registration is open from March 16, 2026 to March 25, 2026. Both registration and participation in the Event are free of charge.</li>
              <li>All team members must register individually. Each Participant may only be part of one team or submission.</li>
              <li>Participation is not permitted for individuals or entities that are subject to United States export controls, trade sanctions, or other restricted party designations.</li>
              <li>Each participant represents and warrants that they are not a Restricted Person. For the purposes of these Rules, a Restricted Person means any individual or entity that: appears on any U.S. government restricted or sanctioned party list, including but not limited to the U.S. Treasury Department&apos;s Specially Designated Nationals (SDN) List or the U.S. Commerce Department&apos;s Denied Persons List, is located, organised, or ordinarily resident in a country or territory subject to comprehensive U.S. sanctions, or is otherwise prohibited from receiving goods, technology, services, or payments under applicable U.S. export control or sanctions laws.</li>
              <li>Participants agree to immediately notify the Hackathon Organiser if they become subject to such restrictions.</li>
              <li>The Organiser reserves the right to disqualify any participant who is determined to be a Restricted Person.</li>
              <li>Employees of the BSV Association and Jury members are not eligible for prizes but may participate for non-competitive purposes.</li>
              <li>Providing false information during registration will result in disqualification.</li>
              <li>All intellectual property developed during the hackathon shall belong to the Participants.</li>
              <li>By submitting a Solution, the Participant represents that the Participant has the necessary rights to grant the licence set forth herein. Additionally, the Participant grants the BSV Association a non-exclusive, perpetual, royalty-free licence to showcase, reproduce, and distribute the original source code and related materials comprising the Solution, solely for purposes of promoting, documenting, and supporting the developer ecosystem surrounding the BSV blockchain. This licence includes the right for the BSV Association to:
                <ol className="mt-2 ml-6 space-y-2 list-[lower-alpha] list-inside">
                  <li>Display and showcase the Solution and its functionality in presentations, promotional materials, demonstrations, case studies, and marketing materials relating to the hackathon or the BSV developer ecosystem;</li>
                  <li>Publish and distribute the Solution&apos;s original source code, documentation, screenshots, and related materials on the BSV Association&apos;s developer relations GitHub repositories, websites, social media channels, and other developer-focused platforms;</li>
                </ol>
              </li>
              <li>Reproduce portions of the Solution&apos;s code or documentation in technical guides, tutorials, and educational materials intended to support developers building on BSV.</li>
              <li>Any software, APIs, or tools provided by the Organiser shall remain the property of the Organiser.</li>
              <li>If a participant enters the Hackathon as part of a company or on behalf of an employer, the participant represents and warrants that: the employer has full knowledge of and consents to the participant&apos;s actions, including participation in the Hackathon and potential receipt of any reward; and the participant&apos;s involvement does not violate any employment agreement, confidentiality obligation, or company policy. These rules shall be binding upon both the participant and, where applicable, their employer.</li>
            </ol>
          </section>

          {/* §4 Event Theme */}
          <section className="glass-card rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold mb-4">&sect;4 Event Theme</h2>
            <ol className="space-y-3 text-muted text-sm list-decimal list-inside">
              <li>During the Event, a competition will be held for Participants, focusing on creating a technological solution where two or more AI agents autonomously discover each other, negotiate, and exchange value through BSV micro-payments, solving a real-world problem.</li>
              <li>Participants may use any AI coding tools or models (Claude, ChatGPT, Cursor, Copilot, Gemini, open-source models, or any combination). The hackathon is fully agent-agnostic; the only requirement is that agents transact on BSV.</li>
              <li>The entire Solution must be developed during the Event. Pre-existing boilerplate (UI frameworks, authentication systems, etc.) is permitted. Open-source libraries, APIs, and provided starter templates may be used.</li>
              <li>The Solution includes the programming layer created as part of its development during the Event.</li>
              <li>All copyrights to the Solution and its components must belong to the Participants who developed it. The Solution must not infringe on the copyrights of third parties or any other intellectual property rights.</li>
              <li>The preparation of the Solution or its components must not violate any laws.</li>
              <li>There shall be no illegal activities and no use of drugs, or illegal arms trafficking.</li>
              <li>Plagiarism or use of unauthorised content will result in removal from the Event.</li>
              <li>The Organiser stipulates that the Event&apos;s theme does not include content of a pornographic nature, violence, or any other adult-only content. Consequently, the Solution must not contain such content.</li>
            </ol>
          </section>

          {/* §5 Event Schedule */}
          <section className="glass-card rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold mb-4">&sect;5 Event Schedule</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-muted">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 pr-4 text-white font-semibold">Date</th>
                    <th className="text-left py-2 pr-4 text-white font-semibold">Event</th>
                    <th className="text-left py-2 text-white font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr><td className="py-2 pr-4 font-mono text-xs">Mar 16, 2026</td><td className="py-2 pr-4">Registration Opens</td><td className="py-2">Website live, announcement across all channels.</td></tr>
                  <tr><td className="py-2 pr-4 font-mono text-xs">Mar 16 &ndash; 25</td><td className="py-2 pr-4">Registration Period</td><td className="py-2">10 days of sign-ups and marketing push.</td></tr>
                  <tr><td className="py-2 pr-4 font-mono text-xs">Mar 20, 2026</td><td className="py-2 pr-4">Resources Published</td><td className="py-2">Documentation guides released.</td></tr>
                  <tr><td className="py-2 pr-4 font-mono text-xs">Mar 25, 2026</td><td className="py-2 pr-4">Registration Closes</td><td className="py-2">Last day to sign up. Onboarding email sent.</td></tr>
                  <tr><td className="py-2 pr-4 font-mono text-xs">Mar 26, 10:00 UTC</td><td className="py-2 pr-4">Hacking Begins</td><td className="py-2">14-day hacking period starts.</td></tr>
                  <tr><td className="py-2 pr-4 font-mono text-xs">Mar 26 &ndash; Apr 9</td><td className="py-2 pr-4">Hacking Period</td><td className="py-2">14 days to build the Solution.</td></tr>
                  <tr><td className="py-2 pr-4 font-mono text-xs">Apr 9, 23:59 UTC</td><td className="py-2 pr-4">Submissions Due</td><td className="py-2">Hard deadline for all deliverables.</td></tr>
                  <tr><td className="py-2 pr-4 font-mono text-xs">Apr 10 &ndash; 14</td><td className="py-2 pr-4">Judging Period</td><td className="py-2">Panel reviews all submissions.</td></tr>
                  <tr><td className="py-2 pr-4 font-mono text-xs">Apr 15, 18:00 UTC</td><td className="py-2 pr-4">Results Announced</td><td className="py-2">Winners officially announced.</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-bold mt-8 mb-4">Submission Requirements</h3>
            <ol className="space-y-2 text-muted text-sm list-decimal list-inside">
              <li>A working demo is mandatory: 3&ndash;5 minute video recording or deployed web application.</li>
              <li>Source code in a public or shared GitHub repository.</li>
              <li>README with: project description, architecture diagram, setup instructions, and team members.</li>
              <li>On-chain BSV transactions must be verifiable.</li>
              <li>Submissions must achieve at least 1.5 million meaningful on-chain transactions within a designated 24-hour window. Transactions must be meaningful to the application&apos;s functionality &mdash; artificial inflation of transaction counts without genuine utility will result in disqualification.</li>
              <li>Submissions must be received by April 9, 2026 at 23:59 UTC.</li>
            </ol>

            <h3 className="text-lg font-bold mt-8 mb-4">Disqualification Criteria</h3>
            <ol className="space-y-2 text-muted text-sm list-decimal list-inside">
              <li>No on-chain BSV transactions.</li>
              <li>No autonomous agent behaviour (human-triggered transactions do not count).</li>
              <li>Plagiarism or reuse of another hackathon submission.</li>
              <li>No working demo submitted.</li>
              <li>Violation of the Code of Conduct, as detailed below.</li>
              <li>Artificial inflation of transaction counts without genuine utility.</li>
              <li>Any false, inaccurate, or misleading information provided by a participant during registration or participation in the Hackathon, including but not limited to identity, contact information, or ownership of submitted materials, may result in immediate disqualification.</li>
            </ol>
          </section>

          {/* §6 Prizes */}
          <section className="glass-card rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold mb-4">&sect;6 Prizes</h2>
            <p className="text-muted text-sm mb-4">The total prize pool is <strong className="text-white">$10,000 USD</strong>, distributed across the following categories:</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 pr-4 text-white font-semibold">Category</th>
                    <th className="text-left py-2 pr-4 text-white font-semibold">Description</th>
                    <th className="text-left py-2 text-white font-semibold">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr><td className="py-2 pr-4 font-semibold">Grand Prize</td><td className="py-2 pr-4">Best overall multi-agent payment application</td><td className="py-2">$4,500</td></tr>
                  <tr><td className="py-2 pr-4 font-semibold">Runner Up</td><td className="py-2 pr-4">Second-place overall submission</td><td className="py-2">$2,500</td></tr>
                  <tr><td className="py-2 pr-4 font-semibold">Best Solo Builder</td><td className="py-2 pr-4">Best project built by a solo participant</td><td className="py-2">$1,000</td></tr>
                  <tr><td className="py-2 pr-4 font-semibold">Most Innovative</td><td className="py-2 pr-4">Most creative or novel use of agent payments</td><td className="py-2">$1,000</td></tr>
                  <tr><td className="py-2 pr-4 font-semibold">Best MCP Use</td><td className="py-2 pr-4">Best integration of the MCP server for AI-assisted development</td><td className="py-2">$1,000</td></tr>
                </tbody>
              </table>
            </div>
            <ol className="space-y-2 text-muted text-sm list-decimal list-inside">
              <li>The Prize will be awarded to the winning team and equally divided among its members.</li>
              <li>Prizes may be awarded in BSV or fiat currency at the Organiser&apos;s discretion.</li>
              <li>If receiving a Prize results in a tax obligation for the Participant, they agree to pay such tax. The Participant acknowledges that all responsibilities related to paying any applicable taxes on the Prize rest with them, not with the Organiser.</li>
            </ol>

            <h3 className="text-lg font-bold mt-8 mb-4">Judging Criteria</h3>
            <p className="text-muted text-sm mb-4">Submissions are scored on 100 points across five criteria:</p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm text-muted">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 pr-4 text-white font-semibold">Criterion</th>
                    <th className="text-left py-2 pr-4 text-white font-semibold">Weight</th>
                    <th className="text-left py-2 text-white font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr><td className="py-2 pr-4 font-semibold">Innovation &amp; Creativity</td><td className="py-2 pr-4">30%</td><td className="py-2">Novelty, pushes the frontier of agents + payments.</td></tr>
                  <tr><td className="py-2 pr-4 font-semibold">Technical Execution</td><td className="py-2 pr-4">25%</td><td className="py-2">Code quality, proper BSV stack usage, error handling.</td></tr>
                  <tr><td className="py-2 pr-4 font-semibold">Working Demo</td><td className="py-2 pr-4">20%</td><td className="py-2">Mandatory. Video or deployed app showing agents transacting.</td></tr>
                  <tr><td className="py-2 pr-4 font-semibold">Real-World Applicability</td><td className="py-2 pr-4">15%</td><td className="py-2">Could this be a real product?</td></tr>
                  <tr><td className="py-2 pr-4 font-semibold">Presentation &amp; Clarity</td><td className="py-2 pr-4">10%</td><td className="py-2">README, architecture diagram, 5-min understandability.</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted text-sm">Winning projects will be selected by a panel of judges. Judges&apos; decisions are final.</p>
          </section>

          {/* §7 Final Provisions */}
          <section className="glass-card rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold mb-4">&sect;7 Final Provisions</h2>
            <ol className="space-y-3 text-muted text-sm list-decimal list-inside">
              <li>Participants, Mentors, and Jury members are required to comply with these Regulations and any additional rules communicated by the Organiser.</li>
              <li>Participation in the Hackathon, submission of materials, or receipt of any reward does not constitute an offer or contract of employment with the Hackathon Organiser or any affiliated entity. Participants acknowledge that submissions are made voluntarily and without expectation of employment. No confidential, fiduciary, agency, or implied contractual relationship is created by participation in the Hackathon.</li>
              <li>It is stipulated that no rights, including copyright to the Solution, are transferred to the Organiser; these rights remain with the Participant. Matters related to determining ownership or co-ownership rights among team Participants are beyond the Organiser&apos;s responsibility and depend solely on agreements between Participants.</li>
              <li>In particularly justified cases, the Organiser reserves the right to amend the Regulations and will promptly notify Participants, Mentors, and Jury members by email. Individuals who do not accept the amended provisions have the right to withdraw from the Event.</li>
              <li>The hackathon may be cancelled or postponed if minimum participation thresholds are not met. In the event of cancellation, all registered Participants will be notified via email.</li>
              <li>The hackathon must be void where prohibited by law.</li>
              <li>In the event of a dispute between the Organiser and a Participant, Participants have the option to use out-of-court methods for resolving complaints and pursuing claims.</li>
              <li>Any violation of these Terms and Conditions will result in the disqualification of the Participant and their Submission.</li>
            </ol>
          </section>

          {/* §8 Code of Conduct */}
          <section id="code-of-conduct" className="glass-card rounded-xl p-6 sm:p-8 border-accent/20">
            <h2 className="text-xl font-bold mb-4">&sect;8 Code of Conduct</h2>
            <p className="text-muted text-sm mb-4">
              All Participants and Jury members are expected to uphold the following standards:
            </p>
            <ol className="space-y-2 text-muted text-sm list-decimal list-inside">
              <li><strong className="text-white">Be respectful.</strong> Treat everyone with dignity. No harassment, discrimination, or intimidation of any kind.</li>
              <li><strong className="text-white">Be inclusive.</strong> Welcome people of all backgrounds, identities, and experience levels.</li>
              <li><strong className="text-white">Be constructive.</strong> Provide helpful feedback. Celebrate others&apos; work.</li>
              <li><strong className="text-white">Be honest.</strong> Do not misrepresent your work, credentials, or submissions.</li>
              <li><strong className="text-white">Be collaborative.</strong> Help fellow Participants. Share knowledge in the Discord.</li>
            </ol>
            <p className="text-muted text-sm mt-4">
              Violations should be reported. The Organiser reserves the right to remove any Participant who violates this Code of Conduct.
            </p>
          </section>

          <div className="text-center text-xs text-muted pt-4">
            Version 1.0 &mdash; March 2026
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/register" className="inline-block px-6 py-3 bg-accent-warm hover:bg-accent-warm/80 text-white font-semibold rounded-lg transition-colors">
            Register Now
          </Link>
        </div>
      </div>
    </div>
  )
}
