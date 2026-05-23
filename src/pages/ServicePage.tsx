import { Link, Navigate, useLocation } from 'react-router-dom'
import { services } from '../data/siteData'
import { h2Class } from '../lib/styles'

const accentColors = ['#ff1493', '#10b9e8', '#ffdc24', '#ff1493', '#10b9e8']

const css = `
  .sp-root {
    background-color: #f5f7fc;
    background-image: radial-gradient(rgba(13,27,94,0.07) 1px, transparent 1px);
    background-size: 26px 26px;
    color: #0d1b5e;
    overflow-x: hidden;
  }
  .sp-root *,
  .sp-root *::before,
  .sp-root *::after {
    box-sizing: border-box;
  }

  /* ── Hero ── */
  .sp-hero {
    background: #0b0f1e;
    position: relative;
    overflow: hidden;
  }
  .sp-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 60% 80% at 80% 50%, rgba(30,144,255,0.10) 0%, transparent 65%),
      radial-gradient(ellipse 40% 60% at 10% 80%, rgba(255,20,147,0.07) 0%, transparent 60%);
    pointer-events: none;
  }

  .sp-hero-inner {
    width: min(calc(100% - 40px), 1230px);
    margin: 0 auto;
    padding: 80px 0;
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 60px;
    align-items: center;
    min-height: 480px;
    position: relative;
    z-index: 1;
  }
  @media (max-width: 860px) {
    .sp-hero-inner { grid-template-columns: 1fr; gap: 40px; width: min(calc(100% - 40px), 640px); padding: 60px 0; min-height: auto; }
    .sp-hero-img { display: none; }
  }

  .sp-hero-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.30em;
    text-transform: uppercase;
    color: #1e90ff;
    margin-bottom: 24px;
    opacity: 0;
    animation: sp-up 0.6s 0.05s forwards;
  }
  .sp-hero-eyebrow::before {
    content: '';
    width: 28px; height: 2px;
    background: #1e90ff;
    display: block;
    flex-shrink: 0;
  }

  .sp-hero-title {
    opacity: 0;
    animation: sp-up 0.7s 0.15s forwards;
    margin-bottom: 24px;
  }

  .sp-hero-desc {
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.78;
    color: rgba(255,255,255,0.85);
    max-width: 540px;
    opacity: 0;
    animation: sp-up 0.7s 0.28s forwards;
  }

  .sp-hero-img {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    animation: sp-left 0.8s 0.35s forwards;
  }

  /* ── Body ── */
  .sp-body {
    width: min(calc(100% - 40px), 1100px);
    margin: 0 auto;
    padding: 80px 0 100px;
  }
  @media (max-width: 700px) { .sp-body { width: min(calc(100% - 40px), 640px); padding: 56px 0 80px; } }

  /* ── Section header ── */
  .sp-section-label {
    font-size: 9.5px;
    font-weight: 700;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: #1e90ff;
    margin-bottom: 10px;
  }
  .sp-section-heading {
    font-size: clamp(1.8rem, 3.5vw, 2.6rem);
    font-weight: 800;
    letter-spacing: -0.025em;
    color: #0d1b5e;
    margin-bottom: 56px;
    line-height: 1.1;
  }

  /* ── Detail cards ── */
  .sp-details {
    display: grid;
    gap: 20px;
  }

  .sp-detail-card {
    background: #fff;
    border-radius: 20px;
    padding: 32px 36px;
    display: grid;
    grid-template-columns: 100px 1fr 1.4fr;
    gap: 36px;
    align-items: start;
    border: 1.5px solid rgba(13,27,94,0.07);
    position: relative;
    overflow: hidden;
    transition: transform 0.25s, box-shadow 0.25s;
    opacity: 0;
    animation: sp-up 0.6s both;
  }
  .sp-detail-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(13,27,94,0.10);
  }
  .sp-detail-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 4px;
    height: 100%;
    border-radius: 20px 0 0 20px;
  }
  @media (max-width: 860px) {
    .sp-detail-card { grid-template-columns: 64px 1fr; padding: 22px 22px; gap: 20px; }
    .sp-detail-desc { grid-column: 1 / -1; }
  }
  @media (max-width: 500px) {
    .sp-detail-card { grid-template-columns: 1fr; }
  }

  .sp-detail-num {
    font-size: clamp(3rem, 6vw, 4.5rem);
    font-weight: 900;
    line-height: 1;
    letter-spacing: -0.04em;
    opacity: 0.18;
  }

  .sp-detail-title {
    font-size: 1.2rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    color: #0d1b5e;
    margin-bottom: 14px;
    line-height: 1.2;
  }

  .sp-detail-items {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 8px;
  }
  .sp-detail-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.95rem;
    font-weight: 700;
    color: #0d1b5e;
  }
  .sp-detail-item::before {
    content: '';
    width: 6px; height: 6px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .sp-detail-desc {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.80;
    color: rgba(13,27,94,0.82);
    padding-top: 4px;
  }

  /* ── CTA ── */
  .sp-cta-wrap {
    margin-top: 64px;
    background: #0b0f1e;
    border-radius: 20px;
    padding: 56px 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    flex-wrap: wrap;
    position: relative;
    overflow: hidden;
  }
  .sp-cta-wrap::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 60% 80% at 90% 50%, rgba(30,144,255,0.12) 0%, transparent 65%);
    pointer-events: none;
  }

  .sp-cta-text {
    position: relative;
    z-index: 1;
  }
  .sp-cta-label {
    font-size: 9.5px;
    font-weight: 700;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.65);
    margin-bottom: 10px;
  }
  .sp-cta-heading {
    font-size: clamp(1.4rem, 3vw, 2rem);
    font-weight: 800;
    color: #fff;
    letter-spacing: -0.02em;
    line-height: 1.2;
  }

  .sp-cta-btn {
    position: relative;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: #1e90ff;
    color: #fff;
    text-decoration: none;
    font-size: 0.76rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding: 18px 36px;
    border-radius: 100px;
    white-space: nowrap;
    transition: background 0.22s, transform 0.2s, box-shadow 0.22s;
    flex-shrink: 0;
  }
  .sp-cta-btn:hover {
    background: #fff;
    color: #0d1b5e;
    transform: translateY(-2px);
    box-shadow: 0 14px 36px rgba(30,144,255,0.26);
  }
  .sp-cta-btn svg { transition: transform 0.2s; }
  .sp-cta-btn:hover svg { transform: translateX(4px); }

  /* ── Keyframes ── */
  @keyframes sp-up {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes sp-left {
    from { opacity: 0; transform: translateX(28px); }
    to   { opacity: 1; transform: translateX(0); }
  }
`

