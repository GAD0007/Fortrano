import { h2Class } from '../lib/styles'

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'X',
    href: 'https://x.com',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l16 16M4 20L20 4" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
]

const inputClass =
  'w-full border-b-2 border-[#0d1b5e]/20 bg-transparent px-0 py-4 text-lg font-medium text-[#0d1b5e] outline-none transition-all placeholder:text-[#0d1b5e]/40 focus:border-[#1e90ff]'

function ContactPage() {
  return (
    <section className="bg-white text-[#0d1b5e]">
      <div className="mx-auto grid max-w-[1230px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-4 lg:py-24">
        <div>
          <p className="mb-5 text-xs font-black uppercase tracking-[0.35em] text-[#1e90ff]">
            Contact us
          </p>
          <h1 className={`${h2Class} max-w-[720px]`}>
            Let's Build What Comes Next
          </h1>
          <p className="mt-6 max-w-[560px] text-lg font-medium leading-relaxed text-[#0d1b5e]/70">
            Tell us what you are planning, what you need help with, or where your brand needs to go next.
          </p>

          <div className="mt-12 grid gap-5 text-lg font-semibold text-[#0d1b5e]">
            <a href="mailto:hello@fortranotech.com" className="transition hover:text-[#1e90ff]">
              hello@fortranotech.com
            </a>
            <a href="tel:+2340000000000" className="transition hover:text-[#1e90ff]">
              +234 000 000 0000
            </a>
            <p className="text-[#0d1b5e]/70">Lagos, Nigeria · Remote Worldwide</p>
          </div>

          <div className="mt-14">
            <h2 className="mb-6 text-sm font-black uppercase tracking-[0.2em] text-[#0d1b5e]/40">Connect</h2>
            <div className="flex gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#0d1b5e] transition-colors hover:text-[#1e90ff]"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <form
          action="mailto:hello@fortranotech.com"
          method="post"
          encType="text/plain"
          className="rounded-3xl bg-[#f4f7fb] p-8 shadow-xl shadow-[#0d1b5e]/5 sm:p-12 lg:ml-10"
        >
          <div className="grid gap-8">
            <div className="grid gap-8 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-black uppercase tracking-[0.15em] text-[#0d1b5e]/60">Name</span>
                <input className={inputClass} name="name" type="text" placeholder="Your name" required />
              </label>
              <label className="block">
                <span className="text-xs font-black uppercase tracking-[0.15em] text-[#0d1b5e]/60">Email</span>
                <input className={inputClass} name="email" type="email" placeholder="you@example.com" required />
              </label>
            </div>

            <label className="block">
              <span className="text-xs font-black uppercase tracking-[0.15em] text-[#0d1b5e]/60">Message</span>
              <textarea
                className={`${inputClass} min-h-[160px] resize-y`}
                name="message"
                placeholder="Tell us about the project"
                required
              />
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex w-max items-center gap-4 rounded-full bg-[#1e90ff] px-10 py-5 text-sm font-black uppercase tracking-[0.1em] text-white transition-all hover:-translate-y-1 hover:bg-[#0d1b5e] hover:shadow-lg hover:shadow-[#0d1b5e]/20"
            >
              Send Message
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactPage
