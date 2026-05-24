import { Link } from 'react-router-dom'
import { h2Class, h3Class } from '../lib/styles'

const companyFacts = [
  { label: 'Company name', value: 'Fortrano Technology' },
  { label: 'Business focus', value: 'Branding, marketing strategy, UI/UX design, and web development' },
  { label: 'Location', value: 'Lagos, Nigeria' },
  { label: 'Availability', value: 'Remote Worldwide' },
]

const registrationDetails = [
  { label: 'Registration authority', value: 'Corporate Affairs Commission (CAC), Nigeria' },
  { label: 'Business registration number', value: 'To be added' },
]

const values = [
  { title: 'Strategy First', desc: 'Clear direction before a single pixel moves.' },
  { title: 'Speed & Polish', desc: 'Fast, responsive experiences that hold up.' },
  { title: 'Brand Systems', desc: 'Consistency baked in, not bolted on.' },
  { title: 'Growth-Minded', desc: 'Practical marketing that converts attention.' },
]

const css = `
  /* ── dot grid background ── */
  .ab-root {
    background-color: #f5f7fc;
    background-image: radial-gradient(rgba(13,27,94,0.07) 1px, transparent 1px);
    background-size: 26px 26px;
    color: #0d1b5e;
    overflow-x: hidden;
  }

  /* ── Hero ── */
  .ab-hero {
    max-width: 1230px;
    margin: 0 auto;
    padding: 80px 40px 100px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: center;
  }
  @media (max-width: 900px) {
    .ab-hero { grid-template-columns: 1fr; gap: 48px; padding: 60px 24px 72px; }
    .ab-hero-card { max-width: 100%; }
  }

  .ab-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: #1e90ff;
    margin-bottom: 24px;
    opacity: 0;
    animation: ab-up 0.6s 0.05s forwards;
  }
  .ab-eyebrow::before {
    content: '';
    width: 30px; height: 2px;
    background: #1e90ff;
    display: block;
    flex-shrink: 0;
  }

  .ab-hero-heading {
    opacity: 0;
    animation: ab-up 0.7s 0.15s forwards;
    margin-bottom: 24px;
  }
  .ab-hero-heading em {
    font-style: normal;
    color: #1e90ff;
  }

  .ab-hero-sub {
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.78;
    color: rgba(13,27,94,0.62);
    max-width: 500px;
    margin-bottom: 40px;
    opacity: 0;
    animation: ab-up 0.7s 0.28s forwards;
  }

  .ab-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    background: #0d1b5e;
    color: #fff;
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 900;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 1rem 3rem;
    box-shadow: 6px 6px 0 #1e90ff;
    transition: transform 0.2s, box-shadow 0.2s;
    opacity: 0;
    animation: ab-up 0.7s 0.4s forwards;
  }
  .ab-cta:hover {
    transform: translateY(-3px);
    box-shadow: 10px 10px 0 #1e90ff;
  }
  .ab-cta svg { transition: transform 0.2s; }
  .ab-cta:hover svg { transform: translateX(4px); }

  /* ── Facts card ── */
  .ab-hero-card {
    opacity: 0;
    animation: ab-left 0.8s 0.35s forwards;
  }

  .ab-card {
    background: #fff;
    border-radius: 20px;
    padding: 36px 40px;
    box-shadow: 0 6px 40px rgba(13,27,94,0.09), 0 1px 0 rgba(13,27,94,0.04);
    position: relative;
    overflow: hidden;
  }
  .ab-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; height: 4px;
    background: linear-gradient(90deg, #1e90ff 0%, #0d1b5e 100%);
    border-radius: 20px 20px 0 0;
  }

  .ab-fact {
    padding: 16px 0;
    border-bottom: 1px solid rgba(13,27,94,0.07);
  }
  .ab-fact:first-child { padding-top: 0; }
  .ab-fact:last-child { border-bottom: none; padding-bottom: 0; }
  .ab-fact-label {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: rgba(13,27,94,0.38);
    margin-bottom: 6px;
  }
  .ab-fact-value {
    font-size: 1rem;
    font-weight: 700;
    color: #0d1b5e;
    line-height: 1.4;
  }

  /* ── Body sections ── */
  .ab-body {
    max-width: 1230px;
    margin: 0 auto;
    padding: 0 40px 120px;
  }
  @media (max-width: 700px) { .ab-body { padding: 0 24px 80px; } }

  /* ── Two-col panels ── */
  .ab-panels {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 24px;
    margin-bottom: 24px;
    opacity: 0;
    animation: ab-up 0.7s 0.1s both;
  }
  @media (max-width: 860px) { .ab-panels { grid-template-columns: 1fr; } }

  .ab-panel {
    border-radius: 20px;
    padding: 48px 48px;
    position: relative;
    overflow: hidden;
  }
  @media (max-width: 600px) { .ab-panel { padding: 36px 28px; } }

  .ab-panel-dark {
    background: #0d1b5e;
  }
  .ab-panel-dark::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 80% 60% at 90% 10%, rgba(30,144,255,0.15), transparent 70%);
    pointer-events: none;
  }

  .ab-panel-light {
    background: #fff;
    border: 1.5px solid rgba(13,27,94,0.10);
  }

  .ab-panel-tag {
    display: inline-block;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    padding: 5px 13px;
    border-radius: 100px;
    margin-bottom: 24px;
  }
  .ab-panel-dark .ab-panel-tag { background: rgba(30,144,255,0.18); color: #6ab8ff; }
  .ab-panel-light .ab-panel-tag { background: rgba(13,27,94,0.07); color: rgba(13,27,94,0.45); }

  .ab-panel-title { margin-bottom: 18px; }
  .ab-panel-dark .ab-panel-title { color: #fff; }
  .ab-panel-light .ab-panel-title { color: #0d1b5e; }

  .ab-panel-body {
    font-size: 1.02rem;
    line-height: 1.80;
  }
  .ab-panel-dark .ab-panel-body { color: rgba(255,255,255,0.60); }
  .ab-panel-light .ab-panel-body { color: rgba(13,27,94,0.55); }

  .ab-reg-row {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid rgba(13,27,94,0.08);
  }
  .ab-reg-row:first-of-type { margin-top: 24px; }
  .ab-reg-label {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(13,27,94,0.38);
    margin-bottom: 7px;
  }
  .ab-reg-value {
    font-size: 0.97rem;
    font-weight: 700;
    color: #0d1b5e;
  }

  /* ── Values ── */
  .ab-values {
    opacity: 0;
    animation: ab-up 0.7s 0.2s both;
  }

  .ab-values-header {
    margin-bottom: 32px;
  }

  .ab-section-eyebrow {
    font-size: 9.5px;
    font-weight: 700;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: #1e90ff;
    margin-bottom: 12px;
  }

  .ab-values-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  @media (max-width: 900px) { .ab-values-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 500px) { .ab-values-grid { grid-template-columns: 1fr; } }

  .ab-value-card {
    background: #fff;
    border-radius: 18px;
    padding: 36px 30px;
    border: 1.5px solid rgba(13,27,94,0.07);
    position: relative;
    overflow: hidden;
    transition: transform 0.25s, box-shadow 0.25s;
    cursor: default;
  }
  .ab-value-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 40px rgba(13,27,94,0.10);
  }
  .ab-value-card::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, #1e90ff, #0d1b5e);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.28s ease;
    border-radius: 0 0 18px 18px;
  }
  .ab-value-card:hover::after { transform: scaleX(1); }

  .ab-value-num {
    font-size: 2.6rem;
    font-weight: 800;
    color: rgba(30,144,255,0.11);
    line-height: 1;
    margin-bottom: 20px;
    letter-spacing: -0.04em;
  }
  .ab-value-title {
    font-size: 1.05rem;
    font-weight: 800;
    color: #0d1b5e;
    margin-bottom: 10px;
    letter-spacing: -0.01em;
  }
  .ab-value-desc {
    font-size: 0.9rem;
    color: rgba(13,27,94,0.52);
    line-height: 1.68;
  }

  /* ── Keyframes ── */
  @keyframes ab-up {
    from { opacity: 0; transform: translateY(26px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes ab-left {
    from { opacity: 0; transform: translateX(30px); }
    to   { opacity: 1; transform: translateX(0); }
  }
`

