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
  const [formBlocked, setFormBlocked] = useState(false)

  const validateCurrentStep = useCallback((): boolean => {
    const container = formRef.current
    if (!container) return false

    const stepWrapper = container.querySelector<HTMLElement>(`[data-step="${currentStep}"]`)
    if (!stepWrapper) return false

    let valid = true

    const addError = (container: Element | null, message: string) => {
      if (container && !container.querySelector('.hs-stepper-error')) {
        const err = document.createElement('div')
        err.className = 'hs-stepper-error'
        err.innerHTML = `<ul class="hs-error-msgs"><li><label class="hs-error-msg">${message}</label></li></ul>`
        container.appendChild(err)
      }
    }

    const clearError = (container: Element | null) => {
      container?.classList.remove('hs-field-invalid')
      container?.querySelector('.hs-stepper-error')?.remove()
    }

    // Find all form fields in the current step (detect required via .hs-form-required OR required attribute)
    const fields = stepWrapper.querySelectorAll<HTMLElement>('.hs-form-field')

    fields.forEach((field) => {
      const isRequired = field.querySelector('.hs-form-required') !== null

      if (!isRequired) return

      // Check for checkboxes (boolean or multi-checkbox)
      const checkboxes = field.querySelectorAll<HTMLInputElement>('input[type="checkbox"]')
      if (checkboxes.length > 0) {
        const anyChecked = Array.from(checkboxes).some((cb) => cb.checked)
        if (!anyChecked) {
          valid = false
          field.classList.add('hs-field-invalid')
          addError(field.querySelector('.input'), 'Please complete this required field.')
        } else {
          clearError(field)
        }
        return
      }

      // Check for radio buttons
      const radios = field.querySelectorAll<HTMLInputElement>('input[type="radio"]')
      if (radios.length > 0) {
        const anySelected = Array.from(radios).some((r) => r.checked)
        if (!anySelected) {
          valid = false
          field.classList.add('hs-field-invalid')
          addError(field.querySelector('.input'), 'Please select an option.')
        } else {
          clearError(field)
        }
        return
      }

      // Check for selects
      const select = field.querySelector<HTMLSelectElement>('select')
      if (select) {
        if (!select.value || select.value === '' || select.value === '—') {
          valid = false
          field.classList.add('hs-field-invalid')
          select.style.borderColor = '#f87171'
          addError(field.querySelector('.input'), 'Please complete this required field.')
        } else {
          clearError(field)
          select.style.borderColor = ''
        }
        return
      }

      // Check text inputs and textareas
      const input = field.querySelector<HTMLInputElement | HTMLTextAreaElement>('input, textarea')
      if (input) {
        if (!input.value || input.value.trim() === '') {
          valid = false
          field.classList.add('hs-field-invalid')
          input.style.borderColor = '#f87171'
          addError(field.querySelector('.input'), 'Please complete this required field.')
        } else {
          clearError(field)
          input.style.borderColor = ''
        }
      }
    })

    // Also check legal consent checkboxes (these are outside .hs-form-field)
    const consentContainer = stepWrapper.querySelector('.legal-consent-container')
    if (consentContainer) {
      const consentCheckboxes = consentContainer.querySelectorAll<HTMLInputElement>('input[type="checkbox"]')
      consentCheckboxes.forEach((cb) => {
        const wrapper = cb.closest('.hs-form-booleancheckbox')
        // Consent checkboxes are always required
        if (!cb.checked) {
          valid = false
          wrapper?.classList.add('hs-field-invalid')
          addError(wrapper, 'Please accept the required consent.')
        } else {
          clearError(wrapper)
        }
      })
    }

    return valid
  }, [currentStep])

  const updateSubmitVisibility = useCallback((container: HTMLElement) => {
    const submitBtn = container.querySelector<HTMLElement>('.hs-submit')
    if (!submitBtn) return

    // Find all consent checkboxes in the last step
    const lastStep = container.querySelector<HTMLElement>(`[data-step="${container.querySelectorAll('[data-step]').length - 1}"]`)
    if (!lastStep) return

    const consentCheckboxes = lastStep.querySelectorAll<HTMLInputElement>(
      '.legal-consent-container input[type="checkbox"], .hs-form-booleancheckbox input[type="checkbox"]'
    )
    // Also check boolean checkboxes inside .hs-form-field (like "I confirm I am over 18")
    const fieldCheckboxes = lastStep.querySelectorAll<HTMLInputElement>(
      '.hs-form-field input[type="checkbox"]'
    )
    const allCheckboxes = new Set([...Array.from(consentCheckboxes), ...Array.from(fieldCheckboxes)])

    const allChecked = Array.from(allCheckboxes).every((cb) => cb.checked)
    submitBtn.style.display = allChecked ? 'block' : 'none'
  }, [])

  const showStep = useCallback((step: number) => {
    const container = formRef.current
    if (!container) return

    const stepDivs = container.querySelectorAll<HTMLElement>('[data-step]')
    stepDivs.forEach((el) => {
      el.style.display = el.getAttribute('data-step') === String(step) ? 'block' : 'none'
    })
    setCurrentStep(step)

    // On last step, manage submit button visibility based on consents
    const totalSteps = stepDivs.length
    if (step === totalSteps - 1) {
      updateSubmitVisibility(container)
    }

    container.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [updateSubmitVisibility])

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

    // Hide submit button initially (shown when all consents are checked on last step)
    const submitBtn = form.querySelector<HTMLElement>('.hs-submit')
    if (submitBtn) submitBtn.style.display = 'none'

    // Add listeners on all checkboxes in the last step to toggle submit visibility
    const lastWrapper = form.querySelector<HTMLElement>(`[data-step="${sections.length - 1}"]`)
    if (lastWrapper) {
      const allCbs = lastWrapper.querySelectorAll<HTMLInputElement>('input[type="checkbox"]')
      allCbs.forEach((cb) => {
        cb.addEventListener('change', () => {
          if (container) updateSubmitVisibility(container)
        })
      })
    }

    setSectionTitles(sections.map((s) => s.title))
    setSectionCount(sections.length)
    setCurrentStep(0)
    organisedRef.current = true
  }, [updateSubmitVisibility])

  useEffect(() => {
    const script = document.createElement('script')
    script.src = '//js.hsforms.net/forms/embed/v2.js'
    script.charset = 'utf-8'
    script.type = 'text/javascript'
    script.async = true

    // Detect if script is blocked (Brave Shields, ad blockers)
    const blockTimeout = setTimeout(() => {
      if (!window.hbspt) setFormBlocked(true)
    }, 6000)

    script.onerror = () => {
      clearTimeout(blockTimeout)
      setFormBlocked(true)
    }

    script.onload = () => {
      clearTimeout(blockTimeout)
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
      clearTimeout(blockTimeout)
      observer.disconnect()
      if (script.parentNode) script.parentNode.removeChild(script)
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

        {/* Ad blocker reminder */}
        {!formBlocked && (
          <div className="flex items-center gap-3 mb-4 px-4 py-3 rounded-lg border border-accent/20 bg-accent/5 text-sm">
            <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-muted">
              <p>Using <strong className="text-white">Brave</strong> or an ad blocker? Please disable shields/blockers for this site to ensure the form loads and submits correctly.</p>
              <p className="mt-1">On <strong className="text-white">Safari</strong> (iOS/macOS), go to Settings &rarr; Safari &rarr; turn off <em>&ldquo;Prevent Cross-Site Tracking&rdquo;</em> to allow the form to submit.</p>
            </div>
          </div>
        )}

        <div className="glass-card rounded-xl p-6 sm:p-8">
          <div id="hubspot-form" ref={formRef} style={{ display: formBlocked ? 'none' : 'block' }} />
          {formBlocked && (
            <div className="text-center py-8">
              <svg className="w-12 h-12 mx-auto text-accent-warm mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              <h3 className="text-lg font-bold mb-2">Registration form blocked</h3>
              <p className="text-muted text-sm mb-4 max-w-md mx-auto">
                Your browser or ad blocker is preventing the registration form from loading.
                This is commonly caused by Brave Shields, uBlock Origin, or similar extensions.
              </p>
              <div className="text-sm text-muted space-y-2 max-w-md mx-auto">
                <p>Please disable your ad blocker or Brave Shields for this site and refresh the page.</p>
                <p>On <strong className="text-white">Safari</strong> (iOS/macOS), go to Settings &rarr; Safari &rarr; turn off <em>&ldquo;Prevent Cross-Site Tracking&rdquo;</em>.</p>
              </div>
            </div>
          )}
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
                onClick={() => {
                  if (validateCurrentStep()) {
                    showStep(currentStep + 1)
                  }
                }}
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
