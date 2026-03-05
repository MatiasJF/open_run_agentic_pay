'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Step = 1 | 2 | 3 | 4

interface FormData {
  // Step 1 - Personal
  name: string
  email: string
  country: string
  github: string
  xHandle: string
  discord: string
  // Step 2 - Experience
  devLevel: string
  bsvExperience: string
  aiTool: string
  primaryLanguage: string
  // Step 3 - Team
  teamPreference: string
  teamName: string
  teamCode: string
  lookingForTeam: boolean
  // Step 4 - Agreements
  acceptRules: boolean
  acceptCoC: boolean
  emailConsent: boolean
  partnerDataSharing: boolean
}

interface TeamValidation {
  valid: boolean
  teamName?: string
  memberCount?: number
  isFull?: boolean
}

const initialFormData: FormData = {
  name: '', email: '', country: '', github: '', xHandle: '', discord: '',
  devLevel: '', bsvExperience: '', aiTool: '', primaryLanguage: '',
  teamPreference: 'solo', teamName: '', teamCode: '', lookingForTeam: false,
  acceptRules: false, acceptCoC: false, emailConsent: false, partnerDataSharing: false,
}

export default function RegisterPage() {
  const [step, setStep] = useState<Step>(1)
  const [form, setForm] = useState<FormData>(initialFormData)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [resultInviteCode, setResultInviteCode] = useState('')
  const [resultTeamName, setResultTeamName] = useState('')

  // Team code validation state
  const [teamValidation, setTeamValidation] = useState<TeamValidation | null>(null)
  const [validating, setValidating] = useState(false)

  const update = (field: keyof FormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  // Debounced invite code validation
  const validateCode = useCallback(async (code: string) => {
    if (code.length !== 6) {
      setTeamValidation(null)
      return
    }
    setValidating(true)
    try {
      const res = await fetch(`/api/teams/validate?code=${encodeURIComponent(code)}`)
      const data: TeamValidation = await res.json()
      setTeamValidation(data)
    } catch {
      setTeamValidation(null)
    } finally {
      setValidating(false)
    }
  }, [])

  useEffect(() => {
    if (form.teamPreference !== 'join' || form.teamCode.length !== 6) {
      setTeamValidation(null)
      return
    }
    const timer = setTimeout(() => validateCode(form.teamCode), 400)
    return () => clearTimeout(timer)
  }, [form.teamCode, form.teamPreference, validateCode])

  const canProceed = (): boolean => {
    switch (step) {
      case 1: return !!(form.name && form.email && form.discord && form.country)
      case 2: return !!(form.devLevel && form.bsvExperience)
      case 3: {
        if (form.teamPreference === 'create') return !!form.teamName.trim()
        if (form.teamPreference === 'join') {
          return form.teamCode.length === 6 && !!teamValidation?.valid && !teamValidation?.isFull
        }
        return true
      }
      case 4: return form.acceptRules && form.acceptCoC && form.emailConsent
      default: return false
    }
  }

  const handleSubmit = async () => {
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.error || 'Registration failed')
      }
      if (data.teamInviteCode) setResultInviteCode(data.teamInviteCode)
      if (data.teamName) setResultTeamName(data.teamName)
      setSubmitted(true)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong')
    } finally {
      setSubmitting(false)
    }
  }

  const copyInviteCode = () => {
    navigator.clipboard.writeText(resultInviteCode)
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="text-6xl mb-6">&#10003;</div>
          <h1 className="text-3xl font-bold mb-4">You&apos;re Registered!</h1>
          <p className="text-muted mb-2">
            Welcome to Open Run AgentPay, <span className="text-white font-semibold">{form.name}</span>.
          </p>
          <p className="text-muted mb-8">
            We&apos;ll send event details and resources to <span className="text-accent">{form.email}</span>.
          </p>

          {resultInviteCode && form.teamPreference === 'create' && (
            <div className="mb-8 p-6 glass-card rounded-xl">
              <p className="text-sm text-muted mb-2">Your team invite code for &ldquo;{resultTeamName}&rdquo;</p>
              <div className="flex items-center justify-center gap-3">
                <span className="text-3xl font-bold tracking-[6px] text-accent">{resultInviteCode}</span>
                <button onClick={copyInviteCode} className="px-3 py-1.5 text-xs bg-white/10 hover:bg-white/20 rounded-md transition-colors">
                  Copy
                </button>
              </div>
              <p className="text-xs text-muted mt-3">Share this with up to 3 teammates</p>
            </div>
          )}

          {resultTeamName && form.teamPreference === 'join' && (
            <div className="mb-8 p-4 glass-card rounded-xl">
              <p className="text-sm text-muted">You joined team</p>
              <p className="text-lg font-bold text-accent">{resultTeamName}</p>
            </div>
          )}

          <Link href="/" className="px-6 py-3 bg-accent-warm hover:bg-accent-warm/80 text-white font-semibold rounded-lg transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/">
            <Image src="/openrun/logo-stacked-cyan.svg" alt="Open Run" width={140} height={36} className="mx-auto mb-6" />
          </Link>
          <h1 className="text-3xl font-bold mb-2">Register</h1>
          <p className="text-muted">Join Open Run AgentPay</p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                s === step ? 'bg-accent-warm text-white' :
                s < step ? 'bg-accent text-dark-bg' :
                'bg-card-bg text-muted'
              }`}>
                {s < step ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : s}
              </div>
              {s < 4 && <div className={`w-12 h-px mx-1 ${s < step ? 'bg-accent' : 'bg-white/10'}`} />}
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="glass-card rounded-xl p-6 sm:p-8">
          {/* Step 1 - Personal */}
          {step === 1 && (
            <div className="space-y-5">
              <h2 className="text-xl font-bold mb-4">Personal Information</h2>
              <div>
                <label className="block text-sm font-medium mb-1.5">Full Name *</label>
                <input type="text" value={form.name} onChange={(e) => update('name', e.target.value)}
                  className="w-full px-4 py-2.5 bg-dark-bg border border-white/10 rounded-lg text-white placeholder:text-muted/50 focus:border-accent focus:outline-none"
                  placeholder="Your full name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Email *</label>
                <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)}
                  className="w-full px-4 py-2.5 bg-dark-bg border border-white/10 rounded-lg text-white placeholder:text-muted/50 focus:border-accent focus:outline-none"
                  placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Discord Handle *</label>
                <input type="text" value={form.discord} onChange={(e) => update('discord', e.target.value)}
                  className="w-full px-4 py-2.5 bg-dark-bg border border-white/10 rounded-lg text-white placeholder:text-muted/50 focus:border-accent focus:outline-none"
                  placeholder="username" />
                <p className="text-xs text-muted mt-1">We use Discord as our primary communication channel</p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Country *</label>
                <input type="text" value={form.country} onChange={(e) => update('country', e.target.value)}
                  className="w-full px-4 py-2.5 bg-dark-bg border border-white/10 rounded-lg text-white placeholder:text-muted/50 focus:border-accent focus:outline-none"
                  placeholder="Your country" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">GitHub Username</label>
                <input type="text" value={form.github} onChange={(e) => update('github', e.target.value)}
                  className="w-full px-4 py-2.5 bg-dark-bg border border-white/10 rounded-lg text-white placeholder:text-muted/50 focus:border-accent focus:outline-none"
                  placeholder="github-username" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">X Handle</label>
                <input type="text" value={form.xHandle} onChange={(e) => update('xHandle', e.target.value)}
                  className="w-full px-4 py-2.5 bg-dark-bg border border-white/10 rounded-lg text-white placeholder:text-muted/50 focus:border-accent focus:outline-none"
                  placeholder="@handle" />
              </div>
            </div>
          )}

          {/* Step 2 - Experience */}
          {step === 2 && (
            <div className="space-y-5">
              <h2 className="text-xl font-bold mb-4">Experience</h2>
              <div>
                <label className="block text-sm font-medium mb-1.5">Developer Level *</label>
                <select value={form.devLevel} onChange={(e) => update('devLevel', e.target.value)}
                  className="w-full px-4 py-2.5 bg-dark-bg border border-white/10 rounded-lg text-white focus:border-accent focus:outline-none">
                  <option value="">Select level</option>
                  <option value="beginner">Beginner (0-2 years)</option>
                  <option value="intermediate">Intermediate (2-5 years)</option>
                  <option value="senior">Senior (5-10 years)</option>
                  <option value="expert">Expert (10+ years)</option>
                  <option value="student">Student</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">BSV Experience *</label>
                <select value={form.bsvExperience} onChange={(e) => update('bsvExperience', e.target.value)}
                  className="w-full px-4 py-2.5 bg-dark-bg border border-white/10 rounded-lg text-white focus:border-accent focus:outline-none">
                  <option value="">Select experience</option>
                  <option value="none">No experience</option>
                  <option value="some">Some experience</option>
                  <option value="experienced">Experienced developer</option>
                  <option value="expert">Expert / contributor</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">AI Tool of Choice</label>
                <input type="text" value={form.aiTool} onChange={(e) => update('aiTool', e.target.value)}
                  className="w-full px-4 py-2.5 bg-dark-bg border border-white/10 rounded-lg text-white placeholder:text-muted/50 focus:border-accent focus:outline-none"
                  placeholder="e.g., Claude Code, Cursor, Copilot..." />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Primary Language</label>
                <input type="text" value={form.primaryLanguage} onChange={(e) => update('primaryLanguage', e.target.value)}
                  className="w-full px-4 py-2.5 bg-dark-bg border border-white/10 rounded-lg text-white placeholder:text-muted/50 focus:border-accent focus:outline-none"
                  placeholder="e.g., TypeScript, Python, Go..." />
              </div>
            </div>
          )}

          {/* Step 3 - Team */}
          {step === 3 && (
            <div className="space-y-5">
              <h2 className="text-xl font-bold mb-4">Team</h2>
              <div className="space-y-3">
                {[
                  { value: 'solo', label: 'Solo', desc: 'Compete as an individual' },
                  { value: 'create', label: 'Create a Team', desc: 'Start a new team (up to 4 members)' },
                  { value: 'join', label: 'Join a Team', desc: 'Join with an invite code' },
                ].map((option) => (
                  <label key={option.value} className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-all ${
                    form.teamPreference === option.value
                      ? 'border-accent bg-accent/5'
                      : 'border-white/10 hover:border-white/20'
                  }`}>
                    <input type="radio" name="team" value={option.value}
                      checked={form.teamPreference === option.value}
                      onChange={(e) => update('teamPreference', e.target.value)}
                      className="sr-only" />
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      form.teamPreference === option.value ? 'border-accent' : 'border-muted'
                    }`}>
                      {form.teamPreference === option.value && <div className="w-2 h-2 rounded-full bg-accent" />}
                    </div>
                    <div>
                      <div className="font-semibold">{option.label}</div>
                      <div className="text-sm text-muted">{option.desc}</div>
                    </div>
                  </label>
                ))}
              </div>

              {form.teamPreference === 'create' && (
                <div>
                  <label className="block text-sm font-medium mb-1.5">Team Name *</label>
                  <input type="text" value={form.teamName} onChange={(e) => update('teamName', e.target.value)}
                    className="w-full px-4 py-2.5 bg-dark-bg border border-white/10 rounded-lg text-white placeholder:text-muted/50 focus:border-accent focus:outline-none"
                    placeholder="Your team name" />
                </div>
              )}

              {form.teamPreference === 'join' && (
                <div>
                  <label className="block text-sm font-medium mb-1.5">Team Invite Code *</label>
                  <input
                    type="text"
                    value={form.teamCode}
                    onChange={(e) => update('teamCode', e.target.value.toUpperCase().slice(0, 6))}
                    className="w-full px-4 py-2.5 bg-dark-bg border border-white/10 rounded-lg text-white placeholder:text-muted/50 focus:border-accent focus:outline-none font-mono tracking-widest text-lg"
                    placeholder="XXXXXX"
                    maxLength={6}
                  />
                  {/* Validation feedback */}
                  {form.teamCode.length === 6 && (
                    <div className="mt-2">
                      {validating && (
                        <p className="text-sm text-muted">Checking code...</p>
                      )}
                      {!validating && teamValidation && teamValidation.valid && (
                        <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                          <p className="text-sm text-green-400 font-medium">{teamValidation.teamName}</p>
                          <p className="text-xs text-green-400/70">
                            {teamValidation.memberCount}/4 members
                            {teamValidation.isFull && ' — Team is full'}
                          </p>
                        </div>
                      )}
                      {!validating && teamValidation && !teamValidation.valid && (
                        <p className="text-sm text-red-400">Invalid invite code</p>
                      )}
                    </div>
                  )}
                </div>
              )}

              <label className="flex items-center gap-3 mt-4 cursor-pointer">
                <input type="checkbox" checked={form.lookingForTeam}
                  onChange={(e) => update('lookingForTeam', e.target.checked)}
                  className="w-4 h-4 rounded border-white/20 bg-dark-bg text-accent focus:ring-accent" />
                <span className="text-sm text-muted">I&apos;m open to joining a team (visible on team discovery board)</span>
              </label>
            </div>
          )}

          {/* Step 4 - Agreements */}
          {step === 4 && (
            <div className="space-y-5">
              <h2 className="text-xl font-bold mb-4">Agreements</h2>
              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={form.acceptRules}
                    onChange={(e) => update('acceptRules', e.target.checked)}
                    className="w-4 h-4 mt-0.5 rounded border-white/20 bg-dark-bg text-accent focus:ring-accent" />
                  <span className="text-sm">
                    I have read and agree to the{' '}
                    <Link href="/rules" className="text-accent hover:underline" target="_blank">
                      Hackathon Rules
                    </Link>{' '}*
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={form.acceptCoC}
                    onChange={(e) => update('acceptCoC', e.target.checked)}
                    className="w-4 h-4 mt-0.5 rounded border-white/20 bg-dark-bg text-accent focus:ring-accent" />
                  <span className="text-sm">
                    I agree to the{' '}
                    <Link href="/rules#code-of-conduct" className="text-accent hover:underline" target="_blank">
                      Code of Conduct
                    </Link>{' '}*
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={form.emailConsent}
                    onChange={(e) => update('emailConsent', e.target.checked)}
                    className="w-4 h-4 mt-0.5 rounded border-white/20 bg-dark-bg text-accent focus:ring-accent" />
                  <span className="text-sm">
                    I consent to receiving communications from the BSV Association *
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={form.partnerDataSharing}
                    onChange={(e) => update('partnerDataSharing', e.target.checked)}
                    className="w-4 h-4 mt-0.5 rounded border-white/20 bg-dark-bg text-accent focus:ring-accent" />
                  <span className="text-sm text-muted">
                    I agree to share my registration data with hackathon partners (optional)
                  </span>
                </label>
              </div>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
            {step > 1 ? (
              <button
                onClick={() => setStep((step - 1) as Step)}
                className="px-5 py-2.5 text-muted hover:text-white transition-colors text-sm"
              >
                Back
              </button>
            ) : (
              <Link href="/" className="px-5 py-2.5 text-muted hover:text-white transition-colors text-sm">
                Cancel
              </Link>
            )}

            {step < 4 ? (
              <button
                onClick={() => setStep((step + 1) as Step)}
                disabled={!canProceed()}
                className="px-6 py-2.5 bg-accent-warm hover:bg-accent-warm/80 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors text-sm"
              >
                Continue
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canProceed() || submitting}
                className="px-6 py-2.5 bg-accent-warm hover:bg-accent-warm/80 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors text-sm"
              >
                {submitting ? 'Registering...' : 'Complete Registration'}
              </button>
            )}
          </div>
        </div>

        {/* Step labels */}
        <div className="flex justify-center gap-8 mt-6 text-xs text-muted">
          <span className={step === 1 ? 'text-white' : ''}>Personal</span>
          <span className={step === 2 ? 'text-white' : ''}>Experience</span>
          <span className={step === 3 ? 'text-white' : ''}>Team</span>
          <span className={step === 4 ? 'text-white' : ''}>Confirm</span>
        </div>
      </div>
    </div>
  )
}
