import type { ReactNode } from 'react'
import AnnouncementBar from './AnnouncementBar'
import Footer from './Footer'
import Navbar from './Navbar'

type LayoutProps = {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#0b0f1e] font-sans text-white">
      <AnnouncementBar />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

