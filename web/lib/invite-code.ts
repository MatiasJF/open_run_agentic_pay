const CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789' // no I/1/O/0

export function generateInviteCode(): string {
  let code = ''
  for (let i = 0; i < 6; i++) {
    code += CHARS[Math.floor(Math.random() * CHARS.length)]
  }
  return code
}
