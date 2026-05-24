import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { workColumns } from '../data/siteData'
import { ctaButtonClass, headingClass, h2Class } from '../lib/styles'

type WorkSectionProps = {
  showIntro?: boolean
}

function WorkSection({ showIntro = true }: WorkSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [workProgress, setWorkProgress] = useState(0)
  const [isWorkParallaxEnabled, setIsWorkParallaxEnabled] = useState(false)

  useEffect(() => {
    let animationFrame = 0

    const updateWorkScroll = () => {
      const section = sectionRef.current
      if (!section) return

      setIsWorkParallaxEnabled(window.innerWidth >= 768)

      const rect = section.getBoundingClientRect()
      const scrollRange = rect.height + window.innerHeight
      const progress = Math.min(
        Math.max((window.innerHeight - rect.top) / Math.max(scrollRange, 1), 0),
        1,
      )

      setWorkProgress(progress)
    }

    const requestUpdate = () => {
      window.cancelAnimationFrame(animationFrame)
      animationFrame = window.requestAnimationFrame(updateWorkScroll)
    }

    updateWorkScroll()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [])

  const sideColumnOffset = isWorkParallaxEnabled ? 120 - workProgress * 210 : 0
  const middleColumnOffset = isWorkParallaxEnabled ? -170 + workProgress * 340 : 0

  const renderWorkItem = (item: (typeof workColumns)[number][number]) => {
    const isExternal = /^https?:\/\//.test(item.href)
    const content = (
      <>
        <div className="overflow-hidden bg-[#f4f7fb]">
          <img
            src={item.image}
            alt={item.alt}
            loading="lazy"
            className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
        <div className="mt-3 flex items-start justify-between gap-4">
          <h3 className={`${headingClass} text-lg text-[#0d1b5e]`}>{item.title}</h3>
          <p className="text-right text-base font-bold normal-case text-[#1e90ff]">{item.category}</p>
        </div>
      </>
    )

    if (isExternal) {
      return (
        <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="group block text-[#0d1b5e]">
          {content}
        </a>
      )
    }

    return (
      <Link key={item.title} to={item.href} className="group block text-[#0d1b5e]">
        {content}
      </Link>
    )
  }

  return (
    <section id="work" ref={sectionRef} className="overflow-hidden bg-white text-[#0d1b5e]">
      {showIntro && (
        <div className="mx-auto grid max-w-[1230px] gap-8 px-5 py-12 sm:px-8 sm:py-14 md:gap-12 md:py-16 lg:grid-cols-2 lg:px-10 lg:py-20">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.48em] text-[#1e90ff]">Who we are</p>
            <h2 className={`${h2Class} text-[#0d1b5e]`}>
              Beauty may be
              <br />
              skin deep - but
              <br />
              your brand goes
              <br />
              <span className="bg-gradient-to-r from-[#7dd3fc] via-[#38bdf8] to-[#bae6fd] bg-[length:100%_0.42em] bg-bottom bg-no-repeat">
                clean to the bone.
              </span>
            </h2>
          </div>
          <div className="self-end">
            <p className="max-w-[540px] text-base font-semibold leading-relaxed text-[#0d1b5e]/80 sm:text-lg">
              We are a brand-first agency, emphasizing the importance of creating a consistent and memorable brand experience for customers. This means aligning all aspects of a business, from products and services to marketing and customer interactions, with the core values and identity of the brand.
            </p>
            <Link to="/work" className={`mt-7 ${ctaButtonClass}`}>
              Our Work
            </Link>
          </div>
        </div>
      )}

      <div
        className={`mx-auto max-w-[1600px] px-5 pb-8 sm:pb-14 md:pb-32 ${showIntro ? 'pt-8 sm:pt-12 md:pt-20' : 'pt-0'}`}
        style={{ marginBottom: '60px' }}
      >
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 md:grid-cols-3 md:items-start">
          {workColumns.map((column, columnIndex) => {
            const isMiddle = columnIndex === 1
            const columnOffset = isMiddle ? middleColumnOffset : sideColumnOffset

            return (
              <div
                key={columnIndex}
                className="grid gap-10 will-change-transform md:gap-12"
                style={{ transform: `translate3d(0, ${columnOffset}px, 0)` }}
              >
                {column.map((item) => renderWorkItem(item))}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WorkSection
