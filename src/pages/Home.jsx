import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import ProjectsSection from '../components/ProjectsSection'
import AboutSection from '../components/AboutSection'
import ExperienceSection from '../components/ExperienceSection'
import ServicesSection from '../components/ServicesSection'
import ContactSection from '../components/ContactSection'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  return (
    <>
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <ExperienceSection />
      <ServicesSection />
      <ContactSection />
    </>
  )
}
