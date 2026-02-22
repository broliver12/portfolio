import React from 'react'
import './EducationSection.css'
import ct from '../../content/EducationContent'
import IconCalendarMonth from '../../icon/IconCalendarMonth'
import CardSurface from '../../components/card_surface/CardSurface'

/**
 * Education Widget
 *
 * @return {EducationSection}
 */
function EducationSection() {
  const content = ct()

  return (
    <div id="education" className="educationSectionContainer">
      <div className="educationTitleBar">{content.title}</div>
      <div className="educationSubtitle">{content.subtitle}</div>

      <CardSurface className="educationCard reveal fade-bottom">
        <div className="educationHeader">
          <div className="educationMain">
            <div className="educationLogo">
              <img
                className="educationLogoImage"
                src="/img/brand-UofT.jpg"
                alt="University of Toronto logo"
              />
            </div>
            <div className="educationMeta">
              <div className="educationSchool">{content.school}</div>
              <div className="educationDegree">{content.degree}</div>
              <div className="educationPill">{content.highlight}</div>
            </div>
          </div>
          <div className="educationDate">
            <span className="educationDateIcon" aria-hidden="true">
              <IconCalendarMonth />
            </span>
            <span className="centeredText">{content.date_range}</span>
          </div>
        </div>

        <div className="educationDescription">{content.description}</div>
      </CardSurface>
    </div>
  )
}

export default EducationSection
