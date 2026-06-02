import WorkSection from '../components/WorkSection'

function WorkPage() {
  return (
    <section className="bg-white text-[#0d1b5e]">
      <div className="mx-auto max-w-[1230px] px-5 pb-12 pt-10 sm:px-8 lg:pb-16">
        <h1 className="mx-auto max-w-[860px] text-center text-[clamp(1.75rem,4vw,2.75rem)] font-black uppercase leading-none tracking-[-0.02em]">
          We could tell you about all the cool shit we've made - but we'd rather show you instead.
        </h1>
      </div>

      <WorkSection showIntro={false} />
    </section>
  )
}

export default WorkPage
