/**
 * One-time migration: data/registrations.json → SQLite
 * Run with: npx tsx lib/migrate.ts
 */
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'
import db from './db'

const JSON_PATH = join(process.cwd(), 'data', 'registrations.json')

if (!existsSync(JSON_PATH)) {
  console.log('No registrations.json found, nothing to migrate.')
  process.exit(0)
}

const records = JSON.parse(readFileSync(JSON_PATH, 'utf-8'))

const insert = db.prepare(`
  INSERT OR IGNORE INTO registrations (
    id, timestamp, name, email, country, github, x_handle, discord,
    dev_level, bsv_experience, ai_tool, primary_language,
    team_preference, looking_for_team, accept_rules, accept_coc,
    email_consent, partner_data_sharing
  ) VALUES (
    @id, @timestamp, @name, @email, @country, @github, @x_handle, @discord,
    @dev_level, @bsv_experience, @ai_tool, @primary_language,
    @team_preference, @looking_for_team, @accept_rules, @accept_coc,
    @email_consent, @partner_data_sharing
  )
`)

const migrate = db.transaction(() => {
  for (const r of records) {
    insert.run({
      id: r.id,
      timestamp: r.timestamp,
      name: r.name,
      email: r.email,
      country: r.country,
      github: r.github || '',
      x_handle: r.xHandle || '',
      discord: r.discord || '',
      dev_level: r.devLevel || '',
      bsv_experience: r.bsvExperience || '',
      ai_tool: r.aiTool || '',
      primary_language: r.primaryLanguage || '',
      team_preference: r.teamPreference || 'solo',
      looking_for_team: r.lookingForTeam ? 1 : 0,
      accept_rules: r.acceptRules ? 1 : 0,
      accept_coc: r.acceptCoC ? 1 : 0,
      email_consent: r.emailConsent ? 1 : 0,
      partner_data_sharing: r.partnerDataSharing ? 1 : 0,
    })
  }
})

migrate()
console.log(`Migrated ${records.length} records to SQLite.`)
