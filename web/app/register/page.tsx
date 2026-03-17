'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function RegisterPage() {
  const formRef = useRef<HTMLDivElement>(null)
  const organisedRef = useRef(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [sectionCount, setSectionCount] = useState(0)
  const [sectionTitles, setSectionTitles] = useState<string[]>([])

  const showStep = useCallback((step: number) => {
    const container = formRef.current
    if (!container) return

    const stepDivs = container.querySelectorAll<HTMLElement>('[data-step]')
    stepDivs.forEach((el) => {
      el.style.display = el.getAttribute('data-step') === String(step) ? 'block' : 'none'
    })
    setCurrentStep(step)
    container.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const organiseSteps = useCallback(() => {
    if (organisedRef.current) return
    const container = formRef.current
    if (!container) return

    const form = container.querySelector('form')
    if (!form) return

    const children = Array.from(form.children) as HTMLElement[]

    // Identify section title fieldsets (contain h3) and "Next" button fieldsets (contain .btn-next)
    const isSectionTitle = (el: HTMLElement) =>
      el.tagName === 'FIELDSET' && el.querySelector('.hs-richtext h3') !== null

    const isNextButton = (el: HTMLElement) =>
      el.tagName === 'FIELDSET' && el.querySelector('.btn-next') !== null

    // Check we have section titles
    const titleElements = children.filter(isSectionTitle)
    if (titleElements.length === 0) {
      setSectionCount(1)
      return
    }

    // Build sections: split on section title fieldsets
    const sections: { title: string; elements: HTMLElement[] }[] = []
    let current: { title: string; elements: HTMLElement[] } | null = null

    children.forEach((el) => {
      if (isSectionTitle(el)) {
        // Start a new section
        if (current) sections.push(current)
        const h3 = el.querySelector('h3')
        const title = h3?.textContent?.replace(/^Section \d+:\s*/, '') || `Step ${sections.length + 1}`
        current = { title, elements: [] }
        // Hide the title fieldset
        el.style.display = 'none'
      } else if (isNextButton(el)) {
        // Hide the "Next" button fieldset from HubSpot
        el.style.display = 'none'
      } else if (current) {
        current.elements.push(el)
      }
    })

    // Push the last section
    if (current) sections.push(current)

    if (sections.length <= 1) {
      setSectionCount(1)
      return
    }

    // Wrap each section's elements in a container div
    sections.forEach((section, idx) => {
      if (section.elements.length === 0) return
      const wrapper = document.createElement('div')
      wrapper.setAttribute('data-step', String(idx))
      wrapper.style.display = idx === 0 ? 'block' : 'none'

      section.elements[0].parentNode?.insertBefore(wrapper, section.elements[0])
      section.elements.forEach((el) => wrapper.appendChild(el))
    })

    setSectionTitles(sections.map((s) => s.title))
    setSectionCount(sections.length)
    setCurrentStep(0)
    organisedRef.current = true
  }, [])

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
          cssRequired: '',
          onFormSubmitted: () => {
            window.location.href = '/register/thank-you'
          },
        })
      }
    }
    document.head.appendChild(script)

    // Watch for the form to be rendered
    const observer = new MutationObserver(() => {
      const form = formRef.current?.querySelector('form')
      if (form && form.children.length > 0 && !organisedRef.current) {
        setTimeout(organiseSteps, 300)
      }
    })

    if (formRef.current) {
      observer.observe(formRef.current, { childList: true, subtree: true })
    }

    return () => {
      observer.disconnect()
      document.head.removeChild(script)
    }
  }, [organiseSteps])

  const isLastStep = currentStep === sectionCount - 1

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Link href="/">
            <Image src="/openrun_logo.svg" alt="Open Run" width={140} height={36} className="mx-auto mb-6 h-auto" priority />
          </Link>
          <h1 className="text-3xl font-bold mb-2">Register</h1>
          <p className="text-muted">Join Open Run Agentic Pay</p>
        </div>

        {/* Step indicator */}
        {sectionCount > 1 && (
          <div className="flex items-center justify-center gap-2 mb-10">
            {sectionTitles.map((_, idx) => (
              <div key={idx} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                  idx === currentStep ? 'bg-accent-warm text-white' :
                  idx < currentStep ? 'bg-accent text-dark-bg' :
                  'bg-card-bg text-muted'
                }`}>
                  {idx < currentStep ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : idx + 1}
                </div>
                {idx < sectionCount - 1 && <div className={`w-12 h-px mx-1 ${idx < currentStep ? 'bg-accent' : 'bg-white/10'}`} />}
              </div>
            ))}
          </div>
        )}

        {/* Section title */}
        {sectionCount > 1 && sectionTitles[currentStep] && (
          <h2 className="text-xl font-bold mb-4 text-center">{sectionTitles[currentStep]}</h2>
        )}

        <div className="glass-card rounded-xl p-6 sm:p-8">
          <div id="hubspot-form" ref={formRef} />
        </div>

        {/* Step navigation */}
        {sectionCount > 1 && (
          <div className="flex items-center justify-between mt-6">
            {currentStep > 0 ? (
              <button
                onClick={() => showStep(currentStep - 1)}
                className="px-5 py-2.5 text-muted hover:text-white transition-colors text-sm"
              >
                Back
              </button>
            ) : (
              <Link href="/" className="px-5 py-2.5 text-muted hover:text-white transition-colors text-sm">
                Cancel
              </Link>
            )}

            {!isLastStep && (
              <button
                onClick={() => showStep(currentStep + 1)}
                className="px-6 py-2.5 bg-accent-warm hover:bg-accent-warm/80 text-white font-semibold rounded-lg transition-colors text-sm"
              >
                Continue
              </button>
            )}
          </div>
        )}

        {sectionCount > 1 && (
          <div className="flex justify-center gap-8 mt-4 text-xs text-muted">
            {sectionTitles.map((title, idx) => (
              <span key={idx} className={currentStep === idx ? 'text-white' : ''}>{title}</span>
            ))}
          </div>
        )}

        {sectionCount <= 1 && (
          <div className="text-center mt-6">
            <Link href="/" className="text-sm text-muted hover:text-white transition-colors">
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
