import { Link } from 'react-router-dom'
import { services } from '../data/siteData'

type Palette = { glow: string; accent: string; dim: string; light: string }

const getPalette = (color: string): Palette => {
  switch (color.toLowerCase()) {
    case '#ff1493': return { glow: 'rgba(255,20,147,0.22)', accent: '#ff1493', dim: 'rgba(255,20,147,0.1)', light: '#ff79c6' }
    case '#10b9e8': return { glow: 'rgba(16,185,232,0.22)', accent: '#10b9e8', dim: 'rgba(16,185,232,0.1)', light: '#67e8f9' }
    case '#ffdc24': return { glow: 'rgba(255,220,36,0.18)', accent: '#ffdc24', dim: 'rgba(255,220,36,0.08)', light: '#fde68a' }
    default:        return { glow: 'rgba(100,116,139,0.18)', accent: '#94a3b8', dim: 'rgba(100,116,139,0.08)', light: '#cbd5e1' }
  }
}

const tickerNames = [...services, ...services].map((s, i) => ({
  label: s.title.join(' '),
  pal: getPalette(s.color),
  key: i,
}))

const css = `
.sv-root {
  background: #06080f;
  color: #fff;
  overflow-x: hidden;
  font-feature-settings: 'ss01', 'cv01';
}
.sv-root *,
.sv-root *::before,
.sv-root *::after {
  box-sizing: border-box;
}

/* ── HERO ── */
.sv-hero {
  position: relative;
  min-height: 72vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 100px 24px 70px;
  overflow: hidden;
}
.sv-hero-bg {
  position: absolute; inset: 0; pointer-events: none;
  background:
    radial-gradient(ellipse 60% 50% at 15% 35%, rgba(255,20,147,0.08), transparent 55%),
    radial-gradient(ellipse 55% 45% at 85% 65%, rgba(16,185,232,0.09), transparent 55%),
    radial-gradient(ellipse 35% 35% at 55% 20%, rgba(255,220,36,0.04), transparent 50%);
}
.sv-hero-grid {
  position: absolute; inset: 0; pointer-events: none;
  background-image:
    linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px);
  background-size: 48px 48px;
}
.sv-hero-watermark {
  position: absolute;
  font-size: clamp(80px, 18vw, 220px);
  font-weight: 900;
  letter-spacing: -0.06em;
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(255,255,255,0.032);
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}
.sv-hero-inner {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sv-hero-eyebrow {
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: #10b9e8;
  margin-bottom: 22px;
  display: inline-flex;
  align-items: center;
  gap: 14px;
}
.sv-hero-eyebrow::before, .sv-hero-eyebrow::after {
  content: '';
  width: 36px; height: 1px;
  background: rgba(16,185,232,0.5);
}
.sv-hero-h1 {
  font-size: clamp(3rem, 7.5vw, 7.5rem);
  font-weight: 900;
  line-height: 1.01;
  letter-spacing: -0.045em;
  margin-bottom: 20px;
}
.sv-hero-h1 .brand-gradient {
  background: linear-gradient(120deg, #ff1493 0%, #10b9e8 50%, #ffdc24 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.sv-hero-sub {
  font-size: clamp(1.05rem, 1.8vw, 1.28rem);
  font-weight: 400;
  line-height: 1.75;
  color: rgba(255,255,255,0.52);
  max-width: 620px;
  margin: 0 auto 36px;
}
.sv-hero-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 1rem 3rem;
  font-size: 0.875rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #fff;
  background: #0d1b5e;
  text-decoration: none;
  box-shadow: 6px 6px 0 #1e90ff;
  transition: transform 0.2s, box-shadow 0.2s;
}
.sv-hero-cta:hover {
  transform: translateY(-3px);
  box-shadow: 10px 10px 0 #1e90ff;
}
.sv-hero-cta svg { transition: transform 0.3s ease; }
.sv-hero-cta:hover svg { transform: translateX(5px); }

/* ── TICKER ── */
.sv-ticker {
  border-top: 1px solid rgba(255,255,255,0.05);
  border-bottom: 1px solid rgba(255,255,255,0.05);
  padding: 14px 0;
  background: rgba(255,255,255,0.018);
  overflow: hidden;
  white-space: nowrap;
}
.sv-ticker-track {
  display: inline-flex;
  animation: sv-marquee 35s linear infinite;
}
.sv-ticker-item {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  padding: 0 44px;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: rgba(255,255,255,0.35);
}
.sv-ticker-dot {
  width: 5px; height: 5px;
  border-radius: 50%;
  flex-shrink: 0;
}
@keyframes sv-marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

/* ── SERVICE BANDS ── */
.sv-service-band {
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  padding: 64px 0;
}
.sv-service-band:nth-child(even) {
  background: rgba(255,255,255,0.01);
}
.sv-band-ghost {
  position: absolute;
  font-size: clamp(160px, 28vw, 340px);
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255,255,255,0.028);
  bottom: -20px;
  line-height: 1;
  letter-spacing: -0.06em;
  pointer-events: none;
  user-select: none;
  z-index: 0;
}
.sv-band-ghost.right { right: -10px; }
.sv-band-ghost.left  { left: -10px; }
.sv-band-glow {
  position: absolute;
  width: 700px; height: 700px;
  border-radius: 50%;
  top: 50%; transform: translateY(-50%);
  pointer-events: none;
  z-index: 0;
}
.sv-band-glow.right { right: -200px; }
.sv-band-glow.left  { left: -200px; }
.sv-band-inner {
  width: min(calc(100% - 40px), 1220px);
  margin: 0 auto;
  padding: 0;
  display: grid;
  grid-template-columns: 0.88fr 1.12fr;
  gap: 56px;
  align-items: center;
  position: relative;
  z-index: 2;
}
.sv-band-inner.is-even {
  grid-template-columns: 1.12fr 0.88fr;
}
@media (max-width: 920px) {
  .sv-band-inner,
  .sv-band-inner.is-even {
    grid-template-columns: 1fr;
    width: min(calc(100% - 40px), 640px);
    gap: 36px;
  }
}
.sv-band-visual {
  aspect-ratio: 1;
  max-height: 380px;
  border-radius: 32px;
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.055);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  transition: border-color 0.4s ease;
}
.sv-band-visual:hover { border-color: rgba(255,255,255,0.13); }
.sv-band-visual-glow { position: absolute; inset: 0; pointer-events: none; }
.sv-band-visual img {
  position: relative; z-index: 2;
  max-height: 52%; width: auto;
  object-fit: contain;
  filter: drop-shadow(0 24px 48px rgba(0,0,0,0.55));
  animation: sv-float 7s ease-in-out infinite;
}
@media (max-width: 920px) {
  .sv-band-visual { display: none; }
}
@keyframes sv-float {
  0%,100% { transform: translateY(0); }
  50%      { transform: translateY(-14px); }
}
.sv-band-body { display: flex; flex-direction: column; }
.sv-band-index {
  font-size: 10.5px;
  font-weight: 900;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.sv-band-index-line {
  flex: 1; height: 1px;
  background: rgba(255,255,255,0.08);
  max-width: 70px;
}
.sv-band-title {
  font-size: clamp(2.2rem, 5vw, 4.2rem);
  font-weight: 900;
  line-height: 1.03;
  letter-spacing: -0.04em;
  color: #fff;
  margin-bottom: 16px;
}
.sv-band-desc {
  font-size: 1.05rem;
  font-weight: 400;
  line-height: 1.78;
  color: rgba(255,255,255,0.55);
  max-width: 540px;
  margin-bottom: 28px;
}
.sv-steps-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 28px;
}
@media (max-width: 620px) {
  .sv-steps-grid { grid-template-columns: 1fr; }
}
.sv-step-card {
  background: rgba(255,255,255,0.032);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 18px;
  padding: 18px 20px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
}
.sv-step-card:hover {
  background: rgba(255,255,255,0.058);
  border-color: rgba(255,255,255,0.11);
  transform: translateY(-2px);
}
.sv-step-top {
  position: absolute;
  top: 0; left: 0; right: 0; height: 2px;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.sv-step-card:hover .sv-step-top { opacity: 1; }
.sv-step-num {
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  opacity: 0.45;
  margin-bottom: 6px;
}
.sv-step-name {
  font-size: 0.88rem;
  font-weight: 800;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 8px;
}
.sv-step-pills { display: flex; flex-wrap: wrap; gap: 5px; }
.sv-step-pill {
  font-size: 11px; font-weight: 800;
  padding: 5px 12px; border-radius: 100px;
  background: rgba(255,255,255,0.06);
  color: rgba(255,255,255,0.45);
}
.sv-explore-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: max-content;
  background: #0d1b5e;
  color: #fff !important;
  padding: 1rem 3rem;
  font-size: 0.875rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none;
  box-shadow: 6px 6px 0 #1e90ff;
  transition: transform 0.2s, box-shadow 0.2s;
}
.sv-explore-link:hover {
  transform: translateY(-3px);
  box-shadow: 10px 10px 0 #1e90ff;
}
.sv-explore-arrow {
  width: auto; height: auto;
  border: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 1rem;
  transition: transform 0.2s;
  flex-shrink: 0;
}
.sv-explore-link:hover .sv-explore-arrow {
  transform: translateX(4px);
}

/* ── FOOTER CTA ── */
.sv-footer {
  padding: 80px 24px;
  text-align: center;
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(255,255,255,0.05);
}
.sv-footer-bg {
  position: absolute; inset: 0; pointer-events: none;
  background: radial-gradient(ellipse 70% 60% at 50% 50%, rgba(16,185,232,0.055), transparent 70%);
}
.sv-footer-super {
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.28);
  margin-bottom: 18px;
  position: relative;
}
.sv-footer-h2 {
  font-size: clamp(2.6rem, 6.5vw, 6rem);
  font-weight: 900;
  letter-spacing: -0.045em;
  line-height: 1.03;
  margin-bottom: 16px;
  position: relative;
}
.sv-footer-h2 .grd {
  background: linear-gradient(120deg, #ff1493, #10b9e8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.sv-footer-sub {
  font-size: 1.05rem;
  font-weight: 400;
  color: rgba(255,255,255,0.42);
  max-width: 440px;
  margin: 0 auto 36px;
  line-height: 1.72;
  position: relative;
}
.sv-footer-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 1rem 3rem;
  font-size: 0.875rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #fff;
  background: #0d1b5e;
  text-decoration: none;
  box-shadow: 6px 6px 0 #1e90ff;
  transition: transform 0.2s, box-shadow 0.2s;
}
.sv-footer-btn:hover {
  transform: translateY(-3px);
  box-shadow: 10px 10px 0 #1e90ff;
}
.sv-footer-btn svg { transition: transform 0.3s ease; }
.sv-footer-btn:hover svg { transform: translateX(5px); }
`

