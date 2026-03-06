'use client'

import {useState, useEffect} from 'react'
import Navbar from './components/navbar/Navbar'
import IconLoading from './icon/IconLoading'
import reveal from './animations/ScrollListener'
import LandingSection from './page_sections/intro/LandingSection'
import AboutSection from './page_sections/about/AboutSection'
import WorkSection from './page_sections/work/WorkSection'
import EducationSection from './page_sections/education/EducationSection'
import ProjectsSection from './page_sections/projects/ProjectsSection'
import ContactSection from './page_sections/contact/ContactSection'

/**
 * Main App widget
 *
 * @return {App}
 */
function App() {
  const [loading] = useState(false)
  const initialLoadKey = 'os_initial_tab_animation_played'
  const [shouldAnimateLanding, setShouldAnimateLanding] = useState(true)
  const [landingPreferenceResolved, setLandingPreferenceResolved] = useState(
    false
  )

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  useEffect(() => {
    try {
      setShouldAnimateLanding(sessionStorage.getItem(initialLoadKey) !== 'true')
    } catch {
      setShouldAnimateLanding(true)
    } finally {
      setLandingPreferenceResolved(true)
    }
  }, [])

  useEffect(() => {
    if (!landingPreferenceResolved) return

    /**
     * Run intro lock only once per tab session
     */
    async function loadContent() {
      document.location = '#'

      if (shouldAnimateLanding) {
        await sleep(500)
        document.body.classList.add('no-scroll')
        await sleep(2500)
        document.body.classList.remove('no-scroll')
        try {
          sessionStorage.setItem(initialLoadKey, 'true')
        } catch {}
      } else {
        document.body.classList.remove('no-scroll')
      }
    }

    window.addEventListener('scroll', reveal)
    loadContent()

    return () => {
      window.removeEventListener('scroll', reveal)
    }
  }, [landingPreferenceResolved, shouldAnimateLanding])

  return loading === true ? (
    <div className="loadingContainer">
      <span className="loadingIcon">
        <IconLoading />
      </span>
    </div>
  ) : (
    <>
      <Navbar animateIntro={shouldAnimateLanding} />
      <div className="homeScreenContainer">
        <LandingSection animateIntro={shouldAnimateLanding} />
        <AboutSection />
        <WorkSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </div>
    </>
  )
}

export default App
