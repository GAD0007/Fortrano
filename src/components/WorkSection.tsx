import { useEffect, useRef, useState } from 'react'
import { workColumns } from '../data/siteData'
import { headingClass } from '../lib/styles'

function WorkSection() {
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
  const imageOffset = isWorkParallaxEnabled ? -24 + workProgress * 48 : 0

  return (
    <section id="work" ref={sectionRef} className="overflow-hidden bg-white text-[#0d1b5e]">
      <div className="mx-auto grid max-w-[1230px] gap-8 px-5 pb-10 pt-14 sm:px-8 sm:pb-14 sm:pt-20 md:gap-12 md:pb-20 md:pt-28 lg:grid-cols-2 lg:px-10 lg:pb-28 lg:pt-40">
        <div>
          <p className="mb-5 text-xs font-black uppercase tracking-[0.48em] text-[#1e90ff]">Who we are</p>
          <h2 className={`${headingClass} text-[clamp(1.65rem,3.6vw,3rem)] text-[#0d1b5e]`}>
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
          <p className="max-w-[650px] text-xl font-semibold leading-[1.45] text-[#0d1b5e]/80 sm:text-2xl">
            We are a brand-first agency, emphasizing the importance of creating a consistent and memorable brand experience for customers. This means aligning all aspects of a business, from products and services to marketing and customer interactions, with the core values and identity of the brand.
          </p>
          <a
            href="#work"
            className="mt-7 inline-flex bg-[#1e90ff] px-12 py-4 text-sm font-black uppercase text-white shadow-[7px_7px_0_#0d1b5e] transition hover:-translate-y-1 hover:shadow-[10px_10px_0_#0d1b5e]"
          >
            Our Work
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-5 pb-8 pt-8 sm:pb-14 sm:pt-12 md:pb-32 md:pt-20" style={{ marginBottom: '60px' }}>
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
                {column.map((item, itemIndex) => {
                  const innerOffset = (isMiddle ? imageOffset : -imageOffset) + itemIndex * 4

                  return (
                    <a key={item.title} href="#contact" className="group block text-[#0d1b5e]">
                      <div className="aspect-square overflow-hidden bg-[#f4f7fb]">
                        <div
                          className="h-[112%] w-full will-change-transform"
                          style={{ transform: `translate3d(0, ${innerOffset}px, 0)` }}
                        >
                          <img
                            src={item.image}
                            alt={item.alt}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </div>
                      <div className="mt-3 flex items-start justify-between gap-4">
                        <h3 className={`${headingClass} text-lg text-[#0d1b5e]`}>{item.title}</h3>
                        <p className="text-right text-base font-bold normal-case text-[#1e90ff]">{item.category}</p>
                      </div>
                    </a>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WorkSection

