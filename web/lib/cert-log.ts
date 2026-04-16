import { promises as fs } from 'fs'
import path from 'path'

const DATA_DIR = path.join(process.cwd(), 'data')
const LOG_FILE = path.join(DATA_DIR, 'certificates.jsonl')

const BLOB_STORE = 'aph-certificates'
const BLOB_KEY = 'log'

export type CertLogEntry = {
  txid: string
  recipient: string
  projectName?: string
  teamName?: string
  event: string
  role?: string
  date: string
  issuer: string
  identityKey: string
  signingPubKey?: string
  imageSha256?: string
  issuedAt: string
  loggedAt: string
  clientIp?: string
  userAgent?: string
}

function useBlobs(): boolean {
  return (
    process.env.NETLIFY === 'true' ||
    !!process.env.NETLIFY_BLOBS_CONTEXT ||
    (!!process.env.NETLIFY_SITE_ID && !!process.env.NETLIFY_AUTH_TOKEN)
  )
}

async function getBlobStore() {
  const { getStore } = await import('@netlify/blobs')
  if (process.env.NETLIFY_SITE_ID && process.env.NETLIFY_AUTH_TOKEN) {
    return getStore({
      name: BLOB_STORE,
      siteID: process.env.NETLIFY_SITE_ID,
      token: process.env.NETLIFY_AUTH_TOKEN,
    })
  }
  return getStore(BLOB_STORE)
}

async function readBlob(): Promise<CertLogEntry[]> {
  const store = await getBlobStore()
  const existing = (await store.get(BLOB_KEY, { type: 'json' })) as CertLogEntry[] | null
  return Array.isArray(existing) ? existing : []
}

async function appendBlob(entry: CertLogEntry): Promise<void> {
  const store = await getBlobStore()
  const list = await readBlob()
  list.push(entry)
  await store.setJSON(BLOB_KEY, list)
}

async function readFsLog(): Promise<CertLogEntry[]> {
  try {
    const raw = await fs.readFile(LOG_FILE, 'utf8')
    return raw
      .trim()
      .split('\n')
      .filter(Boolean)
      .map((line) => {
        try {
          return JSON.parse(line) as CertLogEntry
        } catch {
          return null
        }
      })
      .filter((x): x is CertLogEntry => x !== null)
  } catch (e: unknown) {
    if ((e as { code?: string }).code === 'ENOENT') return []
    throw e
  }
}

async function appendFsLog(entry: CertLogEntry): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true })
  await fs.appendFile(LOG_FILE, JSON.stringify(entry) + '\n', 'utf8')
}

export async function appendCertLog(entry: CertLogEntry): Promise<void> {
  if (useBlobs()) return appendBlob(entry)
  return appendFsLog(entry)
}

export async function readCertLog(): Promise<CertLogEntry[]> {
  if (useBlobs()) return readBlob()
  return readFsLog()
}
