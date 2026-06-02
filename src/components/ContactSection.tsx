import { ctaButtonClass, h2Class } from '../lib/styles'
import { Link } from 'react-router-dom'

function ContactSection() {
  return (
    <section id="contact" className="bg-[#0b0f1e] text-white">
      <div className="mx-auto max-w-[1390px] px-5 pb-24 pt-20 sm:px-8 lg:px-10 lg:pb-28 lg:pt-28">
        <div className="text-center">
          <p className="mb-12 text-xs font-black uppercase tracking-[0.58em] text-[#1e90ff] sm:text-sm">
            Tell us about your project
          </p>
       <h2 className="font-black uppercase leading-none tracking-[-0.02em] text-[clamp(2rem,5vw,3.5rem)] mx-auto max-w-[980px] bg-gradient-to-r from-[#ffffff] via-[#10b9e8] to-[#1e90ff] bg-clip-text text-transparent">Let's Make Cool<span className="block">Shit Together</span></h2>
          <Link
            to="/contact"
            className={`mt-11 ${ctaButtonClass}`}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
