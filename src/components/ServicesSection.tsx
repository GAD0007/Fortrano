import { useEffect, useRef, useState } from 'react'
import { services } from '../data/siteData'
import { h2Class, h3Class } from '../lib/styles'

function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [servicesOffset, setServicesOffset] = useState(0)
  const [servicesScrollHeight, setServicesScrollHeight] = useState('100vh')

  useEffect(() => {
    let animationFrame = 0

    const updateServicesScroll = () => {
      const section = sectionRef.current
      const track = trackRef.current
      if (!section || !track) return

      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight
      const maxOffset = Math.max(track.scrollWidth - viewportWidth, 0)
      const scrolled = window.scrollY - section.offsetTop
      const progress = Math.min(Math.max(scrolled / Math.max(maxOffset, 1), 0), 1)

      setServicesScrollHeight(`${maxOffset + viewportHeight}px`)
      setServicesOffset(-maxOffset * progress)
    }

    const requestUpdate = () => {
      window.cancelAnimationFrame(animationFrame)
      animationFrame = window.requestAnimationFrame(updateServicesScroll)
    }

    updateServicesScroll()

    const resizeObserver = new ResizeObserver(requestUpdate)
    if (trackRef.current) resizeObserver.observe(trackRef.current)

    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      resizeObserver.disconnect()
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-[#0b0f1e]"
      style={{ height: servicesScrollHeight }}
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div className="grid grid-cols-1 gap-7 px-5 pb-8 pt-20 sm:px-8 sm:pb-10 sm:pt-12 md:grid-cols-2 md:gap-10 md:px-8 md:pb-16 md:pt-[70px] lg:px-14">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-[#1e90ff]/70">Our services</p>
            <h2 className={`${h2Class} text-white`}>
              Designed to <br />
              <span className="bg-gradient-to-r from-[#1e90ff] via-[#10b9e8] to-[#1e90ff] bg-clip-text text-transparent">
                Push New Limits
              </span>
            </h2>
          </div>
         
        </div>

        <div className="absolute inset-x-0 bottom-0 top-[260px] sm:top-[300px] md:top-[320px] lg:top-[360px] xl:top-[380px]">
          <div
            ref={trackRef}
            className="flex h-full w-max items-start gap-5 will-change-transform sm:gap-7"
            style={{ transform: `translate3d(${servicesOffset}px, 0, 0)` }}
          >
            {services.map((service) => {
              const isDark = service.textColor === 'dark'

              return (
                <a
                  key={service.title.join('')}
                  href="#contact"
                  className="group relative flex h-[82%] max-h-[430px] min-h-[300px] w-[265px] shrink-0 flex-col overflow-hidden sm:w-[315px] lg:w-[335px]"
                  style={{ backgroundColor: service.color }}
                >
                  <div className="flex flex-1 items-center justify-center px-5 pt-6 sm:px-6 sm:pt-8">
                    <img
                      src={service.imgSrc}
                      alt={service.imgAlt}
                      width={service.imgW}
                      height={service.imgH}
                      className="max-h-[105px] w-auto object-contain drop-shadow-xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105 sm:max-h-[150px]"
                    />
                  </div>

                  <div className="relative overflow-hidden">
                    <div className={`absolute inset-x-0 bottom-0 h-0 transition-all duration-500 ease-in-out group-hover:h-full ${isDark ? 'bg-white/20' : 'bg-black/25'}`} />
                    <div className="relative z-10 px-5 pb-6 pt-4 sm:px-6 sm:pb-8 sm:pt-5">
                      <div className="flex items-end justify-between gap-3">
                        <h3
                          className={h3Class}
                          style={{ color: isDark ? '#0d1b5e' : '#ffffff' }}
                        >
                          {service.title.map((line) => (
                            <span key={line} className="block">
                              {line}
                            </span>
                          ))}
                        </h3>
                        <svg
                          width="33"
                          height="18"
                          viewBox="0 0 33 18"
                          fill="none"
                          className="mb-1 shrink-0 opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                        >
                          <path
                            d="M0 9H31M31 9L23 1M31 9L23 17"
                            stroke={isDark ? '#0d1b5e' : '#ffffff'}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p
                        className="mt-3 line-clamp-3 max-h-0 overflow-hidden text-sm font-normal leading-snug opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100"
                        style={{ color: isDark ? '#0d1b5e' : '#ffffff' }}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

