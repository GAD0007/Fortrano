import { useState, type FormEvent } from 'react'
import { h2Class } from '../lib/styles'

const socialLinks = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/2349061690280',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21l1.45-4.35A8.5 8.5 0 1 1 7.5 19.5L3 21z" />
        <path d="M8.5 9.5c.4 2.2 2.3 4.1 4.5 4.7l1.5-1.5 2 1a1 1 0 0 1 .5 1.1c-.3 1.2-1.4 2-2.6 2C9.9 16.8 6.2 13.1 6.2 8.6c0-1.2.8-2.3 2-2.6a1 1 0 0 1 1.1.5l1 2-1.8 1.5z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/fortranotech?igsh=MW02ZXZvaTJ0aDQyMQ%3D%3D&utm_source=qr',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'X',
    href: 'https://x.com/fortranotech?s=11',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l16 16M4 20L20 4" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/18ytTfYyyK/?mibextid=wwXIfr',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
]

const css = `
  .ct-root {
    background-color: #f5f7fc;
    background-image: radial-gradient(rgba(13,27,94,0.07) 1px, transparent 1px);
    background-size: 26px 26px;
    color: #0d1b5e;
    overflow-x: hidden;
  }

  .ct-inner {
    max-width: 1230px;
    margin: 0 auto;
    padding: 80px 40px 120px;
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 64px;
    align-items: start;
  }
  @media (max-width: 900px) {
    .ct-inner { grid-template-columns: 1fr; gap: 48px; padding: 60px 24px 80px; }
  }

  /* ── Left col ── */
  .ct-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: #1e90ff;
    margin-bottom: 24px;
    opacity: 0;
    animation: ct-up 0.6s 0.05s forwards;
  }
  .ct-eyebrow::before {
    content: '';
    width: 30px; height: 2px;
    background: #1e90ff;
    display: block;
    flex-shrink: 0;
  }

  .ct-heading {
    opacity: 0;
    animation: ct-up 0.7s 0.15s forwards;
    margin-bottom: 20px;
  }

  .ct-sub {
    font-size: 1.05rem;
    font-weight: 400;
    line-height: 1.78;
    color: rgba(13,27,94,0.60);
    max-width: 480px;
    opacity: 0;
    animation: ct-up 0.7s 0.25s forwards;
  }

  .ct-contact-links {
    margin-top: 44px;
    display: grid;
    gap: 14px;
    opacity: 0;
    animation: ct-up 0.7s 0.35s forwards;
  }

  .ct-contact-link {
    font-size: 1.05rem;
    font-weight: 700;
    color: #0d1b5e;
    text-decoration: none;
    transition: color 0.2s;
  }
  .ct-contact-link:hover { color: #1e90ff; }

  .ct-location {
    font-size: 1rem;
    font-weight: 500;
    color: rgba(13,27,94,0.50);
  }

  .ct-socials {
    margin-top: 48px;
    opacity: 0;
    animation: ct-up 0.7s 0.45s forwards;
  }
  .ct-socials-label {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.26em;
    text-transform: uppercase;
    color: rgba(13,27,94,0.38);
    margin-bottom: 18px;
  }
  .ct-socials-row {
    display: flex;
    gap: 20px;
  }
  .ct-social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px; height: 44px;
    border-radius: 12px;
    background: #fff;
    border: 1.5px solid rgba(13,27,94,0.09);
    color: #0d1b5e;
    text-decoration: none;
    transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;
  }
  .ct-social-link:hover {
    background: #1e90ff;
    color: #fff;
    border-color: #1e90ff;
    transform: translateY(-2px);
  }

  /* ── Form card ── */
  .ct-form-wrap {
    opacity: 0;
    animation: ct-left 0.8s 0.35s forwards;
  }

  .ct-form-card {
    background: #fff;
    border-radius: 20px;
    padding: 48px 48px;
    box-shadow: 0 6px 40px rgba(13,27,94,0.09), 0 1px 0 rgba(13,27,94,0.04);
    position: relative;
    overflow: hidden;
  }
  .ct-form-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; height: 4px;
    background: linear-gradient(90deg, #1e90ff 0%, #0d1b5e 100%);
    border-radius: 20px 20px 0 0;
  }
  @media (max-width: 600px) { .ct-form-card { padding: 36px 28px; } }

  .ct-field-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px;
    margin-bottom: 32px;
  }
  @media (max-width: 600px) { .ct-field-row { grid-template-columns: 1fr; } }

  .ct-field { margin-bottom: 32px; }
  .ct-field:last-of-type { margin-bottom: 0; }

  .ct-label {
    display: block;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: rgba(13,27,94,0.40);
    margin-bottom: 10px;
  }

  .ct-input {
    width: 100%;
    border: none;
    border-bottom: 2px solid rgba(13,27,94,0.14);
    background: transparent;
    padding: 10px 0 12px;
    font-size: 1rem;
    font-weight: 500;
    color: #0d1b5e;
    outline: none;
    transition: border-color 0.2s;
    box-sizing: border-box;
  }
  .ct-input::placeholder { color: rgba(13,27,94,0.30); }
  .ct-input:focus { border-color: #1e90ff; }

  .ct-textarea {
    min-height: 140px;
    resize: vertical;
  }

  .ct-submit {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    background: #0d1b5e;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 900;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 1rem 3rem;
    margin-top: 36px;
    box-shadow: 6px 6px 0 #1e90ff;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .ct-submit:hover {
    transform: translateY(-3px);
    box-shadow: 10px 10px 0 #1e90ff;
  }
  .ct-submit svg { transition: transform 0.2s; }
  .ct-submit:hover svg { transform: translateX(4px); }
  .ct-submit:disabled {
    cursor: wait;
    opacity: 0.7;
  }
  .ct-form-status {
    margin-top: 22px;
    color: rgba(13,27,94,0.72);
    font-size: 0.9rem;
    font-weight: 700;
  }
  @media (max-width: 600px) {
    .ct-submit {
      display: flex;
      width: fit-content;
      margin-left: auto;
      margin-right: auto;
    }
  }

  /* ── Keyframes ── */
  @keyframes ct-up {
    from { opacity: 0; transform: translateY(26px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes ct-left {
    from { opacity: 0; transform: translateX(30px); }
    to   { opacity: 1; transform: translateX(0); }
  }
`

