import React from 'react'
import './AboutSection.css'
import '../../Button.css'
import ct from '../../../content/AboutContent.js'

/**
 * About Widget
 *
 * @arg {any} props
 *
 * @return {AboutSection}
 */
function AboutSection(props) {
  const content = ct()
  return (
    <div id="about">
      <div id="about22" className="aboutSectionTitleBar">
        {content.title}
        <div className="aboutSectionTitleDecoration" />
      </div>
      <div className="aboutSectionContainer reveal fade-left">
        <div className="aboutSectionText">
          <div className="aboutSectionBody">
            {content.paragraph_one}
          </div>
          <div className="aboutSectionBody">
            {content.paragraph_two}
          </div>
          <div className="aboutSectionBody">
            {content.paragraph_three}
          </div>
        </div>
        <div className="profilePicture" onClick={() => { }} />
      </div>
    </div>
  )
}

export default AboutSection