function ServicesPage() {
  return (
    <div className="sv-root">
      <style>{css}</style>

      {/* ── HERO ── */}
      <div className="sv-hero">
        <div className="sv-hero-bg" />
        <div className="sv-hero-grid" />
        <div className="sv-hero-watermark">SERVICES</div>
        <div className="sv-hero-inner">
       
          <h1 className="sv-hero-h1">
            Where <span className="brand-gradient">Creativity</span>
            <br />Meets Strategy
          </h1>
          <p className="sv-hero-sub">
            We architect state-of-the-art digital products — iconic brand identities,
            high-end UX, robust web &amp; app development, technical SEO, and professional training.
          </p>
          <Link to="/contact" className="sv-hero-cta">
            Work with our team
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>

      {/* ── TICKER ── */}
      <div className="sv-ticker">
        <div className="sv-ticker-track">
          {tickerNames.map(({ label, pal, key }) => (
            <span key={key} className="sv-ticker-item">
              <span className="sv-ticker-dot" style={{ backgroundColor: pal.accent }} />
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* ── SERVICE BANDS ── */}
      <div>
        {services.map((service, index) => {
          const pal = getPalette(service.color)
          const isEven = index % 2 === 1

          return (
            <div key={service.href} className="sv-service-band">
              <div className={`sv-band-ghost ${isEven ? 'left' : 'right'}`}>
                {String(index + 1).padStart(2, '0')}
              </div>
              <div
                className={`sv-band-glow ${isEven ? 'left' : 'right'}`}
                style={{ background: `radial-gradient(circle, ${pal.glow}, transparent 65%)` }}
              />
              <div className={`sv-band-inner ${isEven ? 'is-even' : ''}`}>
                <div className="sv-band-visual" style={{ order: isEven ? 2 : 1 }}>
                  <div
                    className="sv-band-visual-glow"
                    style={{ background: `radial-gradient(circle at 50% 50%, ${pal.glow}, transparent 65%)` }}
                  />
                  <img src={service.imgSrc} alt={service.imgAlt} />
                </div>

                <div className="sv-band-body" style={{ order: isEven ? 1 : 2 }}>
                  <div className="sv-band-index" style={{ color: pal.accent }}>
                    {String(index + 1).padStart(2, '0')}
                    <div className="sv-band-index-line" />
                  </div>
                  <h2 className="sv-band-title">
                    {service.title.map((line) => (
                      <span key={line} className="block">{line}</span>
                    ))}
                  </h2>
                  <p className="sv-band-desc">{service.description}</p>

                  <div className="sv-steps-grid">
                    {service.details.map((detail, di) => (
                      <div key={detail.title} className="sv-step-card">
                        <div
                          className="sv-step-top"
                          style={{ background: `linear-gradient(90deg, ${pal.accent}, transparent)` }}
                        />
                        <div className="sv-step-num" style={{ color: pal.light }}>
                          {String(di + 1).padStart(2, '0')}
                        </div>
                        <div className="sv-step-name">{detail.title}</div>
                        <div className="sv-step-pills">
                          {detail.items.map((item) => (
                            <span key={item} className="sv-step-pill">{item}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link to={service.href} className="sv-explore-link" style={{ color: pal.accent }}>
                    Get Started
                    <span className="sv-explore-arrow">→</span>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* ── FOOTER CTA ── */}
      <div className="sv-footer">
        <div className="sv-footer-bg" />
        <p className="sv-footer-super">Start a project today</p>
        <h2 className="sv-footer-h2">
          Let's build something<br />
          <span className="grd">remarkable.</span>
        </h2>
        <p className="sv-footer-sub">
          Whether you're launching a brand, shipping a product, or training your
          team — we have the creative firepower to deliver.
        </p>
        <Link to="/contact" className="sv-footer-btn">
          Get Started
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default ServicesPage
