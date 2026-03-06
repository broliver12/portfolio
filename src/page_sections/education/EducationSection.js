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
      <h2 className="educationTitleBar">{content.title}</h2>
      <p className="educationSubtitle">{content.subtitle}</p>

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
              <h3 className="educationSchool">{content.school}</h3>
              <p className="educationDegree">{content.degree}</p>
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

        <p className="educationDescription">{content.description}</p>
      </CardSurface>
    </div>
  )
}

export default EducationSection
