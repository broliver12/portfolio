import React from 'react'
import './IntroSection.css'
import '../../Button.css'
import ct from '../../../content/IntroContent.js'


/**
 * Introduction Widget
 *
 * @return {IntroSection}
 */
function IntroSection() {
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
        <l className="employerLabel">{content.employer}</l>
        {content.paragraph_section_2}
      </div>
      <div
        className="btn--outline mainCta"
        onClick={() => window.open(content.resume_url, '_blank')}>
        {content.cta}
      </div>
    </div>
  </div>
  )
}

export default IntroSection
