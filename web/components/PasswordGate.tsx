'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const STORAGE_KEY = 'openrun-auth'
const PASSWORD = 'agentpay2026'

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false)
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem(STORAGE_KEY) === 'true') {
      setUnlocked(true)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, 'true')
      setUnlocked(true)
    } else {
      setError(true)
      setTimeout(() => setError(false), 2000)
    }
  }

  if (unlocked) return <>{children}</>

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-dark-bg">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/15 rounded-full blur-[128px]" />
      <div className="relative z-10 w-full max-w-sm text-center">
        <Image src="/openrun/logo-stacked-cyan.svg" alt="Open Run" width={180} height={120} className="mx-auto mb-8" />
        <p className="text-muted text-sm mb-6">This site is currently in preview. Enter the password to continue.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Password"
            autoFocus
            className={`w-full px-4 py-3 bg-card-bg border rounded-lg text-white text-center placeholder:text-muted/50 focus:outline-none transition-colors ${
              error ? 'border-red-500' : 'border-white/10 focus:border-accent'
            }`}
          />
          {error && <p className="text-red-400 text-xs mt-2">Incorrect password</p>}
          <button
            type="submit"
            className="mt-4 w-full px-4 py-3 bg-accent-warm hover:bg-accent-warm/80 text-white font-semibold rounded-lg transition-colors"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  )
}