function AboutPage() {
  return (
    <div className="ab-root">
      <style>{css}</style>

      {/* ── Hero ── */}
      <div className="ab-hero">
        {/* Left: text */}
        <div>
          <div className="ab-eyebrow">About Fortrano</div>

          <h1 className={`${h2Class} ab-hero-heading`}>
            A Digital Studio Built for{' '}
            <em>Ambitious</em>{' '}
            Brands
          </h1>

          <p className="ab-hero-sub">
            Fortrano Technology helps businesses shape sharper brand identities, stronger websites,
            and practical marketing systems that make them easier to trust, understand, and choose.
          </p>

          <Link to="/contact" className="ab-cta">
            Work with us
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Right: facts card */}
        <div className="ab-hero-card">
          <div className="ab-card">
            {companyFacts.map((item) => (
              <div key={item.label} className="ab-fact">
                <div className="ab-fact-label">{item.label}</div>
                <div className="ab-fact-value">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="ab-body">

        {/* What We Do + Registration */}
        <div className="ab-panels">
          <div className="ab-panel ab-panel-dark">
            <div className="ab-panel-tag">What We Do</div>
            <h2 className={`${h3Class} ab-panel-title`}>From Identity to Conversion</h2>
            <p className="ab-panel-body">
              We work across identity, websites, product interfaces, content direction, and campaign
              planning. The goal is simple: help companies present themselves clearly and move
              customers from attention to action.
            </p>
          </div>

          <div className="ab-panel ab-panel-light">
            <div className="ab-panel-tag">Business Registration</div>
            <h2 className={`${h3Class} ab-panel-title`}>Official Details</h2>
            {registrationDetails.map((item) => (
              <div key={item.label} className="ab-reg-row">
                <div className="ab-reg-label">{item.label}</div>
                <div className="ab-reg-value">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* How We Work */}
        <div className="ab-values">
          <div className="ab-values-header">
            <div className="ab-section-eyebrow">How We Work</div>
            <h2 className={h3Class}>Principles We Don't Compromise On</h2>
          </div>

          <div className="ab-values-grid">
            {values.map((v, i) => (
              <div key={v.title} className="ab-value-card">
                <div className="ab-value-num">0{i + 1}</div>
                <div className="ab-value-title">{v.title}</div>
                <div className="ab-value-desc">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutPage
