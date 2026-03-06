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
        <h2 className="srOnly">About</h2>
        <div className="aboutSectionText">
          <p className="aboutSectionBody">{content.paragraph_one}</p>
          <p className="aboutSectionBody">{content.paragraph_two}</p>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
