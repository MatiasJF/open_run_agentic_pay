'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function RegisterPage() {
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = '//js.hsforms.net/forms/embed/v2.js'
    script.charset = 'utf-8'
    script.type = 'text/javascript'
    script.async = true
    script.onload = () => {
      if (window.hbspt && formRef.current) {
        window.hbspt.forms.create({
          portalId: '9196045',
          formId: '9352ccea-8572-4bf5-a526-67fa6533e48a',
          region: 'na1',
          target: '#hubspot-form',
        })
      }
    }
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Link href="/">
            <Image src="/openrun/logo-stacked-cyan.svg" alt="Open Run" width={140} height={36} className="mx-auto mb-6" />
          </Link>
          <h1 className="text-3xl font-bold mb-2">Register</h1>
          <p className="text-muted">Join Open Run Agentic Pay</p>
        </div>

        <div className="glass-card rounded-xl p-6 sm:p-8">
          <div id="hubspot-form" ref={formRef} />
        </div>

        <div className="text-center mt-6">
          <Link href="/" className="text-sm text-muted hover:text-white transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
