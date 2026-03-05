import Database from 'better-sqlite3'
import { join } from 'path'
import { mkdirSync } from 'fs'

const DATA_DIR = join(process.cwd(), 'data')
const DB_PATH = join(DATA_DIR, 'hackathon.db')

mkdirSync(DATA_DIR, { recursive: true })

const db = new Database(DB_PATH)

// Enable WAL mode for better concurrent read performance
db.pragma('journal_mode = WAL')
db.pragma('foreign_keys = ON')

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS registrations (
    id TEXT PRIMARY KEY,
    timestamp TEXT NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE COLLATE NOCASE,
    country TEXT NOT NULL,
    github TEXT DEFAULT '',
    x_handle TEXT DEFAULT '',
    discord TEXT DEFAULT '',
    dev_level TEXT DEFAULT '',
    bsv_experience TEXT DEFAULT '',
    ai_tool TEXT DEFAULT '',
    primary_language TEXT DEFAULT '',
    team_preference TEXT DEFAULT 'solo',
    looking_for_team INTEGER DEFAULT 0,
    accept_rules INTEGER DEFAULT 0,
    accept_coc INTEGER DEFAULT 0,
    email_consent INTEGER DEFAULT 0,
    partner_data_sharing INTEGER DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS teams (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    invite_code TEXT NOT NULL UNIQUE,
    created_by TEXT NOT NULL REFERENCES registrations(id),
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS team_members (
    team_id INTEGER NOT NULL REFERENCES teams(id),
    registration_id TEXT NOT NULL UNIQUE REFERENCES registrations(id),
    PRIMARY KEY (team_id, registration_id)
  );
`)

export default db
