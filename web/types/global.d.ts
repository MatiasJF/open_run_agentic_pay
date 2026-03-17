interface HbsptForms {
  create(config: {
    portalId: string
    formId: string
    region?: string
    target?: string
    redirectUrl?: string
    cssRequired?: string
    onFormReady?: () => void
    onFormSubmitted?: () => void
  }): void
}

interface Window {
  hbspt: {
    forms: HbsptForms
  }
}
