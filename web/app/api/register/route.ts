import { NextRequest, NextResponse } from 'next/server'
import { writeFile, readFile, mkdir } from 'fs/promises'
import { join } from 'path'

const DATA_DIR = join(process.cwd(), 'data')
const REGISTRATIONS_FILE = join(DATA_DIR, 'registrations.json')

interface Registration {
  id: string
  timestamp: string
  name: string
  email: string
  country: string
  github: string
  xHandle: string
  discord: string
  devLevel: string
  bsvExperience: string
  aiTool: string
  primaryLanguage: string
  teamPreference: string
  teamName: string
  teamCode: string
  lookingForTeam: boolean
  acceptRules: boolean
  acceptCoC: boolean
  emailConsent: boolean
  partnerDataSharing: boolean
}

async function loadRegistrations(): Promise<Registration[]> {
  try {
    const data = await readFile(REGISTRATIONS_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

async function saveRegistrations(registrations: Registration[]): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true })
  await writeFile(REGISTRATIONS_FILE, JSON.stringify(registrations, null, 2))
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.country) {
      return NextResponse.json({ error: 'Name, email, and country are required' }, { status: 400 })
    }
    if (!body.acceptRules || !body.acceptCoC) {
      return NextResponse.json({ error: 'You must accept the rules and code of conduct' }, { status: 400 })
    }

    // Check for duplicate email
    const registrations = await loadRegistrations()
    if (registrations.some((r) => r.email.toLowerCase() === body.email.toLowerCase())) {
      return NextResponse.json({ error: 'This email is already registered' }, { status: 409 })
    }

    const registration: Registration = {
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      name: body.name,
      email: body.email,
      country: body.country,
      github: body.github || '',
      xHandle: body.xHandle || '',
      discord: body.discord || '',
      devLevel: body.devLevel || '',
      bsvExperience: body.bsvExperience || '',
      aiTool: body.aiTool || '',
      primaryLanguage: body.primaryLanguage || '',
      teamPreference: body.teamPreference || 'solo',
      teamName: body.teamName || '',
      teamCode: body.teamCode || '',
      lookingForTeam: body.lookingForTeam || false,
      acceptRules: body.acceptRules,
      acceptCoC: body.acceptCoC,
      emailConsent: body.emailConsent || false,
      partnerDataSharing: body.partnerDataSharing || false,
    }

    registrations.push(registration)
    await saveRegistrations(registrations)

    return NextResponse.json({
      success: true,
      id: registration.id,
      message: `Welcome to AgentPay, ${registration.name}!`,
    })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  const registrations = await loadRegistrations()
  return NextResponse.json({
    count: registrations.length,
    // Only expose non-sensitive aggregate data
    byCountry: registrations.reduce((acc, r) => {
      acc[r.country] = (acc[r.country] || 0) + 1
      return acc
    }, {} as Record<string, number>),
    byTeamPreference: registrations.reduce((acc, r) => {
      acc[r.teamPreference] = (acc[r.teamPreference] || 0) + 1
      return acc
    }, {} as Record<string, number>),
  })
}
