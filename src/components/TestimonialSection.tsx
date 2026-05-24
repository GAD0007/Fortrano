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
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=80"
              alt="Client portrait"
              className="aspect-square w-full object-cover grayscale"
              loading="lazy"
            />
          </div>
        </div>

        <blockquote>
          <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-black uppercase tracking-[0.35em] sm:text-sm">
            <cite className="not-italic text-white">Ada Williams</cite>
            <span className="text-[#1e90ff]">-</span>
            <span className="font-black text-white/60">Founder, BlueNova</span>
          </div>
          <h3 className={`${h3Class} max-w-[920px] text-white`}>
            Fortrano made our brand feel premium, modern, and ready to scale
          </h3>
          <p className="mt-8 max-w-[540px] text-base font-semibold leading-relaxed text-white/70 sm:text-lg">
            We needed a partner who could sharpen our brand, improve the website experience, and keep the launch moving. The Fortrano team brought structure, taste, and speed to the whole process. Everything finally felt aligned, confident, and built for growth.
          </p>
        </blockquote>
      </div>
    </section>
  )
}

export default TestimonialSection
