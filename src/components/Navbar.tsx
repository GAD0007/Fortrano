import { useState } from 'react'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#insights' },
]

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="relative z-20 bg-white">
      <nav className="mx-auto flex max-w-[1230px] items-center justify-between px-5 py-6 sm:px-8 lg:px-10">
        <a href="#" className="block w-[155px] sm:w-[210px]" aria-label="Fortrano Technology home">
          <img src="/IMG_9308.PNG" alt="Fortrano Technology" className="h-auto w-full object-contain" />
        </a>

        <div className="hidden items-center gap-12 text-lg font-black uppercase text-[#0d1b5e] md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-[#1e90ff]">
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full border-[3px] border-[#0d1b5e] px-8 py-3 text-base font-black uppercase text-[#0d1b5e] transition hover:bg-[#0d1b5e] hover:text-white md:inline-flex"
        >
          Let's Talk
        </a>

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

      <div
        className={`fixed inset-0 z-30 bg-[#0d1b5e]/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden="true"
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <aside
        className={`fixed right-0 top-0 z-40 flex h-[100svh] w-[min(84vw,360px)] flex-col bg-white px-6 py-6 text-[#0d1b5e] shadow-[-12px_0_0_#1e90ff] transition-transform duration-300 ease-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-[calc(100%+1rem)]'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex items-center justify-between gap-5">
          <a href="#" className="block w-[150px]" onClick={() => setIsMobileMenuOpen(false)}>
            <img src="/IMG_9308.PNG" alt="Fortrano Technology" className="h-auto w-full object-contain" />
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border-[3px] border-[#0d1b5e] text-2xl font-black leading-none"
            aria-label="Close navigation menu"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            &times;
          </button>
        </div>

        <div className="mt-12 grid gap-5 text-4xl font-black uppercase leading-none text-[#0d1b5e]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="border-b-[3px] border-[#0d1b5e]/20 pb-4 transition hover:text-[#1e90ff]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="mt-auto grid gap-5">
          <a
            href="#contact"
            className="bg-[#0d1b5e] px-6 py-4 text-center text-lg font-black uppercase text-white shadow-[7px_7px_0_#1e90ff]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Let's Talk
          </a>
          <p className="text-sm font-bold leading-relaxed text-[#0d1b5e]/70">
            Brand, web, and marketing systems built for ambitious teams.
          </p>
        </div>
      </aside>
    </div>
  )
}

export default Navbar

