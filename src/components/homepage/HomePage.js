import React from 'react'
import './HomePage.css'
import '../../animations/Scroll.css'
import '../../animations/Animations.css'
import IntroSection from './intro/IntroSection'
import AboutSection from './about/AboutSection'
import WorkSection from './work/WorkSection'
import ProjectsSection from './projects/ProjectsSection'
import ContactSection from './contact/ContactSection'

/**
 * Home Page Wrapper
 *
 * @return {HomePage}
 */
function HomePage() {
  return (
    <div>
      <div className="homeScreenContainer">
        <IntroSection />
        <AboutSection />
        <WorkSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  )
}

export default HomePage
