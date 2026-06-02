import { escapeHtml, getMailbox, getMailClient } from './_lib/mailer.js'

type NewsletterPayload = {
  email?: unknown
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
      const payload = (await request.json()) as NewsletterPayload
      const name = typeof payload.name === 'string' ? payload.name.trim() : ''
      const email = typeof payload.email === 'string' ? payload.email.trim() : ''

      if (payload.website) {
        return Response.json({ ok: true })
      }

      if (!name || name.length > 120 || !isValidEmail(email) || email.length > 254) {
        return Response.json({ error: 'Please enter your name and a valid email address.' }, { status: 400 })
      }

      const mailbox = getMailbox()

      await getMailClient().sendMail({
        from: `"Fortrano website" <${process.env.SMTP_USER}>`,
        to: mailbox,
        replyTo: email,
        subject: `New newsletter signup from ${name}`,
        text: `Name: ${name}\nEmail: ${email}`,
        html: `
          <h2>New newsletter signup</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        `,
      })

      return Response.json({ ok: true })
    } catch (error) {
      console.error('Unable to send newsletter signup', error)
      return Response.json({ error: 'Unable to submit your signup right now. Please try again shortly.' }, { status: 500 })
    }
  },
}
