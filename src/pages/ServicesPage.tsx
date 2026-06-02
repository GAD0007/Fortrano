import { Link } from 'react-router-dom'
import { services } from '../data/siteData'

// NickelBronx alternates: colored → dark → colored → dark...
// For Fortrano we use service.color but dark (#1a1a2e) for odd indices
const getBandStyle = (index: number, color: string) => {
  const isDark = index % 2 === 1
  if (isDark) {
    return { bg: '#1a1a2e', text: '#fff', colHead: '#fff', bullet: '#fff', linkColor: '#ffdc24' }
  }
  switch (color.toLowerCase()) {
    case '#ff1493': return { bg: '#ff1493', text: '#fff', colHead: '#fff', bullet: '#fff', linkColor: '#ffdc24' }
    case '#10b9e8': return { bg: '#10b9e8', text: '#000', colHead: '#000', bullet: '#000', linkColor: '#0d1b5e' }
    case '#ffdc24': return { bg: '#ffdc24', text: '#000', colHead: '#000', bullet: '#000', linkColor: '#ff1493' }
    default:        return { bg: color,     text: '#000', colHead: '#000', bullet: '#000', linkColor: '#0d1b5e' }
  }
}

const css = `
  .sv-root {
    background: #0b0f1e;
    color: #fff;
    overflow-x: hidden;
  }

  /* ── HERO ── */
  .sv-hero {
    background: #0b0f1e;
    
    background-position: center;
    background-size: cover;
    padding: 100px 24px 100px;
    text-align: center;
  }

  .sv-hero-eyebrow {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.38em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.35);
    margin-bottom: 16px;
  }

  .sv-hero-h1 {
    font-size: clamp(2rem, 4.5vw, 4.5rem);
    font-weight: 900;
    line-height: 1.0;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    color: #fff;
    margin: 0;
    align-items: left;
  }
  .sv-hero-h1 .sv-gradient {
    background: linear-gradient(90deg, #ff1493 0%, #10b9e8 55%, #ffdc24 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* ── TICKER ── */
  .sv-ticker {
    background: #1e90ff;
    padding: 13px 0;
    overflow: hidden;
    white-space: nowrap;
  }
  .sv-ticker-track {
    display: inline-flex;
    animation: sv-ticker 38s linear infinite;
  }
  .sv-ticker-item {
    display: inline-flex; align-items: center; gap: 14px;
    padding: 0 28px;
    font-size: 10px; font-weight: 800;
    letter-spacing: 0.3em; text-transform: uppercase;
    color: #fff;
  }
  .sv-ticker-dot {
    width: 4px; height: 4px; border-radius: 50%;
    background: rgba(255,255,255,0.55); flex-shrink: 0;
  }
  @keyframes sv-ticker {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  /* ── SERVICE BAND ── */
  .sv-band {
    padding: 48px 24px 52px;
  }

  /* Centered container matching NickelBronx */
  .sv-band-container {
    max-width: 960px;
    margin: 0 auto;
  }

  /* Top: title left | desc+link right — 2 col */
  .sv-band-top {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
    margin-bottom: 32px;
  }
  @media (max-width: 760px) {
    .sv-band-top { grid-template-columns: 1fr; gap: 20px; margin-bottom: 32px; }
  }

  .sv-band-title {
    font-size: clamp(1.8rem, 3.2vw, 3.2rem);
    font-weight: 900;
    line-height: 1.0;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    margin: 0;
  }

  .sv-band-right {
    padding-top: 0;
  }

  .sv-band-desc {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.7;
    margin: 0 0 20px 0;
    opacity: 0.9;
  }

  .sv-band-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    text-decoration: none;
    transition: gap 0.2s;
  }
  .sv-band-link:hover { gap: 18px; }
  .sv-band-link svg { flex-shrink: 0; }

  /* 3-col breakdown — uses browser bullet list like NickelBronx */
  .sv-band-cols {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    margin-top: 48px;
  }
  @media (max-width: 760px) { .sv-band-cols { grid-template-columns: 1fr 1fr; gap: 28px; } }
  @media (max-width: 480px) { .sv-band-cols { grid-template-columns: 1fr; gap: 24px; } }

  .sv-col-head {
    font-size: 0.85rem;
    font-weight: 900;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  .sv-col-list {
    list-style: disc;
    padding-left: 20px;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .sv-col-item {
    font-size: 0.97rem;
    font-weight: 400;
    line-height: 1.35;
  }

  /* ── FOOTER CTA ── */
  .sv-footer {
    background: #0b0f1e;
    padding: 100px 24px;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 48px;
    align-items: center;
    max-width: 960px;
    margin: 0 auto;
    border-top: 1px solid rgba(255,255,255,0.08);
  }
  @media (max-width: 700px) {
    .sv-footer { grid-template-columns: 1fr; }
  }

  .sv-footer-wrap {
    background: #0b0f1e;
    border-top: 1px solid rgba(255,255,255,0.08);
  }

  .sv-footer-h2 {
    font-size: clamp(2rem, 5vw, 4.5rem);
    font-weight: 900;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    color: #fff;
    line-height: 1.0;
    margin: 0;
  }
  .sv-footer-h2 span { color: #1e90ff; }

  .sv-footer-btn {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #0b0f1e;
    background: #fff;
    text-decoration: none;
    padding: 20px 44px;
    white-space: nowrap;
    flex-shrink: 0;
    transition: background 0.2s, color 0.2s, transform 0.2s;
  }
  .sv-footer-btn:hover {
    background: #1e90ff; color: #fff;
    transform: translateY(-2px);
  }
  .sv-footer-btn svg { transition: transform 0.2s; }
  .sv-footer-btn:hover svg { transform: translateX(4px); }
`

