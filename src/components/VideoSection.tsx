function VideoSection() {
  return (
    <section className="relative bg-[#0b0f1e] py-16 sm:py-24 overflow-hidden">

      {/* Animated gradient orbs in background */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #1e90ff 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, #10b9e8 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-10"
        style={{ background: 'radial-gradient(ellipse, #0d1b5e 0%, transparent 70%)', filter: 'blur(40px)' }} />

      {/* Subtle grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-100"
        style={{
          backgroundImage: 'linear-gradient(rgba(30,144,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(30,144,255,0.04) 1px,transparent 1px)',
          backgroundSize: '40px 40px'
        }} />

      <div className="relative mx-auto max-w-[1390px] px-5 sm:px-8 lg:px-10">

        {/* Label above video */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-[#1e90ff]/40" />
          {/* <span className="text-xs font-black uppercase tracking-[0.3em] text-[#1e90ff]/70">Built to Impress</span> */}
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-[#1e90ff]/40" />
        </div>

        {/* Video frame */}
        <div className="relative p-[2px] rounded-none"
          style={{ background: 'linear-gradient(135deg, #1e90ff44, #10b9e822, #0d1b5e44)' }}>

          {/* Corner accents */}
          <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-[#1e90ff] z-10" />
          <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-[#1e90ff] z-10" />
          <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-[#1e90ff] z-10" />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-[#1e90ff] z-10" />

          <div className="relative aspect-[16/9] min-h-[180px] overflow-hidden bg-[#0b0f1e] sm:aspect-[16/6] sm:min-h-[280px]"
            style={{ boxShadow: '0 0 60px rgba(30,144,255,0.15), 0 24px 70px rgba(13,27,94,0.5)' }}>
            <video
              className="absolute inset-0 h-full w-full object-cover"
              preload="metadata"
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
            >
              <source src="/ADEJUMO IBUKUN - Google Chrome 2026-05-14 17-59-22.mp4" type="video/mp4" />
            </video>

            {/* Subtle brand tint overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0d1b5e]/30 via-transparent to-transparent" />

            {/* Live badge */}
            <div className="absolute left-4 top-4 flex items-center gap-2 bg-[#0b0f1e]/70 px-3 py-1.5 backdrop-blur-sm sm:left-6 sm:top-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1e90ff] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10b9e8]" />
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Live Preview</span>
            </div>
          </div>
        </div>

        {/* Glow line below */}
        <div className="mx-auto mt-8 h-px w-1/2 bg-gradient-to-r from-transparent via-[#1e90ff]/30 to-transparent" />

      </div>
    </section>
  )
}

export default VideoSection
