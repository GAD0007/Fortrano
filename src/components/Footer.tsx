import { Link } from 'react-router-dom'

const quickLinks = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact us', to: '/contact' },
]

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'FAQs', to: '/faqs' },
]

const contactLinks = [
  { label: 'Start a project', to: '/contact' },
  { label: 'Enroll', to: '/services/digital-skills-training' },
]

const socialLinks = [
  {
    label: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"
        />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M6.94 8.88H3.67V21h3.27V8.88ZM7.23 5.14A1.88 1.88 0 1 0 3.46 5.1a1.88 1.88 0 0 0 3.77.04ZM21 14.05c0-3.26-1.74-4.78-4.06-4.78a3.48 3.48 0 0 0-3.17 1.74h-.05V8.88H10.6V21h3.26v-6c0-1.58.3-3.1 2.25-3.1 1.92 0 1.95 1.8 1.95 3.2V21H21v-6.95Z"
        />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M21.58 7.19a2.74 2.74 0 0 0-1.93-1.94C17.95 4.8 12 4.8 12 4.8s-5.95 0-7.65.45a2.74 2.74 0 0 0-1.93 1.94A28.5 28.5 0 0 0 2 12a28.5 28.5 0 0 0 .42 4.81 2.74 2.74 0 0 0 1.93 1.94c1.7.45 7.65.45 7.65.45s5.95 0 7.65-.45a2.74 2.74 0 0 0 1.93-1.94A28.5 28.5 0 0 0 22 12a28.5 28.5 0 0 0-.42-4.81ZM10 15.2V8.8l5.45 3.2L10 15.2Z"
        />
      </svg>
    ),
  },
  {
    label: 'X',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M13.86 10.47 21.14 2h-1.72l-6.32 7.35L8.05 2H2.23l7.64 11.12L2.23 22h1.72l6.64-7.72L15.95 22h5.82l-7.91-11.53Zm-2.35 2.73-.77-1.1L4.58 3.3h2.64l4.97 7.1.77 1.1 6.46 9.23h-2.64l-5.27-7.53Z"
        />
      </svg>
    ),
  },
]

function Footer() {
  return (
    <footer className="bg-white text-[#0b1d5f]">
      <div className="mx-auto grid max-w-[1230px] gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[0.9fr_1.35fr] lg:gap-14 lg:px-4 lg:py-16">
        <div className="flex flex-col gap-8 lg:min-h-[220px] lg:justify-between">
          <div>
            <Link to="/" className="block w-[155px] sm:w-[210px]" aria-label="Fortrano Technology home">
              <img src="/IMG_9308.PNG" alt="Fortrano Technology" className="h-auto w-full object-contain" />
            </Link>
            <p className="mt-5 max-w-[430px] text-sm font-bold leading-relaxed text-[#0b1d5f] sm:text-[15px]">
              Fortrano Technology is a full-service digital agency helping ambitious brands build websites,
              products, identities, and marketing systems that move with clarity.
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm font-black text-[#0056c7]/70">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                aria-label={link.label}
                className="flex h-5 w-5 items-center justify-center transition hover:text-[#0b1d5f]"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <nav className="grid gap-9 text-sm font-bold sm:grid-cols-3 lg:gap-14" aria-label="Footer">
          <div>
            <h2 className="mb-5 text-sm font-black">Quick Links</h2>
            <div className="grid gap-4">
              {quickLinks.map((link) => (
                <Link key={link.label} to={link.to} className="whitespace-nowrap transition hover:text-[#0056c7]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-5 text-sm font-black">Legal</h2>
            <div className="grid gap-4">
              {legalLinks.map((link) => (
                <Link key={link.label} to={link.to} className="whitespace-nowrap transition hover:text-[#0056c7]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-5 text-sm font-black">Contact Us</h2>
            <div className="grid gap-4">
              {contactLinks.map((link) => (
                <Link key={link.label} to={link.to} className="whitespace-nowrap transition hover:text-[#0056c7]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
