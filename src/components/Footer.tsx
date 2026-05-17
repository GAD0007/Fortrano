import { footerSocialLinks } from '../data/siteData'
import { headingClass } from '../lib/styles'

const aboutLinks = ['Team', 'Culture', 'Clients', 'Blog']
const serviceLinks = [
  'Brand and Visual Identity',
  'Marketing Strategy',
  'UI/UX Design',
  'Content and Messaging',
  'Website Development',
  'Social Media',
]

function Footer() {
  return (
    <footer className="bg-[#0b0f1e] text-white">
      <div className="mx-auto max-w-[1390px] px-5 pb-9 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 gap-10 rounded-t-none bg-white px-8 py-12 text-[#0d1b5e] lg:grid-cols-[1.05fr_0.9fr_0.95fr_1.05fr_0.9fr] lg:gap-12 lg:px-12">
          <div className="col-span-2 lg:col-span-1">
            <a href="#" className="block w-[200px]">
              <img src="/IMG_9308.PNG" alt="Fortrano Technology" className="h-auto w-full object-contain" />
            </a>
            <p className="mt-5 max-w-[230px] text-base font-bold leading-relaxed text-[#0d1b5e]/70">
              Full Service Design and Marketing Agency
            </p>
            <div className="mt-5 flex gap-4 text-xl font-black text-[#0d1b5e]">
              {footerSocialLinks.map((icon) => (
                <a key={icon} href="#" className="transition hover:text-[#1e90ff]">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className={`${headingClass} mb-5 text-lg text-[#0d1b5e]`}>Info</h3>
            <div className="grid gap-3 text-base font-bold text-[#0d1b5e]/80">
              <a href="mailto:hello@fortranotech.com" className="transition hover:text-[#1e90ff]">hello@fortranotech.com</a>
              <a href="tel:+2340000000000" className="transition hover:text-[#1e90ff]">+234 000 000 0000</a>
              <p>Lagos, Nigeria</p>
              <p>Remote Worldwide</p>
            </div>
          </div>

          <div>
            <h3 className={`${headingClass} mb-5 text-lg text-[#0d1b5e]`}>About</h3>
            <div className="grid gap-3 text-base font-bold text-[#0d1b5e]/80">
              {aboutLinks.map((link) => (
                <a key={link} href="#about" className="transition hover:text-[#1e90ff]">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className={`${headingClass} mb-5 text-lg text-[#0d1b5e]`}>Services</h3>
            <div className="grid gap-3 text-base font-bold text-[#0d1b5e]/80">
              {serviceLinks.map((link) => (
                <a key={link} href="#services" className="transition hover:text-[#1e90ff]">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="grid content-start gap-7">
            <div>
              <p className="mb-2 text-base font-bold text-[#0d1b5e]/70">Let's work together</p>
              <a href="mailto:hello@fortranotech.com" className="group inline-flex items-center gap-4 border-b-2 border-[#0d1b5e]/20 pb-2 text-xl font-black uppercase text-[#0d1b5e]">
                Get Started <span className="text-[#1e90ff] transition group-hover:translate-x-2">-&gt;</span>
              </a>
            </div>
            <div>
              <a href="mailto:hello@fortranotech.com?subject=Newsletter" className="group inline-flex items-center gap-4 border-b-2 border-[#0d1b5e]/20 pb-2 text-xl font-black uppercase text-[#0d1b5e]">
                Newsletter <span className="text-[#1e90ff] transition group-hover:translate-x-2">-&gt;</span>
              </a>
              <p className="mt-2 text-base font-bold text-[#0d1b5e]/70">Sign up for our newsletter</p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-base font-black uppercase text-white/40">
          Fortrano, Copyright 2026 | Privacy Policy
        </p>
      </div>
    </footer>
  )
}

export default Footer