function ContactPage() {
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus('')

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData)),
      })
      const result = (await response.json()) as { error?: string }

      if (!response.ok) {
        throw new Error(result.error)
      }

      form.reset()
      setStatus('Thanks. Your message has been sent.')
    } catch (error) {
      setStatus(error instanceof Error && error.message ? error.message : 'Unable to send your message right now.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="ct-root">
      <style>{css}</style>

      <div className="ct-inner">
        {/* ── Left col ── */}
        <div>
          <div className="ct-eyebrow">Contact us</div>

          <h1 className={`${h2Class} ct-heading`}>
            Let's Build What Comes Next
          </h1>

          <p className="ct-sub">
            Tell us what you are planning, what you need help with, or where your brand needs to go next.
          </p>

          <div className="ct-contact-links">
            <a href="mailto:info@fortranotech.com" className="ct-contact-link">
              info@fortranotech.com
            </a>
            <a href="tel:+2349061690280" className="ct-contact-link">
             +234  906 169 0280
            </a>
            <p className="ct-location">Lagos, Nigeria · Remote Worldwide</p>
          </div>

          <div className="ct-socials">
            <div className="ct-socials-label">Connect</div>
            <div className="ct-socials-row">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="ct-social-link"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Form card ── */}
        <div className="ct-form-wrap">
          <form className="ct-form-card" onSubmit={handleSubmit}>
            <input name="website" type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <div className="ct-field-row">
              <label>
                <span className="ct-label">Name</span>
                <input className="ct-input" name="name" type="text" placeholder="Your name" required />
              </label>
              <label>
                <span className="ct-label">Email</span>
                <input className="ct-input" name="email" type="email" placeholder="you@example.com" required />
              </label>
            </div>

            <div className="ct-field">
              <label>
                <span className="ct-label">Message</span>
                <textarea
                  className="ct-input ct-textarea"
                  name="message"
                  placeholder="Tell us about the project"
                  required
                />
              </label>
            </div>

            <button type="submit" className="ct-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {status && <p className="ct-form-status" role="status">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
