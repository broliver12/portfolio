import React from 'react'
import './Socials.css'
import IconGitHub from '../icon/IconGithub'
import IconLinkedIn from '../icon/IconLinkedin'
import li from '../content/ExternalLinks.js'

/**
 * Social Media Icons
 *
 * Bottom Left (Desktop) or Page Bottom (Mobile)
 *
 * @return {Socials}
 */
function Socials() {
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
    <div className="socialsWrapper">
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
