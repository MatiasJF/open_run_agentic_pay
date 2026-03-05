import { NextRequest, NextResponse } from 'next/server'
import ExcelJS from 'exceljs'
import db from '@/lib/db'
import { validateAdmin } from '@/lib/admin-auth'
import type { Registration } from '@/lib/types'

export async function GET(request: NextRequest) {
  const authError = validateAdmin(request)
  if (authError) return authError

  const registrations = db.prepare(`
    SELECT r.*, t.name as team_name, t.invite_code as team_code
    FROM registrations r
    LEFT JOIN team_members tm ON tm.registration_id = r.id
    LEFT JOIN teams t ON t.id = tm.team_id
    ORDER BY r.timestamp DESC
  `).all() as (Registration & { team_name: string | null; team_code: string | null })[]

  const workbook = new ExcelJS.Workbook()
  const sheet = workbook.addWorksheet('Registrations')

  sheet.columns = [
    { header: 'ID', key: 'id', width: 38 },
    { header: 'Timestamp', key: 'timestamp', width: 24 },
    { header: 'Full Name', key: 'name', width: 24 },
    { header: 'Email', key: 'email', width: 30 },
    { header: 'Country', key: 'country', width: 18 },
    { header: 'GitHub', key: 'github', width: 20 },
    { header: 'X Handle', key: 'x_handle', width: 18 },
    { header: 'Discord', key: 'discord', width: 18 },
    { header: 'Developer Level', key: 'dev_level', width: 18 },
    { header: 'BSV Experience', key: 'bsv_experience', width: 18 },
    { header: 'AI Tool', key: 'ai_tool', width: 22 },
    { header: 'Primary Language', key: 'primary_language', width: 18 },
    { header: 'Team Preference', key: 'team_preference', width: 16 },
    { header: 'Team Name', key: 'team_name', width: 20 },
    { header: 'Team Code', key: 'team_code', width: 16 },
    { header: 'Looking For Team', key: 'looking_for_team', width: 16 },
    { header: 'Email Consent', key: 'email_consent', width: 14 },
    { header: 'Partner Data Sharing', key: 'partner_data_sharing', width: 20 },
  ]

  // Style header row
  const headerRow = sheet.getRow(1)
  headerRow.font = { bold: true, color: { argb: 'FFFFFFFF' } }
  headerRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF2D5BFF' } }

  for (const reg of registrations) {
    sheet.addRow({
      ...reg,
      looking_for_team: reg.looking_for_team ? 'Yes' : 'No',
      email_consent: reg.email_consent ? 'Yes' : 'No',
      partner_data_sharing: reg.partner_data_sharing ? 'Yes' : 'No',
      team_name: reg.team_name || '',
      team_code: reg.team_code || '',
    })
  }

  const buffer = await workbook.xlsx.writeBuffer()

  return new NextResponse(buffer as ArrayBuffer, {
    headers: {
      'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'Content-Disposition': `attachment; filename="registrations-${new Date().toISOString().slice(0, 10)}.xlsx"`,
    },
  })
}
