import React, {useState} from 'react'
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

  const [sel, setSelected] = useState(0)

  const images = [
    '/img/oliver_headshot.jpg',
    '/img/oliver_indi_island.png',
    '/img/oliver_kelsey_nice.png',
    '/img/indi_toronto.png',
    '/img/oliver_italy.png',
    '/img/oliver_st_emilion.png',
    '/img/oliver_indi_couch.png',
    '/img/oliver_iroquois_falls.png',
    '/img/oliver_kaslo.png',
    '/img/oliver_indi_farm.png'
  ]
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
        <div className='imageContainer'>=

          <div className="profilePicture" style={{
            backgroundImage: 'url(' + images[sel] + ')'
          }}>
            <span className='arrowIcon fas fa-arrow-left'
              style={{opacity: (sel > 0) ? 1 : 0}}
              onClick={() => {
                if (sel > 0) {
                  setSelected(sel - 1)
                }
              }} />
            <span className='arrowIcon fas fa-arrow-right'
              style={{opacity: (sel < images.length - 1) ? 1 : 0}}
              onClick={() => {
                if (sel < images.length - 1) {
                  setSelected(sel + 1)
                }
              }} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutSection
