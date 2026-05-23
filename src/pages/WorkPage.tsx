import WorkSection from '../components/WorkSection'
import { h2Class } from '../lib/styles'

function WorkPage() {
  return (
    <section className="bg-white text-[#0d1b5e]">
      <div className="mx-auto max-w-[1230px] px-5 pb-12 pt-10 sm:px-8 lg:pb-16">
        
        <h1 className={`${h2Class} max-w-[980px]`}>
          We could tell you about all the cool shit we’ve made — but we’d rather show you instead.
        </h1>
      </div>

      <WorkSection showIntro={false} />
    </section>
  )
}

export default WorkPage
