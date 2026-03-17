interface HbsptForms {
  create(config: {
    portalId: string
    formId: string
    region?: string
    target?: string
    redirectUrl?: string
  }): void
}

interface Window {
  hbspt: {
    forms: HbsptForms
  }
}
