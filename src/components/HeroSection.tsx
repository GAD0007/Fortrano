'use client'
import { useEffect, useRef } from 'react'

function HeroSection() {
  const line1Ref = useRef<HTMLDivElement>(null)
  const c1Ref = useRef<HTMLSpanElement>(null)
  const c2Ref = useRef<HTMLSpanElement>(null)
  const c3Ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    // Character drop animation for "WHERE BRANDS"
    const el = line1Ref.current
    if (!el) return
    const text = 'WHERE BRANDS'
    const delays = [0.15,0.2,0.25,0.3,0.35,0.38,0.45,0.5,0.55,0.6,0.65,0.68]
    let di = 0
    el.innerHTML = ''
    text.split('').forEach((ch) => {
      const span = document.createElement('span')
      span.className = `inline-block opacity-0 ${ch === ' ' ? 'w-[0.3em]' : ''}`
      span.style.cssText = `
        transform: translateY(-60px) rotateX(90deg);
        animation: charDrop 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards;
        animation-delay: ${ch === ' ' ? 0 : delays[di++] || 0.7}s;
        transform-origin: top center;
      `
      span.textContent = ch === ' ' ? '\u00A0' : ch
      el.appendChild(span)
    })

    // Counter animation
    function animateCounter(
      ref: React.RefObject<HTMLSpanElement>,
      target: number,
      delay: number,
      suffix: string
    ) {
      setTimeout(() => {
        if (!ref.current) return
        let start = 0
        const inc = target / (1400 / 16)
        const t = setInterval(() => {
          start = Math.min(start + inc, target)
          if (ref.current)
            ref.current.innerHTML = `${Math.round(start)}<span class="text-[#1e90ff]">${suffix}</span>`
          if (start >= target) clearInterval(t)
        }, 16)
      }, delay)
    }

    animateCounter(c1Ref, 100, 3600, '+')
    animateCounter(c2Ref, 50, 3700, '+')
    animateCounter(c3Ref, 98, 3800, '%')
  }, [])

  return (
    <>
      <style>{`
        @keyframes charDrop {
          to { opacity: 1; transform: translateY(0) rotateX(0deg); }
        }
        @keyframes typeReveal {
          0% { max-width: 0; opacity: 1; }
          100% { max-width: 600px; opacity: 1; }
        }
        @keyframes edgeSplitUp {
          0% { opacity: 1; transform: translateY(0) scaleX(1); }
          100% { opacity: 0; transform: translateY(-30px) scaleX(1.1); }
        }
        @keyframes edgeSplitDown {
          0% { opacity: 1; transform: translateY(0) scaleX(1); }
          100% { opacity: 0; transform: translateY(30px) scaleX(1.1); }
        }
        @keyframes edgeReveal {
          0% { opacity: 0; transform: scaleX(0.8); }
          100% { opacity: 1; transform: scaleX(1); }
        }
        @keyframes edgeScan {
          0% { left: -40%; }
          100% { left: 120%; }
        }
        @keyframes gridPan {
          0% { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }
        @keyframes statusPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(16,185,232,0.4); }
          50% { box-shadow: 0 0 0 5px rgba(16,185,232,0); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes scrollPulse {
          0%,100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes orbFloat {
          0%,100% { opacity: 0.6; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-20px); }
        }
        .edge-ghost1 {
          animation: edgeSplitUp 0.7s cubic-bezier(0.25,0.46,0.45,0.94) forwards 2.2s;
          opacity: 0;
        }
        .edge-ghost2 {
          animation: edgeSplitDown 0.7s cubic-bezier(0.25,0.46,0.45,0.94) forwards 2.2s;
          opacity: 0;
        }
        .edge-main {
          animation: edgeReveal 0.5s ease forwards 1.95s;
          opacity: 0;
        }
        .edge-scan {
          animation: edgeScan 1.2s ease forwards 2.5s;
        }
        .word-their {
          animation: typeReveal 0.7s steps(5,end) forwards 1.4s;
          max-width: 0;
          opacity: 0;
        }
        .word-their::after {
          content: '';
          position: absolute;
          right: -4px; top: 10%; height: 80%;
          width: 3px;
          background: #1e90ff;
          animation: cursorBlink 0.7s step-end 3;
        }
        @keyframes cursorBlink { 0%,100%{opacity:1} 50%{opacity:0} }
        .cta-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
          transform: translateX(-100%);
          animation: shimmer 3s ease 4s infinite;
        }
      `}</style>

      <section className="relative min-h-[calc(100vh-56px)] bg-white overflow-hidden flex flex-col items-center justify-center text-center px-5 pb-24 pt-12">

        {/* Grid bg */}
        <div className="pointer-events-none absolute inset-0 opacity-100"
          style={{
            backgroundImage: 'linear-gradient(rgba(30,144,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(30,144,255,0.04) 1px,transparent 1px)',
            backgroundSize: '40px 40px',
            animation: 'gridPan 20s linear infinite'
          }} />

        {/* Corner brackets */}
        {[['top-6 left-6 border-t-2 border-l-2',''],['top-6 right-6 border-t-2 border-r-2',''],['bottom-6 left-6 border-b-2 border-l-2',''],['bottom-6 right-6 border-b-2 border-r-2','']].map(([cls],i) => (
          <div key={i} className={`absolute w-8 h-8 border-[#0d1b5e]/20 ${cls}`} />
        ))}

        {/* Orbs */}
        <div className="pointer-events-none absolute top-[10%] left-[5%] w-44 h-44 rounded-full" style={{background:'radial-gradient(circle,rgba(30,144,255,0.1) 0%,transparent 70%)',animation:'orbFloat 6s ease-in-out infinite'}} />
        <div className="pointer-events-none absolute top-[20%] right-[8%] w-28 h-28 rounded-full" style={{background:'radial-gradient(circle,rgba(16,185,232,0.09) 0%,transparent 70%)',animation:'orbFloat 6s ease-in-out 2s infinite'}} />

        {/* Status badge */}
        <div className="mb-8 flex items-center gap-2 rounded-full border border-[#1e90ff]/20 bg-[#1e90ff]/6 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#1e90ff]"
          style={{animation:'fadeSlideUp 0.5s ease forwards 0.1s', opacity: 0}}>
          <span className="h-1.5 w-1.5 rounded-full bg-[#10b9e8]" style={{animation:'statusPulse 2s ease-in-out infinite'}} />
          Now accepting new projects
        </div>

        {/* Heading */}
        <div className="relative max-w-[900px] mb-6">
          {/* Line 1 — chars drop in */}
          <div
            ref={line1Ref}
            className="flex justify-center gap-[0.06em] text-[clamp(2.5rem,10vw,6rem)] font-black uppercase leading-none text-[#0d1b5e] mb-2"
            style={{letterSpacing:'-0.02em', perspective: '400px'}}
          />

          {/* Line 2 */}
       <div className="flex flex-wrap items-baseline justify-center gap-[0.5em] leading-none overflow-hidden">
            <span className="text-[clamp(2.5rem,10vw,6rem)] font-black uppercase text-[#0d1b5e]"
              style={{letterSpacing:'-0.02em', opacity:0, animation:'fadeSlideUp 0.6s ease forwards 0.9s'}}>
              Get
            </span>

            <span className="relative overflow-hidden whitespace-nowrap text-[clamp(2.5rem,10vw,6rem)] font-black uppercase text-[#1e90ff] word-their"
              style={{letterSpacing:'-0.02em'}}>
              Their
            </span>

            <span className="relative inline-block">
              <span className="edge-ghost1 absolute inset-0 text-[clamp(2.5rem,10vw,6rem)] font-black uppercase text-[#0d1b5e]/15" style={{letterSpacing:'-0.02em'}}>Edge</span>
              <span className="edge-ghost2 absolute inset-0 text-[clamp(2.5rem,10vw,6rem)] font-black uppercase text-[#1e90ff]/20" style={{letterSpacing:'-0.02em'}}>Edge</span>
              <span className="edge-main relative text-[clamp(2.5rem,10vw,6rem)] font-black uppercase"
                style={{letterSpacing:'-0.02em', background:'linear-gradient(90deg,#0d1b5e,#1e90ff,#10b9e8)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'}}>
                Edge
              </span>
              <span className="edge-scan absolute top-0 bottom-0 w-[40%] pointer-events-none"
                style={{background:'linear-gradient(90deg,transparent,rgba(30,144,255,0.25),transparent)'}} />
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <p className="max-w-[600px] text-base font-semibold leading-relaxed text-[#0d1b5e]/65 sm:text-lg"
          style={{opacity:0, animation:'fadeSlideUp 0.7s ease forwards 3s'}}>
          An integrated branding, strategy, and web development studio that helps ambitious companies stand out with sharp digital experiences.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4"
          style={{opacity:0, animation:'fadeSlideUp 0.7s ease forwards 3.3s'}}>
          <a href="#contact" className="relative overflow-hidden bg-[#0d1b5e] px-10 py-4 text-sm font-black uppercase tracking-widest text-white cta-primary"
            style={{boxShadow:'6px 6px 0 #1e90ff', transition:'transform 0.2s, box-shadow 0.2s'}}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform='translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow='10px 10px 0 #1e90ff' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform=''; (e.currentTarget as HTMLElement).style.boxShadow='6px 6px 0 #1e90ff' }}>
            Get Started
          </a>
          <a href="#work" className="border-b-2 border-[#1e90ff]/30 pb-0.5 text-sm font-bold text-[#1e90ff] transition hover:border-[#1e90ff]">
            See our work →
          </a>
        </div>

        {/* Counters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8"
          style={{opacity:0, animation:'fadeSlideUp 0.7s ease forwards 3.5s'}}>
          {[
            { ref: c1Ref, label: 'Projects Delivered' },
            { ref: c2Ref, label: 'Happy Clients' },
            { ref: c3Ref, label: 'Satisfaction Rate' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-8">
              {i > 0 && <div className="h-10 w-px bg-[#0d1b5e]/10" />}
              <div className="text-center">
                <span ref={item.ref} className="block text-2xl font-black text-[#0d1b5e]">
                  0<span className="text-[#1e90ff]">{i === 2 ? '%' : '+'}</span>
                </span>
                <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#0d1b5e]/40">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          style={{opacity:0, animation:'fadeSlideUp 0.5s ease forwards 3.8s'}}>
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#0d1b5e]/30">Scroll</span>
          <div className="h-10 w-px" style={{background:'linear-gradient(to bottom, rgba(30,144,255,0.5), transparent)', animation:'scrollPulse 1.5s ease-in-out 4s infinite'}} />
        </div>

        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
      </section>
    </>
  )
}

export default HeroSection