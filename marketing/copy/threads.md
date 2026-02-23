# AgentPay Global Hackathon — X Thread Copy

## Thread 1: "What Are Agentic Payments?" (Tue Feb 25)

**1/7**
What are agentic payments — and why do they matter?

A thread 🧵

**2/7**
Today, when an AI agent wants to buy data, pay for compute, or license content — a human has to approve each transaction.

That's a bottleneck. It doesn't scale.

**3/7**
Agentic payments = AI agents with their own wallets, making autonomous micro-transactions.

Agent A pays Agent B 0.001 cents for a weather data query.
Agent B pays Agent C 0.01 cents for a translation task.

No human in the loop.

**4/7**
Why BSV?

Because it's the only blockchain where:
• Transaction fees are < $0.001
• Settlement is instant
• You can do millions of micro-payments per day
• The protocol scales without L2 complexity

**5/7**
What does this unlock?

→ Data marketplaces (pay per query)
→ AI service networks (pay per task)
→ Content licensing (pay per use)
→ Compute markets (pay per GPU second)
→ IoT economies (pay per sensor reading)

**6/7**
This is what AgentPay Global Hackathon is about.

We're challenging developers to build the first generation of these systems.

8 days of hacking. Solo or team. Free.

**7/7**
Registration is open now through March 13.

Register → [LINK]

#AgentPay #AI #BSV

---

## Thread 2: "5 Project Ideas for AgentPay" (Wed Mar 3)

**1/6**
Need inspiration for #AgentPay? Here are 5 project ideas for the hackathon 🧵

**2/6**
💡 **Data Marketplace Agents**

Agent A has weather data. Agent B needs it. They discover each other, negotiate a price per query, and settle in real time.

No API keys. No subscriptions. Just micro-payments per request.

**3/6**
💡 **AI Service Broker**

A router agent receives complex tasks and farms them out to specialist agents — translation, summarization, code review — paying each one per task.

Think AI microservices with built-in billing.

**4/6**
💡 **Content Licensing Network**

Agents that represent content creators and consumers. Consumer agents discover content, negotiate usage rights, and pay per view/download/embed.

Real-time licensing at machine speed.

**5/6**
💡 **Distributed Compute Settlement**

GPU nodes run as agents. When a client agent needs compute, it discovers available nodes, compares prices, and streams micro-payments as work completes.

Like a decentralized AWS with per-second billing.

**6/6**
💡 **IoT Data Economy**

Sensor agents sell real-time environmental data (temperature, air quality, traffic) to buyer agents who aggregate and analyze it.

Every sensor is a tiny business.

These are just starting points. Build whatever excites YOU.

Register → [LINK] #AgentPay

---

## Thread 3: "Getting Started with @bsv/simple" (Mon Mar 1)

**1/5**
Building for #AgentPay? Here's how to get started with @bsv/simple in 5 minutes 🧵

**2/5**
Step 1: Install

```
npm install @bsv/simple
```

For server-side agent wallets, also install:
```
npm install @bsv/wallet-toolbox better-sqlite3
```

**3/5**
Step 2: Create an agent wallet

Each AI agent needs its own wallet. Here's how to create one on the server:

```typescript
import { Services, StorageClient } from '@bsv/wallet-toolbox'

const services = new Services('mainnet')
const wallet = new StorageClient(services, 'agent-1.db')
```

**4/5**
Step 3: Send a payment

```typescript
const { txid } = await wallet.createAction({
  description: 'Pay for data query',
  outputs: [{
    satoshis: 100,
    lockingScript: recipientScript,
    outputDescription: 'data-payment',
  }],
})
```

That's 100 satoshis (~$0.003) with fees under $0.001.

**5/5**
Step 4: Add the MCP server for AI-assisted development

Configure simple-mcp and your AI coding assistant gets full BSV knowledge — code generation, documentation, patterns.

Full setup guide → [LINK]/resources

Now go build! 🚀 #AgentPay
