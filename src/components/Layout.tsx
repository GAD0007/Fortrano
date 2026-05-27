import type { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import AnnouncementBar from './AnnouncementBar'
import Footer from './Footer'
import Navbar from './Navbar'
import ContactSection from './ContactSection'

type LayoutProps = {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const shouldShowContactSection = location.pathname !== '/contact'

  return (
    <div className="min-h-screen bg-[#0b0f1e] font-sans text-white">
      <AnnouncementBar />
      <Navbar />
      <main>{children}</main>
      {shouldShowContactSection && <ContactSection />}
      <Footer />
    </div>
  )
}

export default Layout
