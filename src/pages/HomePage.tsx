import AboutSection from '../components/AboutSection'
import HeroSection from '../components/HeroSection'
import NewsletterSection from '../components/NewsletterSection'
import ServicesSection from '../components/ServicesSection'
import TestimonialSection from '../components/TestimonialSection'
import VideoSection from '../components/VideoSection'
import WorkSection from '../components/WorkSection'

function HomePage() {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <AboutSection />
      <ServicesSection />
      <WorkSection />
      <TestimonialSection />
      <NewsletterSection />
    </>
  )
}

export default HomePage
