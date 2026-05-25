function AnnouncementBar() {
  return (
    <div className="relative z-10 flex items-center justify-between gap-2 bg-[#0d1b5e] px-3 py-3 text-[10px] font-black text-white sm:gap-3 sm:px-8 sm:text-sm lg:px-12">
      <span className="text-xl leading-none text-[#1e90ff] sm:text-2xl">&lsaquo;</span>
      <p className="whitespace-nowrap text-center leading-tight">
        Build your next digital edge with{' '}
        <a href="#contact" className="text-[#10b9e8] underline decoration-2 underline-offset-4">
          Fortrano Technologies
        </a>
      </p>
      <span className="text-xl leading-none text-[#1e90ff] sm:text-2xl">&rsaquo;</span>
    </div>
  )
}

export default AnnouncementBar
