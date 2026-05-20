import { h2Class } from '../lib/styles'

function NewsletterSection() {
  return (
    <section className="bg-gradient-to-r from-[#0d1b5e] via-[#1e90ff] to-[#10b9e8] text-white">
      <div className="mx-auto grid max-w-[1230px] items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-28">
        <div>
          <h2 className={`${h2Class} text-white`}>
            Sign up for our email
            <br />
            newsletter
          </h2>
          <p className="mt-4 text-lg font-semibold text-white/80">
            It's always funny or informative. Sometimes both.
          </p>
        </div>
        <div className="grid gap-4">
       <input
  type="text"
  placeholder="Name"
  className="w-full border-2 border-white/40 bg-white/15 px-5 py-4 text-base font-semibold text-white placeholder:text-white outline-none backdrop-blur-sm transition focus:border-white focus:bg-white/25"
/>
          <div className="relative">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-white/60">@</span>
           <input
  type="text"
  placeholder="Email"
  className="w-full border-2 border-white/40 bg-white/15 px-5 py-4 text-base font-semibold text-white placeholder:text-white outline-none backdrop-blur-sm transition focus:border-white focus:bg-white/25"
/>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-white px-10 py-4 text-base font-black uppercase text-[#0d1b5e] shadow-[6px_6px_0_rgba(0,0,0,0.2)] transition hover:-translate-y-1 hover:bg-[#0d1b5e] hover:text-white hover:shadow-[8px_8px_0_rgba(0,0,0,0.2)]"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection

