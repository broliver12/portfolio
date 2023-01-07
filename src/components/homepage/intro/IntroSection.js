import React from 'react'
import './IntroSection.css'
import '../../Button.css'

/**
 * Introduction Widget
 *
 * @return {IntroSection}
 */
function IntroSection() {
  return (
    <div id="intro" className="introContainer">
      <div className="intro">Hi! My name is</div>
      <div className="introNameHeader">Oliver Straszynski.</div>
      <div className="introTitleHeader">
        I&#39;m a Software Developer and Computer Scientist.
      </div>
      <div className="introDescription">
        I&#39;m currently working as an Android Developer, creating modern, user
        centric mobile solutions with
        <l className="employerLabel">Konrad Group.</l>I love learning about new
        technology and solving complex problems.
      </div>
      <div
        className="btn--outline mainCta"
        onClick={() => window.open('ostraszynski_resume.pdf', '_blank')}>
        Resume
      </div>
    </div>
  )
}

export default IntroSection
