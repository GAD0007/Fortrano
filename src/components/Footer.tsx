import { Link } from 'react-router-dom'

const quickLinks = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact us', to: '/contact' },
]

const contactLinks = [
  { label: 'Start a project', to: '/contact' },
  { label: 'Enroll', to: '/services/digital-skills-training' },
]

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/fortranotech?igsh=MW02ZXZvaTJ0aDQyMQ%3D%3D&utm_source=qr',
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
    label: 'WhatsApp',
    href: 'https://wa.me/2349061690280',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12.04 2a9.93 9.93 0 0 0-8.51 15.06L2.4 21.6l4.66-1.1A9.94 9.94 0 1 0 12.04 2Zm0 2a7.94 7.94 0 1 1-4.05 14.77l-.35-.2-2.78.66.67-2.68-.23-.38A7.94 7.94 0 0 1 12.04 4Zm-3.5 4.18c-.18 0-.46.07-.7.34-.24.26-.92.9-.92 2.2s.94 2.55 1.07 2.72c.13.18 1.82 2.92 4.5 3.97 2.23.88 2.68.7 3.16.66.49-.04 1.56-.64 1.78-1.25.22-.62.22-1.14.15-1.25-.06-.11-.24-.18-.5-.31-.26-.13-1.56-.77-1.8-.86-.24-.09-.42-.13-.6.13-.17.26-.68.86-.83 1.03-.15.18-.31.2-.57.07-.26-.13-1.1-.4-2.1-1.28-.78-.69-1.3-1.55-1.45-1.81-.15-.26-.02-.4.11-.53.12-.12.26-.31.39-.46.13-.15.17-.26.26-.44.09-.18.04-.33-.02-.46-.07-.13-.6-1.45-.82-1.98-.22-.52-.44-.45-.6-.46h-.51Z"
        />
      </svg>
    ),
  },
  {
    label: 'X',
    href: 'https://x.com/fortranotech?s=11',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M13.86 10.47 21.14 2h-1.72l-6.32 7.35L8.05 2H2.23l7.64 11.12L2.23 22h1.72l6.64-7.72L15.95 22h5.82l-7.91-11.53Zm-2.35 2.73-.77-1.1L4.58 3.3h2.64l4.97 7.1.77 1.1 6.46 9.23h-2.64l-5.27-7.53Z"
        />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/18ytTfYyyK/?mibextid=wwXIfr',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M14 8.5V6.75c0-.5.35-.75.87-.75H17V2.2c-.37-.05-1.65-.16-3.14-.16-3.1 0-5.23 1.9-5.23 5.38V8.5H5.12V13h3.51v9H14v-9h3.68l.58-4.5H14Z"
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
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="flex h-5 w-5 items-center justify-center transition hover:text-[#0b1d5f]"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <nav className="grid gap-9 text-sm font-bold sm:grid-cols-2 lg:gap-14" aria-label="Footer">
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
