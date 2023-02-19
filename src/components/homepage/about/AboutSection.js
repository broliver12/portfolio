import React, {useState, useEffect} from 'react'
import './AboutSection.css'
import '../../Button.css'
import './Cube.css'
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

  const [buttonsEnabled, setButtonsEnabled] = useState(true)
  const [sel, setSelected] = useState(0)
  const [currentClass, setCurrentClass] = useState('')

  const faceOrder = [
    'front',
    'back',
    'top',
    'right',
    'bottom',
    'left',
    'front',
    'back',
    'top',
    'right'
  ]
  /**
   * ImageCube Init
   *
   * @param {boolean} notInitialCall true if not the initial call
   */
  async function changeSide(notInitialCall) {
    if (buttonsEnabled === false) {
      return
    }

    const cube = document.querySelector('.cube')
    let showClass = ''

    setButtonsEnabled(false)
    setTimeout( () => {
      setButtonsEnabled(true)
    }, 1000)

    if (notInitialCall === true) {
      showClass = 'show-' + faceOrder[sel + 1]
      setSelected(sel + 1)
    } else if (notInitialCall === false) {
      showClass = 'show-' + faceOrder[sel - 1]
      setSelected(sel - 1)
    } else {
      showClass = 'show-' + faceOrder[sel]
    }
    if (currentClass) {
      cube.classList.remove(currentClass)
    }
    cube.classList.add(showClass)
    setCurrentClass(showClass)
  }

  useEffect(async () => {
    await changeSide()
  }, [])

  const images = [
    '/img/oliver_headshot.jpg',
    '/img/oliver_indi_island.png',
    '/img/oliver_kelsey_nice.png',
    '/img/indi_toronto.png',
    '/img/oliver_italy.png',
    '/img/oliver_st_emilion.png',
  ]

  const image2 = [
    '/img/oliver_indi_couch.png',
    '/img/oliver_iroquois_falls.png',
    '/img/oliver_kaslo.png',
    '/img/oliver_indi_farm.png',
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
        <div className='imageContainer'>
          <span className='arrowIcon fas fa-arrow-left'
            style={{opacity: (sel > 0) ? 1 : 0}}
            onClick={async () => {
              if (sel > 0) {
                await changeSide(false)
              }
            }} />
          <div className="scene">
            <div className="cube">
              <div className="cube__face cube__face--front" style={{
                backgroundImage:
                  'url(' + `${(sel <= 2) ? images[0] : image2[0]}` + ')',
                backgroundSize: 'contain'
              }} />
              <div className="cube__face cube__face--back" style={{
                backgroundImage:
                  'url(' + `${(sel <= 5) ? images[1] : image2[1]}` + ')',
                backgroundSize: 'contain'
              }} />
              <div className="cube__face cube__face--right" style={{
                backgroundImage:
                  'url(' + `${(sel <= 5) ? images[2] : image2[2]}` + ')',
                backgroundSize: 'contain'
              }} />
              <div className="cube__face cube__face--left" style={{
                backgroundImage: 'url(' + images[3] + ')',
                backgroundSize: 'contain'
              }} />
              <div className="cube__face cube__face--top" style={{
                backgroundImage:
                  'url(' + `${(sel <= 5) ? images[4] : image2[3]}` + ')',
                backgroundSize: 'contain'
              }} />
              <div className="cube__face cube__face--bottom" style={{
                backgroundImage: 'url(' + images[5] + ')',
                backgroundSize: 'contain'
              }} />
            </div>
          </div>
          <span className='arrowIcon fas fa-arrow-right'
            style={{opacity: (sel < images.length + image2.length - 1) ? 1 : 0}}
            onClick={async () => {
              if (sel < images.length + image2.length - 1) {
                await changeSide(true)
              }
            }} />
        </div>
      </div>
    </div>
  )
}

export default AboutSection
