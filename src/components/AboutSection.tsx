import { Link } from 'react-router-dom'
import { h2Class } from '../lib/styles'

function AboutSection() {
  return (
    <section id="about" className="bg-white text-[#0d1b5e]">
      <div className="mx-auto grid min-h-[590px] max-w-[1230px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.95fr_1fr] lg:px-10 lg:py-28">
        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.48em] text-[#1e90ff] sm:text-sm">Our clients</p>
          <p className="bg-gradient-to-r from-[#0d1b5e] via-[#1e90ff] to-[#10b9e8] bg-clip-text text-[clamp(5.5rem,15vw,9rem)] font-black uppercase leading-[0.78] text-transparent">
            50+
          </p>
          <h2 className={`${h2Class} mt-8 text-[#0d1b5e]`}>
            Brands Trust<span className="block">Our Agency.</span>
          </h2>
        </div>
        <div className="max-w-[600px] lg:justify-self-end">
          <p className="text-xl font-semibold leading-[1.45] text-[#0d1b5e]/80 sm:text-2xl">
            When your client-facing materials and communication aren't following an aligned strategy, the inconsistency becomes evident to everyone. If you're eager to grow and secure a steady stream of leads with a unified approach, we might be the right fit for you.
          </p>
          <Link
            to="/work"
            className="mt-7 inline-flex bg-[#1e90ff] px-12 py-4 text-sm font-black uppercase text-white shadow-[7px_7px_0_#0d1b5e] transition hover:-translate-y-1 hover:shadow-[10px_10px_0_#0d1b5e]"
          >
            Our Work
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
