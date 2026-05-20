import { h2Class } from '../lib/styles'

function ContactSection() {
  return (
    <section id="contact" className="bg-[#0b0f1e] text-white">
      <div className="mx-auto max-w-[1390px] px-5 pb-24 pt-20 sm:px-8 lg:px-10 lg:pb-28 lg:pt-28">
        <div className="text-center">
          <p className="mb-12 text-xs font-black uppercase tracking-[0.58em] text-[#1e90ff] sm:text-sm">
            Tell us about your project
          </p>
          <h2 className={`${h2Class} mx-auto max-w-[980px] bg-gradient-to-r from-[#ffffff] via-[#10b9e8] to-[#1e90ff] bg-clip-text text-transparent`}>
            Let's Make Cool<span className="block">Shit Together</span>
          </h2>
          <a
            href="mailto:hello@fortranotech.com"
            className="mt-11 inline-flex bg-[#1e90ff] px-12 py-4 text-base font-black uppercase text-white shadow-[7px_7px_0_#10b9e8] transition hover:-translate-y-1 hover:bg-white hover:text-[#0d1b5e] hover:shadow-[10px_10px_0_#10b9e8]"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
