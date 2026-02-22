import React, {useEffect, useState} from 'react'
import './LandingSection.css'
import '../../components/button/Button.css'
import ct from '../../content/LandingContent.js'

/**
 * Introduction Widget
 *
 * @arg {any} props
 *
 * @return {LandingSection}
 */
function LandingSection(props) {
  const content = ct()
  const animateIntro = props.animateIntro === true
  const roles = [
    'Software Developer',
    'Android Expert',
    'Team Leader',
    'AI Enthusiast',
  ]
  const [roleIndex, setRoleIndex] = useState(0)
  const [roleVisible, setRoleVisible] = useState(true)

  const introTextClass = animateIntro ?
    'intro-text loading' :
    'intro-text static'
  const cursorClass = animateIntro ? 'introStyle blink' : 'introStyle'
  const headerClass = animateIntro ?
    'introNameHeader' :
    'introNameHeader noAnimation'
  const titleClass = animateIntro ?
    'introTitleHeader' :
    'introTitleHeader noAnimation'
  const descClass = animateIntro ?
    'introDescription' :
    'introDescription noAnimation'
  const ctaClass = animateIntro ?
    'outlinedButtonComponent mainCta' :
    'outlinedButtonComponent mainCta noAnimation'
  const roleClass = roleVisible ?
    'introRoleText introRoleVisible' :
    'introRoleText introRoleHidden'
  const currentRole = roles[roleIndex]
  const roleArticle = /^[aeiou]/i.test(currentRole) ? 'an' : 'a'

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleVisible(false)
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length)
        setRoleVisible(true)
      }, 220)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (<div className="introContainer">
    <div className="salutation">
      <div className={introTextClass}>{content.animated_text}</div>
      <span className={cursorClass}>{content.animated_cursor}</span>
    </div>
    <div id="intro" className="introContent">
      <div className={headerClass}>{content.name}</div>
      <div className={titleClass}>
        {'I\'m ' + roleArticle + ' '}
        <span className={roleClass + ' introRoleAccent'}>
          {currentRole}
        </span>
        {' and Computer Engineer.'}
      </div>
      <div className={descClass}>
        {content.paragraph_section_1}
        <l className="employerLabel" onClick={() =>{
          window.open('https://flexfitnessapp.com/', '_blank')
        }}>{content.employer}</l>
        {content.paragraph_section_2}
      </div>
      <div
        className={ctaClass}
        onClick={() => window.open(content.resume_url, '_blank')}>
        {content.cta}
      </div>
    </div>
  </div>
  )
}

export default LandingSection
