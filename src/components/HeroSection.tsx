'use client'
import { useEffect, useRef } from 'react'

function HeroSection() {
  const c1Ref = useRef<HTMLSpanElement>(null)
  const c2Ref = useRef<HTMLSpanElement>(null)
  const c3Ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    function animateCounter(
      ref: React.RefObject<HTMLSpanElement | null>,
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
            ref.current.innerHTML = `${Math.round(start)}<span style="color:#1e90ff">${suffix}</span>`
          if (start >= target) clearInterval(t)
        }, 16)
      }, delay)
    }
    animateCounter(c1Ref, 100, 1400, '+')
    animateCounter(c2Ref, 50,  1500, '+')
    animateCounter(c3Ref, 98,  1600, '%')
  }, [])

  return (
    <>
      <style>{`
        /* ── Core word-mask reveal ─────────────────────────────── */
        @keyframes wordUp {
          from { transform: translateY(115%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        .word-mask  {
          display: inline-block;
          overflow: hidden;
          vertical-align: bottom;
          /* extra height so descenders aren't clipped */
          padding-bottom: 0.06em;
          margin-bottom: -0.06em;
        }
        .word-inner {
          display: inline-block;
          opacity: 0;
          transform: translateY(115%);
          will-change: transform, opacity;
        }
        /* Stagger: 5 words across the two heading lines */
        .w1 .word-inner { animation: wordUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.10s forwards; }
        .w2 .word-inner { animation: wordUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.25s forwards; }
        .w3 .word-inner { animation: wordUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.42s forwards; }
        .w4 .word-inner { animation: wordUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.60s forwards; }
        .w5 .word-inner { animation: wordUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.78s forwards; }

        /* ── "THEIR" — animated gradient text ─────────────────── */
        @keyframes gradShift {
          0%   { background-position: 0%   50%; }
          100% { background-position: 200% 50%; }
        }
        .grad-their {
          background: linear-gradient(90deg,#1e90ff,#10b9e8,#1e90ff,#0060d0,#1e90ff);
          background-size: 300% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradShift 3s linear 1.1s infinite;
        }

        /* ── "EDGE" — gradient + repeating glow pulse ──────────── */
        @keyframes edgeGlow {
          0%,100% { filter: drop-shadow(0 0 6px rgba(30,144,255,0.35)); }
          50%     { filter: drop-shadow(0 0 18px rgba(16,185,232,0.65)); }
        }
        .glow-edge {
          background: linear-gradient(90deg,#0d1b5e 20%,#1e90ff 55%,#10b9e8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: edgeGlow 2.5s ease-in-out 1.3s infinite;
        }

        /* ── Heading scan line ─────────────────────────────────── */
        @keyframes scanLine {
          from { left: -12%; opacity: 1; }
          to   { left: 112%; opacity: 0; }
        }
        .heading-scan {
          position: absolute;
          top: 0; bottom: 0;
          width: 120px;
          background: linear-gradient(90deg, transparent, rgba(30,144,255,0.18), transparent);
          pointer-events: none;
          animation: scanLine 1.6s ease-out 0.95s forwards;
        }

        /* ── Underline grow ────────────────────────────────────── */
        @keyframes lineGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .accent-line {
          transform-origin: center;
          transform: scaleX(0);
          animation: lineGrow 0.9s cubic-bezier(0.16,1,0.3,1) 1.0s forwards;
        }

        /* ── General fade up ───────────────────────────────────── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Grid pan ──────────────────────────────────────────── */
        @keyframes gridPan {
          from { background-position: 0 0; }
          to   { background-position: 40px 40px; }
        }

        /* ── Orb float ─────────────────────────────────────────── */
        @keyframes orbFloat {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-18px); }
        }

        /* ── Badge dot pulse ───────────────────────────────────── */
        @keyframes dotPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(16,185,232,0.5); }
          50%     { box-shadow: 0 0 0 5px rgba(16,185,232,0); }
        }

        /* ── CTA shimmer ───────────────────────────────────────── */
        @keyframes shimmer {
          from { transform: translateX(-100%); }
          to   { transform: translateX(300%); }
        }
        .cta-btn { position: relative; overflow: hidden; }
        .cta-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.14), transparent);
          transform: translateX(-100%);
          animation: shimmer 3.2s ease 2s infinite;
        }

        /* ── Scroll hint ───────────────────────────────────────── */
        @keyframes scrollPulse {
          0%,100% { opacity: 0.3; }
          50%     { opacity: 1; }
        }
      `}</style>

      <section className="relative bg-white overflow-hidden flex flex-col items-center justify-center text-center px-5 pt-8 pb-10 md:pt-12 md:pb-14">

        {/* ── Animated grid ── */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(30,144,255,0.04) 1px,transparent 1px),' +
              'linear-gradient(90deg,rgba(30,144,255,0.04) 1px,transparent 1px)',
            backgroundSize: '40px 40px',
            animation: 'gridPan 20s linear infinite',
          }}
        />

        {/* ── Ambient orbs ── */}
        <div className="pointer-events-none absolute top-[8%] left-[4%] w-60 h-60 rounded-full"
          style={{ background: 'radial-gradient(circle,rgba(30,144,255,0.11) 0%,transparent 70%)', animation: 'orbFloat 7s ease-in-out infinite' }} />
        <div className="pointer-events-none absolute top-[18%] right-[5%] w-40 h-40 rounded-full"
          style={{ background: 'radial-gradient(circle,rgba(16,185,232,0.09) 0%,transparent 70%)', animation: 'orbFloat 7s ease-in-out 2.5s infinite' }} />
        <div className="pointer-events-none absolute bottom-[22%] left-[8%] w-28 h-28 rounded-full"
          style={{ background: 'radial-gradient(circle,rgba(30,144,255,0.07) 0%,transparent 70%)', animation: 'orbFloat 5s ease-in-out 1s infinite' }} />

        {/* ── Corner brackets ── */}
        {(['top-5 left-5 border-t-2 border-l-2', 'top-5 right-5 border-t-2 border-r-2', 'bottom-5 left-5 border-b-2 border-l-2', 'bottom-5 right-5 border-b-2 border-r-2'] as const).map((cls, i) => (
          <div key={i} className={`absolute w-7 h-7 border-[#0d1b5e]/15 ${cls}`} />
        ))}

       

        {/* ── Main heading ── */}
        <div className="relative mb-4 max-w-[1000px]">
          {/* scan beam */}
          <div className="heading-scan" />

          {/*
            Each word is wrapped in:
              .word-mask  — overflow:hidden container (clips the slide-up)
              .word-inner — the actual word, starts off-screen, slides up
            
            &nbsp; at the end of words that need a trailing space
            ensures browser-native word spacing — no flex-gap tricks needed.
          */}

          {/* Line 1: WHERE BRANDS */}
          <div className="text-[clamp(3rem,10vw,6.5rem)] font-black uppercase leading-[0.95] tracking-[-0.02em] text-[#0d1b5e]">
            <span className="word-mask w1"><span className="word-inner">WHERE&nbsp;</span></span>
            <span className="word-mask w2"><span className="word-inner">BRANDS</span></span>
          </div>

          {/* Line 2: GET THEIR EDGE */}
          <div className="text-[clamp(3rem,10vw,6.5rem)] font-black uppercase leading-[0.95] tracking-[-0.02em]">
            <span className="word-mask w3"><span className="word-inner text-[#0d1b5e]">GET&nbsp;</span></span>
            <span className="word-mask w4"><span className="word-inner grad-their">THEIR&nbsp;</span></span>
            <span className="word-mask w5"><span className="word-inner glow-edge">EDGE</span></span>
          </div>

          {/* Accent underline */}
          <div
            className="mx-auto mt-5 h-[3px] w-[55%] rounded-full accent-line"
            style={{ background: 'linear-gradient(90deg, transparent, #1e90ff, #10b9e8, transparent)' }}
          />
        </div>

        {/* ── Subtitle ── */}
        <p
          className="max-w-[540px] text-base font-semibold leading-relaxed text-[#0d1b5e]/60 sm:text-lg"
          style={{ opacity: 0, animation: 'fadeUp 0.6s ease 1.3s forwards' }}
        >
          An integrated branding, strategy, and web development studio that helps ambitious companies stand out with sharp digital experiences.
        </p>

        {/* ── CTA ── */}
        <div style={{ opacity: 0, animation: 'fadeUp 0.6s ease 1.5s forwards' }} className="mt-6">
          <a
            href="#contact"
            className="cta-btn inline-block bg-[#0d1b5e] px-12 py-4 text-sm font-black uppercase tracking-widest text-white"
            style={{ boxShadow: '6px 6px 0 #1e90ff', transition: 'transform 0.2s, box-shadow 0.2s' }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = 'translateY(-3px)'
              el.style.boxShadow = '10px 10px 0 #1e90ff'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = ''
              el.style.boxShadow = '6px 6px 0 #1e90ff'
            }}
          >
            Get Started
          </a>
        </div>

        {/* ── Stats ── */}
        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-8"
          style={{ opacity: 0, animation: 'fadeUp 0.6s ease 1.7s forwards' }}
        >
          {[
            { ref: c1Ref, label: 'Projects Delivered' },
            { ref: c2Ref, label: 'Happy Clients' },
            { ref: c3Ref, label: 'Satisfaction Rate' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-8">
              {i > 0 && <div className="h-10 w-px bg-[#0d1b5e]/10" />}
              <div className="text-center">
                <span ref={item.ref} className="block text-2xl font-black text-[#0d1b5e]">
                  0<span style={{ color: '#1e90ff' }}>{i === 2 ? '%' : '+'}</span>
                </span>
                <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#0d1b5e]/40">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Scroll hint ── */}
      

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>
    </>
  )
}

export default HeroSection
