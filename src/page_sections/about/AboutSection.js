import React from 'react'
import './AboutSection.css'
import ct from '../../content/AboutContent.js'

/**
 * About Widget
 *
 * @return {AboutSection}
 */
function AboutSection() {
  const content = ct()

  return (
    <div id="about">
      <div className="aboutSectionContainer reveal fade-left">
        <div className="aboutSectionText">
          <div className="aboutSectionBody">{content.paragraph_one}</div>
          <div className="aboutSectionBody">{content.paragraph_two}</div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