const ArrowSvg = ({ color }: { color: string }) => (
  <svg width="36" height="13" viewBox="0 0 41 14" fill="none">
    <path d="M24.5286 4.67308C27.3541 4.4049 30.4728 4.73319 33.4639 4.75461C30.5673 3.77231 27.4045 3.70519 24.1856 3.4288C21.5603 3.1847 22.5829 2.83761 23.3001 0.992852C23.4238 0.906503 23.6199 0.574081 23.7379 0.809823C24.5793 1.285 26.1006 1.00232 27.1692 1.21889C30.1216 1.39939 33.1591 1.80277 35.9659 2.92266C37.6839 3.66449 39.5905 4.27521 40.8274 5.97848C40.8676 6.79018 40.5356 6.35331 40.5485 6.94551C40.4923 7.0489 40.0738 6.8969 40.3192 7.14184C40.3671 7.50477 39.9371 7.65577 39.9479 8.00914C39.6286 8.20535 39.7489 8.60072 39.4079 8.79112C38.4728 8.64324 37.6909 9.06303 36.868 9.37409C33.8023 10.7178 30.7269 11.9361 27.6141 12.99C27.2792 12.9417 25.1868 14.2354 25.2406 13.6757C25.5699 13.1262 25.6603 12.4285 26.0804 11.95C26.1782 11.5749 26.2986 11.0483 26.8104 11.1572C29.0898 10.1009 31.5855 9.6393 33.8461 8.49924C37.1269 7.54462 33.993 7.64536 32.7838 7.5211C27.2492 7.09513 21.8075 7.09505 16.557 7.7018C12.6687 8.00752 8.95454 8.71272 5.24016 9.51627C4.1159 9.87062 2.98708 10.2469 1.83651 10.5909C1.57413 10.7392 1.26484 10.887 0.972204 10.9687C0.694118 11.1008 -0.175088 11.8603 0.0824404 11.268C0.233543 10.5677 0.573314 9.9309 0.751451 9.24404C1.70305 8.42561 2.84179 8.10964 3.9272 7.74456C6.93036 6.65591 10.0426 6.1611 13.2069 5.65576C16.8533 5.11623 20.6073 4.65583 24.53 4.67319L24.5286 4.67308Z" fill={color}/>
  </svg>
)

function ServicesPage() {
  return (
    <div className="sv-root">
      <style>{css}</style>

      {/* ── HERO ── */}
      <div className="sv-hero">
        {/* <div className="sv-hero-eyebrow">Fortrano Technology · Our Services</div> */}
        <h1 className="sv-hero-h1">
          <span className="block">Where <span className="sv-gradient">Creativity</span></span>
          <span className="block">Meets Brands</span>
        </h1>
      </div>

      {/* ── TICKER ── */}
  

      {/* ── BANDS ── */}
      {services.map((service, index) => {
        const { bg, text, colHead, bullet, linkColor } = getBandStyle(index, service.color)

        return (
          <div
            key={service.href}
            className="sv-band"
            style={{ backgroundColor: bg, color: text }}
          >
            <div className="sv-band-container">
              {/* Title + desc */}
              <div className="sv-band-top">
                <h2 className="sv-band-title" style={{ color: text }}>
                  {service.title.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </h2>

                <div className="sv-band-right">
                  <p className="sv-band-desc" style={{ color: text }}>{service.description}</p>
                  <Link
                    to={service.href}
                    className="sv-band-link"
                    style={{ color: linkColor }}
                  >
                    Learn More
                    <ArrowSvg color={linkColor} />
                  </Link>
                </div>
              </div>

              {/* 3-col breakdown */}
              <div className="sv-band-cols">
                {service.details.map((detail) => (
                  <div key={detail.title}>
                    <div className="sv-col-head" style={{ color: colHead }}>{detail.title}</div>
                    <ul className="sv-col-list" style={{ color: bullet }}>
                      {detail.items.map((item) => (
                        <li key={item} className="sv-col-item">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      })}

      {/* ── FOOTER CTA ── */}
     
    </div>
  )
}

export default ServicesPage
