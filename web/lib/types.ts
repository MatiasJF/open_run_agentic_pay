export interface Registration {
  id: string
  timestamp: string
  name: string
  email: string
  country: string
  github: string
  x_handle: string
  discord: string
  dev_level: string
  bsv_experience: string
  ai_tool: string
  primary_language: string
  team_preference: string
  looking_for_team: number // SQLite boolean
  accept_rules: number
  accept_coc: number
  email_consent: number
  partner_data_sharing: number
}

export interface Team {
  id: number
  name: string
  invite_code: string
  created_by: string // registration id
  created_at: string
}

export interface TeamMember {
  team_id: number
  registration_id: string
}

export interface RegistrationInput {
  name: string
  email: string
  country: string
  github?: string
  xHandle?: string
  discord?: string
  devLevel: string
  bsvExperience: string
  aiTool?: string
  primaryLanguage?: string
  teamPreference: string
  teamName?: string
  teamCode?: string
  lookingForTeam?: boolean
  acceptRules: boolean
  acceptCoC: boolean
  emailConsent?: boolean
  partnerDataSharing?: boolean
}
