import React, {useState, useEffect} from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import Socials from './components/socials/Socials'
import IconLoading from './icon/IconLoading'
import reveal from './animations/ScrollListener'
import './animations/Scroll.css'
import './animations/Animations.css'
import LandingSection from './page_sections/intro/LandingSection'
import AboutSection from './page_sections/about/AboutSection'
import WorkSection from './page_sections/work/WorkSection'
import ProjectsSection from './page_sections/projects/ProjectsSection'
import ContactSection from './page_sections/contact/ContactSection'

/**
 * Main App widget
 *
 * @return {App}
 */
function App() {
  const [loading] = useState(false)

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  useEffect(() => {
    /**
     * Show loading view
     */
    async function loadContent() {
      document.location = '#'
      await sleep(1000)
      document.body.classList.add('no-scroll')
      await sleep(2500)
      document.body.classList.remove('no-scroll')
    }
    window.addEventListener('scroll', reveal)
    loadContent()
  }, [])

  return loading === true ? (
    <div className="loadingContainer">
      <span className="loadingIcon">
        <IconLoading />
      </span>
    </div>
  ) : (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Socials />
      <Routes>
        <Route path="/" exact element={
          <div className="homeScreenContainer">
            <LandingSection />
            <AboutSection />
            <WorkSection />
            <ProjectsSection />
            <ContactSection />
          </div>
        } />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
