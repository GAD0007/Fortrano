import { escapeHtml, getMailbox, getMailClient } from './_lib/mailer.js'

type ContactPayload = {
  email?: unknown
  message?: unknown
  name?: unknown
  website?: unknown
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export default {
  async fetch(request: Request) {
    if (request.method !== 'POST') {
      return Response.json({ error: 'Method not allowed' }, { status: 405 })
    }

    try {
      const payload = (await request.json()) as ContactPayload
      const name = typeof payload.name === 'string' ? payload.name.trim() : ''
      const email = typeof payload.email === 'string' ? payload.email.trim() : ''
      const message = typeof payload.message === 'string' ? payload.message.trim() : ''

      if (payload.website) {
        return Response.json({ ok: true })
      }

      if (!name || name.length > 120 || !isValidEmail(email) || email.length > 254 || !message || message.length > 5000) {
        return Response.json({ error: 'Please check the form details and try again.' }, { status: 400 })
      }

      const mailbox = getMailbox()

      await getMailClient().sendMail({
        from: `"Fortrano website" <${process.env.SMTP_USER}>`,
        to: mailbox,
        replyTo: email,
        subject: `New project enquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        html: `
          <h2>New project enquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replaceAll('\n', '<br>')}</p>
        `,
      })

      return Response.json({ ok: true })
    } catch (error) {
      console.error('Unable to send contact form submission', error)
      return Response.json({ error: 'Unable to send your message right now. Please try again shortly.' }, { status: 500 })
    }
  },
}
