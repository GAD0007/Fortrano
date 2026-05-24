export const headingBase = 'font-black uppercase leading-none tracking-[-0.02em]'
export const h1Class = `${headingBase} text-[clamp(3rem,9vw,6rem)]`
export const h2Class = `${headingBase} text-[clamp(2rem,5vw,3.5rem)]`
export const h3Class = `${headingBase} text-[clamp(1.5rem,3vw,2.5rem)]`
export const textBase = 'text-base sm:text-lg leading-relaxed font-semibold'
export const ctaButtonClass = 'inline-flex items-center justify-center gap-3 bg-[#0d1b5e] px-12 py-4 text-sm font-black uppercase tracking-widest text-white shadow-[6px_6px_0_#1e90ff] transition-[transform,box-shadow] duration-200 hover:-translate-y-[3px] hover:shadow-[10px_10px_0_#1e90ff]'

// Keep for backwards compatibility if needed during refactor
export const headingClass = headingBase
