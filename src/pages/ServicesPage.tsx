import { Link } from 'react-router-dom'
import { services } from '../data/siteData'

type Palette = { glow: string; accent: string; dim: string; light: string }

const getPalette = (color: string): Palette => {
  switch (color.toLowerCase()) {
    case '#ff1493': return { glow: 'rgba(255,20,147,0.18)', accent: '#ff1493', dim: 'rgba(255,20,147,0.08)', light: '#ff79c6' }
    case '#10b9e8': return { glow: 'rgba(16,185,232,0.18)', accent: '#10b9e8', dim: 'rgba(16,185,232,0.08)', light: '#67e8f9' }
    case '#ffdc24': return { glow: 'rgba(255,220,36,0.15)', accent: '#ffdc24', dim: 'rgba(255,220,36,0.07)', light: '#fde68a' }
    default:        return { glow: 'rgba(100,116,139,0.15)', accent: '#94a3b8', dim: 'rgba(100,116,139,0.07)', light: '#cbd5e1' }
  }
}

const tickerNames = [...services, ...services].map((s, i) => ({
  label: s.title.join(' '),
  pal: getPalette(s.color),
  key: i,
}))

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,600;0,9..40,700;1,9..40,300&display=swap');

  .sv-root {
    background: #080a10;
    color: #f0f0f0;
    overflow-x: hidden;
    font-family: 'DM Sans', sans-serif;
  }

  /* ── HERO ── */
  .sv-hero {
    position: relative;
    min-height: 80vh;
    display: grid;
    place-items: center;
    padding: 120px 48px 80px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    overflow: hidden;
  }
  .sv-hero-noise {
    position: absolute; inset: 0; pointer-events: none; z-index: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
    opacity: 0.4;
  }
  .sv-hero-inner {
    position: relative; z-index: 1;
    max-width: 900px;
    text-align: center;
    display: flex; flex-direction: column; align-items: center;
  }
  .sv-hero-kicker {
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.35);
    margin-bottom: 32px;
    display: flex; align-items: center; gap: 16px;
  }
  .sv-hero-kicker::before, .sv-hero-kicker::after {
    content: '';
    width: 40px; height: 1px;
    background: rgba(255,255,255,0.15);
  }
  .sv-hero-h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(3.5rem, 8vw, 8rem);
    font-weight: 600;
    line-height: 1.0;
    letter-spacing: -0.02em;
    color: #fff;
    margin-bottom: 28px;
  }
  .sv-hero-h1 em {
    font-style: italic;
    color: transparent;
    -webkit-text-stroke: 1px rgba(255,255,255,0.5);
  }
  .sv-hero-sub {
    font-size: 1.05rem;
    font-weight: 300;
    line-height: 1.8;
    color: rgba(255,255,255,0.45);
    max-width: 520px;
    margin-bottom: 48px;
  }
  .sv-hero-cta {
    display: inline-flex; align-items: center; gap: 12px;
    font-size: 11px; font-weight: 600;
    letter-spacing: 0.2em; text-transform: uppercase;
    color: #fff; text-decoration: none;
    padding: 14px 32px;
    border: 1px solid rgba(255,255,255,0.2);
    transition: border-color 0.3s, background 0.3s;
  }
  .sv-hero-cta:hover {
    border-color: rgba(255,255,255,0.5);
    background: rgba(255,255,255,0.04);
  }
  .sv-hero-cta svg { transition: transform 0.3s; }
  .sv-hero-cta:hover svg { transform: translateX(4px); }

  /* ── TICKER ── */
  .sv-ticker {
    border-bottom: 1px solid rgba(255,255,255,0.06);
    padding: 12px 0;
    overflow: hidden;
    white-space: nowrap;
  }
  .sv-ticker-track {
    display: inline-flex;
    animation: sv-marquee 40s linear infinite;
  }
  .sv-ticker-item {
    display: inline-flex; align-items: center; gap: 12px;
    padding: 0 36px;
    font-size: 10px; font-weight: 600;
    text-transform: uppercase; letter-spacing: 0.25em;
    color: rgba(255,255,255,0.22);
  }
  .sv-ticker-dot {
    width: 4px; height: 4px; border-radius: 50%; flex-shrink: 0;
  }
  @keyframes sv-marquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  /* ── SERVICE BANDS ── */
  .sv-band {
    border-bottom: 1px solid rgba(255,255,255,0.06);
    padding: 72px 0;
  }
  .sv-band-inner {
    max-width: 1160px;
    margin: 0 auto;
    padding: 0 48px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }
  @media (max-width: 900px) {
    .sv-band-inner { grid-template-columns: 1fr; padding: 0 24px; gap: 40px; }
    .sv-band-visual { display: none; }
  }

  /* Visual card */
  .sv-band-visual {
    aspect-ratio: 1;
    border-radius: 4px;
    display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.06);
  }
  .sv-band-visual-glow {
    position: absolute; inset: 0; pointer-events: none;
  }
  .sv-band-visual img {
    max-height: 48%; width: auto;
    object-fit: contain;
    filter: drop-shadow(0 16px 40px rgba(0,0,0,0.6));
    animation: sv-float 8s ease-in-out infinite;
    position: relative; z-index: 1;
  }
  @media (max-width: 900px) {
    .sv-band-visual { display: none; }
  }
  @keyframes sv-float {
    0%,100% { transform: translateY(0px); }
    50%      { transform: translateY(-12px); }
  }

  /* Body */
  .sv-band-body { display: flex; flex-direction: column; }

  .sv-band-meta {
    display: flex; align-items: center; gap: 16px;
    margin-bottom: 20px;
  }
  .sv-band-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1rem; font-weight: 400;
    color: rgba(255,255,255,0.2);
    letter-spacing: 0.1em;
  }
  .sv-band-rule {
    flex: 1; height: 1px; max-width: 60px;
    background: rgba(255,255,255,0.08);
  }
  .sv-band-category {
    font-size: 9.5px; font-weight: 600;
    letter-spacing: 0.28em; text-transform: uppercase;
  }

  .sv-band-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.4rem, 4.5vw, 4rem);
    font-weight: 600;
    line-height: 1.05;
    letter-spacing: -0.01em;
    color: #fff;
    margin-bottom: 20px;
  }

  .sv-band-desc {
    font-size: 0.98rem;
    font-weight: 300;
    line-height: 1.8;
    color: rgba(255,255,255,0.5);
    margin-bottom: 36px;
    max-width: 460px;
  }

  /* Step pills row */
  .sv-band-steps {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    margin-bottom: 36px;
  }
  .sv-step {
    padding: 16px 18px;
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 2px;
    position: relative;
    overflow: hidden;
    transition: border-color 0.3s;
  }
  .sv-step:hover { border-color: rgba(255,255,255,0.16); }
  .sv-step-bar {
    position: absolute; top: 0; left: 0; right: 0; height: 1px;
    opacity: 0; transition: opacity 0.3s;
  }
  .sv-step:hover .sv-step-bar { opacity: 1; }
  .sv-step-num {
    font-size: 9px; font-weight: 600;
    letter-spacing: 0.2em; text-transform: uppercase;
    color: rgba(255,255,255,0.25);
    margin-bottom: 6px;
  }
  .sv-step-title {
    font-size: 0.8rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.06em;
    color: rgba(255,255,255,0.85);
    margin-bottom: 8px;
  }
  .sv-step-tags { display: flex; flex-wrap: wrap; gap: 4px; }
  .sv-step-tag {
    font-size: 10px; font-weight: 500;
    padding: 3px 10px; border-radius: 100px;
    background: rgba(255,255,255,0.05);
    color: rgba(255,255,255,0.38);
    letter-spacing: 0.04em;
  }

  /* CTA link */
  .sv-band-link {
    display: inline-flex; align-items: center; gap: 10px;
    font-size: 11px; font-weight: 600;
    letter-spacing: 0.2em; text-transform: uppercase;
    text-decoration: none;
    transition: gap 0.3s;
  }
  .sv-band-link:hover { gap: 16px; }
  .sv-band-link-arrow {
    width: 28px; height: 28px; border-radius: 50%;
    border: 1px solid currentColor;
    display: flex; align-items: center; justify-content: center;
    font-size: 13px;
    transition: transform 0.3s, background 0.3s, color 0.3s;
    flex-shrink: 0;
  }
  .sv-band-link:hover .sv-band-link-arrow {
    transform: rotate(45deg);
    background: currentColor; color: #080a10;
  }

  /* ── FOOTER ── */
  .sv-footer {
    padding: 100px 48px;
    text-align: center;
    border-top: 1px solid rgba(255,255,255,0.06);
    position: relative; overflow: hidden;
  }
  .sv-footer-glow {
    position: absolute; inset: 0; pointer-events: none;
    background: radial-gradient(ellipse 60% 50% at 50% 100%, rgba(16,185,232,0.05), transparent 65%);
  }
  .sv-footer-kicker {
    font-size: 10px; font-weight: 600;
    letter-spacing: 0.35em; text-transform: uppercase;
    color: rgba(255,255,255,0.28);
    margin-bottom: 24px; position: relative;
  }
  .sv-footer-h2 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.8rem, 7vw, 6.5rem);
    font-weight: 600;
    line-height: 1.04; letter-spacing: -0.02em;
    color: #fff;
    margin-bottom: 16px; position: relative;
  }
  .sv-footer-h2 em {
    font-style: italic;
    background: linear-gradient(120deg, #ff1493, #10b9e8);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  }
  .sv-footer-sub {
    font-size: 1rem; font-weight: 300; line-height: 1.75;
    color: rgba(255,255,255,0.38);
    max-width: 400px; margin: 0 auto 44px;
    position: relative;
  }
  .sv-footer-btn {
    display: inline-flex; align-items: center; gap: 12px;
    font-size: 11px; font-weight: 600;
    letter-spacing: 0.2em; text-transform: uppercase;
    color: #080a10; background: #fff;
    text-decoration: none; padding: 16px 36px;
    position: relative;
    transition: background 0.3s, color 0.3s, transform 0.3s;
  }
  .sv-footer-btn:hover {
    background: rgba(255,255,255,0.88);
    transform: translateY(-2px);
  }
  .sv-footer-btn svg { transition: transform 0.3s; }
  .sv-footer-btn:hover svg { transform: translateX(4px); }
`

function ServicesPage() {
  return (
    <div className="sv-root">
      <style>{css}</style>

      {/* ── HERO ── */}
      <div className="sv-hero">
        <div className="sv-hero-noise" />
        <div className="sv-hero-inner">
          <div className="sv-hero-kicker">Fortrano Technology · Services</div>
          <h1 className="sv-hero-h1">
            Where <em>Creativity</em><br />
            Meets Strategy
          </h1>
          <p className="sv-hero-sub">
            We architect state-of-the-art digital products — iconic brand identities,
            high-end UX, robust web &amp; app development, technical SEO, and professional training.
          </p>
          <Link to="/contact" className="sv-hero-cta">
            Work with our team
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
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

      {/* ── BANDS ── */}
      <div>
        {services.map((service, index) => {
          const pal = getPalette(service.color)
          const isEven = index % 2 === 1

          return (
            <div key={service.href} className="sv-band">
              <div className="sv-band-inner">

                {/* Visual */}
                <div
                  className="sv-band-visual"
                  style={{ order: isEven ? 2 : 1 }}
                >
                  <div
                    className="sv-band-visual-glow"
                    style={{ background: `radial-gradient(circle at 50% 60%, ${pal.glow}, transparent 65%)` }}
                  />
                  <img src={service.imgSrc} alt={service.imgAlt} />
                </div>

                {/* Body */}
                <div className="sv-band-body" style={{ order: isEven ? 1 : 2 }}>

                  <div className="sv-band-meta">
                    <span className="sv-band-num">{String(index + 1).padStart(2, '0')}</span>
                    <div className="sv-band-rule" />
                    <span className="sv-band-category" style={{ color: pal.accent }}>
                      {service.title.join(' ')}
                    </span>
                  </div>

                  <h2 className="sv-band-title">
                    {service.title.map((line) => (
                      <span key={line} className="block">{line}</span>
                    ))}
                  </h2>

                  <p className="sv-band-desc">{service.description}</p>

                  <div className="sv-band-steps">
                    {service.details.map((detail, di) => (
                      <div key={detail.title} className="sv-step">
                        <div
                          className="sv-step-bar"
                          style={{ background: `linear-gradient(90deg, ${pal.accent}, transparent)` }}
                        />
                        <div className="sv-step-num" style={{ color: pal.light }}>
                          {String(di + 1).padStart(2, '0')}
                        </div>
                        <div className="sv-step-title">{detail.title}</div>
                        <div className="sv-step-tags">
                          {detail.items.map((item) => (
                            <span key={item} className="sv-step-tag">{item}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={service.href}
                    className="sv-band-link"
                    style={{ color: pal.accent }}
                  >
                    Explore service
                    <span className="sv-band-link-arrow">→</span>
                  </Link>
                </div>

              </div>
            </div>
          )
        })}
      </div>

      {/* ── FOOTER ── */}
      <div className="sv-footer">
        <div className="sv-footer-glow" />
        <p className="sv-footer-kicker">Ready to begin?</p>
        <h2 className="sv-footer-h2">
          Let's build something<br />
          <em>remarkable.</em>
        </h2>
        <p className="sv-footer-sub">
          Whether you're launching a brand, shipping a product, or training your team — we deliver.
        </p>
        <Link to="/contact" className="sv-footer-btn">
          Get Started
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

    </div>
  )
}

export default ServicesPage
