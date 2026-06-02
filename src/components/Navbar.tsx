import { useState } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Work', href: '/work', isRoute: true },
  { label: 'About', href: '/about', isRoute: true },
  { label: 'Services', href: '/services', isRoute: true },
  { label: 'Contact us', href: '/contact', isRoute: true },
]

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="top-0 z-50 bg-white">
      <nav className="mx-auto flex max-w-[1230px] items-center justify-between px-3 py-3 sm:px-4 lg:px-4">
        <Link to="/" className="block w-[155px] sm:w-[210px]" aria-label="Fortrano Technology home">
          <img src="/IMG_9308.PNG" alt="Fortrano Technology" className="h-auto w-full object-contain" />
        </Link>

        <div className="hidden items-center gap-12 text-lg font-black uppercase text-[#0d1b5e] md:flex">
          <Link to="/work" className="transition hover:text-[#1e90ff]">
            Work
          </Link>
          <Link to="/about" className="transition hover:text-[#1e90ff]">
            About
          </Link>
          <Link to="/services" className="transition hover:text-[#1e90ff]">
            Services
          </Link>
          <Link to="/contact" className="transition hover:text-[#1e90ff]">
            Contact us
          </Link>
        </div>

        <Link
          to="/contact"
          className="hidden rounded-full border-[3px] border-[#0d1b5e] px-8 py-3 text-base font-black uppercase text-[#0d1b5e] transition hover:bg-[#0d1b5e] hover:text-white md:inline-flex"
        >
          Let's Talk
        </Link>

        <button
          type="button"
          className="relative z-40 grid h-11 w-11 place-items-center rounded-full border-[3px] border-[#0d1b5e] bg-white text-[#0d1b5e] shadow-[4px_4px_0_#1e90ff] md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        >
          <span className="grid gap-1.5">
            <span className={`block h-0.5 w-6 bg-[#0d1b5e] transition ${isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-6 bg-[#0d1b5e] transition ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-[#0d1b5e] transition ${isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </span>
        </button>
      </nav>

      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-30 bg-[#0d1b5e]/50 opacity-100 backdrop-blur-sm md:hidden"
            aria-hidden="true"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <aside className="fixed right-0 top-0 z-40 flex h-[100svh] w-[min(84vw,360px)] flex-col bg-white px-6 py-6 text-[#0d1b5e] shadow-[-12px_0_0_#1e90ff] md:hidden">
            <div className="flex items-center justify-between gap-5">
              <Link to="/" className="block w-[150px]" onClick={() => setIsMobileMenuOpen(false)}>
                <img src="/IMG_9308.PNG" alt="Fortrano Technology" className="h-auto w-full object-contain" />
              </Link>
              <button
                type="button"
                className="grid h-10 w-10 place-items-center rounded-full border-[3px] border-[#0d1b5e] text-2xl font-black leading-none"
                aria-label="Close navigation menu"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                &times;
              </button>
            </div>

            <div className="mt-10 flex flex-col">
              <p className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#0d1b5e]/50">
                Navigation
              </p>
              <div className="flex flex-col">
                {navLinks.map((link) => {
                  const className =
                    'flex items-center justify-between border-b border-[#0d1b5e]/10 py-4 text-base font-semibold text-[#0d1b5e] transition hover:text-[#1e90ff]'
                  const content = (
                    <>
                      {link.label}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-30">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </>
                  )

                  return link.isRoute ? (
                    <Link key={link.href} to={link.href} className={className} onClick={() => setIsMobileMenuOpen(false)}>
                      {content}
                    </Link>
                  ) : (
                    <a key={link.href} href={link.href} className={className} onClick={() => setIsMobileMenuOpen(false)}>
                      {content}
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="mt-auto grid gap-5">
              <Link
                to="/contact"
                className="bg-[#0d1b5e] px-6 py-4 text-center text-lg font-black uppercase text-white shadow-[7px_7px_0_#1e90ff]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Let's Talk
              </Link>
              <p className="text-sm font-bold leading-relaxed text-[#0d1b5e]/70">
                Brand, web, and marketing systems built for ambitious teams.
              </p>
            </div>
          </aside>
        </>
      )}
    </div>
  )
}

export default Navbar
