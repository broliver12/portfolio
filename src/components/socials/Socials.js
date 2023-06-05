import React from 'react'
import './Socials.css'
import IconGitHub from '../../icon/IconGithub'
import IconLinkedIn from '../../icon/IconLinkedin'
import li from '../../content/ExternalLinks.js'

/**
 * Social Media Icons when screen width is larger than 760px
 *
 * @arg {any} props
 *
 * @return {Socials}
 */
function Socials(props) {
  const openInNewTab = (url) => {
    window.open(url, '_blank')
  }

  const links = li()
  const socials = [
    {
      name: 'github',
      icon: () => {
        return <IconGitHub />
      },
      clickAction: () => openInNewTab(links.github_url),
      alt: 'Navigate to github'
    },
    {
      name: 'linkedin',
      icon: () => {
        return <IconLinkedIn />
      },
      clickAction: () => openInNewTab(links.linkedin_url),
      alt: 'Navigate to linked in'
    },
  ]

  return (
    <div className={props.containerStyle}>
      {socials.map((item, index) => {
        return (
          <div
            key={index}
            className="socialsIcon"
            alt={item.alt}
            onClick={item.clickAction}
          >
            {item.icon()}
          </div>
        )
      })}
      <div className="socialsBottomIcon" />
    </div>
  )
}

export default Socials
