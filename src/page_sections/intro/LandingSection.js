import React from 'react'
import './LandingSection.css'
import '../../components/button/Button.css'
import ct from '../../content/LandingContent.js'

/**
 * Introduction Widget
 *
 * @return {LandingSection}
 */
function LandingSection() {
  const content = ct()
  return (<div className="introContainer">
    <div className="salutation">
      <div className="intro-text loading">{content.animated_text}</div>
      <span className="introStyle blink">{content.animated_cursor}</span>
    </div>
    <div id="intro" className="introContent">
      <div className="introNameHeader">{content.name}</div>
      <div className="introTitleHeader">
        {content.job_description}
      </div>
      <div className="introDescription">
        {content.paragraph_section_1}
        <l className="employerLabel" onClick={() =>{
          window.open('https://www.konrad.com/work', '_blank')
        }}>{content.employer}</l>
        {content.paragraph_section_2}
      </div>
      <div
        className="outlinedButtonComponent mainCta"
        onClick={() => window.open(content.resume_url, '_blank')}>
        {content.cta}
      </div>
    </div>
  </div>
  )
}

export default LandingSection
