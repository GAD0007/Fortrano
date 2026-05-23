import Layout from './components/Layout'
import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ServicePage from './pages/ServicePage'
import ServicesPage from './pages/ServicesPage'
import WorkPage from './pages/WorkPage'

function ScrollToLocation() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [location])

  return null
}

function App() {
  return (
    <Layout>
      <ScrollToLocation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:serviceSlug" element={<ServicePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}

export default App
