import { h3Class } from '../lib/styles'

function TestimonialSection() {
  return (
    <section id="insights" className="relative overflow-hidden bg-[#0b0f1e] text-white">
      <button
        type="button"
        aria-label="Previous testimonial"
        className="absolute left-5 top-1/2 z-10 hidden h-16 w-16 -translate-y-1/2 items-center justify-center text-6xl font-light text-white/70 transition hover:text-[#1e90ff] lg:flex"
      >
        &lsaquo;
      </button>
      <button
        type="button"
        aria-label="Next testimonial"
        className="absolute right-5 top-1/2 z-10 hidden h-16 w-16 -translate-y-1/2 items-center justify-center text-6xl font-light text-white/70 transition hover:text-[#1e90ff] lg:flex"
      >
        &rsaquo;
      </button>

      <div className="mx-auto grid min-h-[680px] max-w-[1390px] items-center gap-12 px-5 pb-10 pt-20 sm:px-8 sm:pb-14 lg:grid-cols-[0.72fr_1.28fr] lg:px-16 lg:pb-16 lg:pt-28">
        <div className="relative mx-auto w-full max-w-[360px] lg:mx-0">
          <span className="absolute -left-10 -top-24 text-[13rem] font-black leading-none text-[#1e90ff]">"</span>
          <div className="relative border-[10px] border-[#1e90ff] bg-white shadow-[14px_14px_0_rgba(30,144,255,0.25)]">
            <img
              src="/WhatsApp Image 2026-06-05 at 18.41.07.jpeg"
              alt="Client portrait"
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <blockquote className="mx-auto max-w-[920px] text-left lg:mx-0">
          <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-black uppercase tracking-[0.35em] sm:text-sm">
            <cite className="not-italic text-white">Solomon Chibueze Onu</cite>
            <span className="text-[#1e90ff]">-</span>
            <span className="font-black text-white/60">Founder, EverythingGlow, Adfusion HQ, Adfusion Brandhouse</span>
          </div>
          <h3 className={`${h3Class} text-white`}>
            Fortrano Tech Brought our brand 
           Product and vision together 
          </h3>
          <p className="mt-4 max-w-[620px] text-justify text-base font-semibold leading-relaxed text-white/70 sm:text-lg">
            Their expertise in branding, UI/UX, and development helped us create a digital experience that feels modern, intuitive, and professional. The entire process was smooth, collaborative, and focused on delivering measurable results.
          </p>
        </blockquote>
      </div>
    </section>
  )
}

export default TestimonialSection
