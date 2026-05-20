import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import HeroSection from './components/HeroSection'
import Layout from './components/Layout'
import NewsletterSection from './components/NewsletterSection'
import ServicesSection from './components/ServicesSection'
import TestimonialSection from './components/TestimonialSection'
import VideoSection from './components/VideoSection'
import WorkSection from './components/WorkSection'

function App() {

  return (
    <Layout>
      <>
        <HeroSection />
        <VideoSection />
        <AboutSection />
        <ServicesSection />
        <WorkSection />
        <TestimonialSection />
        <NewsletterSection />
        <ContactSection />
      </>
    </Layout>
  )
}

export default App
