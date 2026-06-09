import { Link } from 'react-router-dom'
import { ctaButtonClass, h2Class } from '../lib/styles'

function AboutSection() {
  return (
    <section id="about" className="bg-white text-[#0d1b5e]">
      <div className="mx-auto grid max-w-[1500px] items-center gap-8 px-4 py-12 sm:px-6 sm:py-14 md:gap-12 md:px-6 lg:grid-cols-[minmax(0,1.12fr)_minmax(380px,0.88fr)] lg:px-8 lg:py-18 xl:px-10">
        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.48em] text-[#1e90ff] sm:text-sm">Our clients</p>
          <p className="bg-gradient-to-r from-[#0d1b5e] via-[#1e90ff] to-[#10b9e8] bg-clip-text text-[clamp(5.5rem,15vw,9rem)] font-black uppercase leading-[0.78] text-transparent">
            50+
          </p>
          <h2 className={`${h2Class} mt-8 whitespace-nowrap text-[#0d1b5e]`} style={{ fontSize: 'clamp(1.15rem, 4vw, 2.75rem)' }}>
            Brands Trust Our Agency.
          </h2>
        </div>
        <div className="max-w-[600px] lg:justify-self-end">
          <p className="w-full max-w-none text-base font-semibold leading-relaxed text-[#0d1b5e]/80 sm:text-lg lg:max-w-[540px]">
            When your client-facing materials and communication aren't following an aligned strategy, the inconsistency becomes evident to everyone. If you're eager to grow and secure a steady stream of leads with a unified approach, we might be the right fit for you.
          </p>
          <div className="mt-7 flex justify-center md:justify-start">
            <Link
              to="/work"
              className={ctaButtonClass}
            >
              Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
