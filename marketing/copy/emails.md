# AgentPay Global Hackathon — Email Templates

---

## Email 1: Registration Confirmation

**Subject:** Welcome to AgentPay Global Hackathon! 🚀

**Body:**

Hi {{name}},

You're registered for the **AgentPay Global Hackathon**!

Here's what to expect:

**Key Dates:**
- **Now – Mar 13:** Registration period (invite your friends!)
- **Mar 7:** Starter templates and resources go live
- **Mar 14:** Pre-hackathon onboarding email
- **Mar 15, 10:00 UTC:** Hacking begins (kickoff stream)
- **Mar 22, 23:59 UTC:** Submissions due
- **Mar 28, 18:00 UTC:** Results ceremony

**Get Ready:**
1. Download the [BSV Desktop Wallet](https://desktop.bsvb.tech) — you'll need this to fund agent wallets
2. Check out the [Resources page]({{site_url}}/resources) for documentation and setup guides
3. Join our [Discord server](https://discord.gg/bsvblockchain) for support and team formation

**Your Registration Details:**
- Team preference: {{team_preference}}
- Looking for team: {{looking_for_team}}

{{#if looking_for_team}}
We'll add you to the team discovery board. Check the website after March 7 to browse and connect with potential teammates.
{{/if}}

Questions? Reply to this email or ask in #hackathon-support on Discord.

See you at the hackathon!

— The AgentPay Team
BSV Blockchain Association

---

## Email 2: Pre-Hackathon Onboarding (Mar 14)

**Subject:** AgentPay starts TOMORROW — everything you need to know

**Body:**

Hi {{name}},

The hackathon starts **tomorrow, March 15 at 10:00 UTC**. Here's everything you need:

---

**⚡ KICKOFF**

Join the kickoff livestream tomorrow at 10:00 UTC:
[Stream Link]

---

**🛠 TOOLS & SETUP**

Make sure you have these ready:

1. **@bsv/simple** — `npm install @bsv/simple`
2. **BSV Desktop Wallet** — [Download](https://desktop.bsvb.tech)
3. **MCP Server** (optional but recommended) — [Setup guide]({{site_url}}/resources)
4. **Starter Templates** — [Available now]({{site_url}}/resources)

---

**📋 CHALLENGE REMINDER**

Build an application where **two or more AI agents autonomously discover each other, negotiate, and exchange value through BSV micro-payments** — solving a real-world problem.

Requirements:
- At least 2 AI agents with their own BSV wallets
- Agents discover each other (identity registry, DIDs, or overlay)
- Agents transact autonomously
- Solves a real, identifiable problem
- Human-facing web UI showing agent activity

---

**📤 SUBMISSION**

Due: **March 22, 23:59 UTC**

You'll need to submit:
1. Working demo (3-5 min video or deployed app)
2. GitHub repository
3. README with architecture diagram

---

**💬 SUPPORT**

- Discord: #hackathon-support
- Email: hackathon@bsvblockchain.org

Good luck! Build something amazing.

— The AgentPay Team

---

## Email 3: 48 Hours Remaining (Mar 20)

**Subject:** 48 hours left — submit by Sunday 23:59 UTC

**Body:**

Hi {{name}},

Quick reminder: submissions close **Sunday, March 22 at 23:59 UTC**.

**Submission checklist:**
☐ Working demo (video or deployed app)
☐ Public GitHub repository
☐ README with description, architecture, setup instructions
☐ On-chain BSV transactions (verifiable)

**Judging criteria:**
- Innovation & Creativity (30%)
- Technical Execution (25%)
- Working Demo (20%)
- Real-World Applicability (15%)
- Presentation & Clarity (10%)

Don't overthink it — a clean demo showing agents transacting autonomously is what matters most.

Submit here: [Submission Link]

Need help? #hackathon-support on Discord.

— The AgentPay Team

---

## Email 4: Results Announcement (Mar 28)

**Subject:** AgentPay results are in! 🏆

**Body:**

Hi {{name}},

Thank you for participating in the AgentPay Global Hackathon!

We received **{{total_submissions}}** submissions from **{{total_countries}}** countries. The quality was incredible.

**🏆 WINNERS**

**Grand Prize:** {{grand_prize_name}} — {{grand_prize_project}}
{{grand_prize_description}}

**Runner Up:** {{runner_up_name}} — {{runner_up_project}}

**Best Solo Builder:** {{solo_name}} — {{solo_project}}

**Most Innovative:** {{innovative_name}} — {{innovative_project}}

**Best MCP Use:** {{mcp_name}} — {{mcp_project}}

---

Watch the full results ceremony recording: [Link]

Browse all submissions: [Link]

---

Thank you for being part of the first AgentPay. This is just the beginning of AI agent economies on BSV.

— The AgentPay Team
BSV Blockchain Association
