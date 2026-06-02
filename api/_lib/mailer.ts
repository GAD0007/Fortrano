import nodemailer from 'nodemailer'

function getRequiredEnv(name: 'SMTP_USER' | 'SMTP_PASSWORD') {
  const value = process.env[name]

  if (!value) {
    throw new Error(`${name} is not configured`)
  }

  return value
}

export function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

export function getMailClient() {
  const port = Number(process.env.SMTP_PORT ?? '465')

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? 'smtp.hostinger.com',
    port,
    secure: port === 465,
    auth: {
      user: getRequiredEnv('SMTP_USER'),
      pass: getRequiredEnv('SMTP_PASSWORD'),
    },
  })
}

export function getMailbox() {
  return process.env.MAIL_TO ?? getRequiredEnv('SMTP_USER')
}