function ServicePage() {
  const location = useLocation()
  const service = services.find((item) => item.href === location.pathname)

  if (!service) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="sp-root">
      <style>{css}</style>

      {/* ── Hero ── */}
      <div className="sp-hero">
        <div className="sp-hero-inner">
          <div>
            <div className="sp-hero-eyebrow">Our Services</div>
            <h1 className={`${h2Class} sp-hero-title`} style={{ color: '#fff' }}>
              {service.title.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </h1>
            <p className="sp-hero-desc">{service.description}</p>
          </div>

          <div className="sp-hero-img">
            <img
              src={service.imgSrc}
              alt={service.imgAlt}
              width={service.imgW}
              height={service.imgH}
              style={{ maxHeight: '220px', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))' }}
            />
          </div>
        </div>
      </div>

      {/* ── Detail cards ── */}
      <div className="sp-body">
        <div className="sp-section-label">What's included</div>
        <div className="sp-section-heading">How we deliver it</div>

        <div className="sp-details">
          {service.details.map((detail, index) => {
            const color = accentColors[index % accentColors.length]
            const delay = `${0.1 + index * 0.08}s`

            return (
              <article
                key={detail.title}
                className="sp-detail-card"
                style={{
                  animationDelay: delay,
                  '--accent': color,
                } as React.CSSProperties}
              >
                <style>{`
                  .sp-detail-card:nth-child(${index + 1})::before { background: ${color}; }
                  .sp-detail-card:nth-child(${index + 1}) .sp-detail-num { color: ${color}; }
                  .sp-detail-card:nth-child(${index + 1}) .sp-detail-item::before { background: ${color}; }
                `}</style>

                <div className="sp-detail-num">{String(index + 1).padStart(2, '0')}</div>

                <div>
                  <div className="sp-detail-title">{detail.title}</div>
                  <ul className="sp-detail-items">
                    {detail.items.map((item) => (
                      <li key={item} className="sp-detail-item">{item}</li>
                    ))}
                  </ul>
                </div>

                <p className="sp-detail-desc">{detail.description}</p>
              </article>
            )
          })}
        </div>

        {/* ── CTA ── */}
        <div className="sp-cta-wrap">
          <div className="sp-cta-text">
            <div className="sp-cta-label">Ready to start?</div>
            <div className="sp-cta-heading">Let's build something great together.</div>
          </div>
          <Link to="/contact" className="sp-cta-btn">
            Get Started
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ServicePage
