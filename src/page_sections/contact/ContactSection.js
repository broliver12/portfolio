import React from 'react'
import './ContactSection.css'
import IconGitHub from '../../icon/IconGithub'
import IconLinkedIn from '../../icon/IconLinkedin'
import ct from '../../content/ContactContent'
import li from '../../content/ExternalLinks.js'

/**
 * Contact Widget
 *
 * @return {ContactSection}
 */
function ContactSection() {
  const openInNewTab = (url) => {
    window.open(url, '_blank')
  }

  const socials = [
    {
      name: 'github',
      icon: () => {
        return <IconGitHub />
      },
      clickAction: () => openInNewTab(li.github_url),
    },
    {
      name: 'linkedin',
      icon: () => {
        return <IconLinkedIn />
      },
      clickAction: () =>
        openInNewTab(li.linkein_url),
    },
  ]
  const content = ct()
  return (
    <div id="contact" className="contactSectionContainer">
      <div className="contactTitleHeader">{content.header}</div>
      <div className="contactParagraph">
        {content.sub_header}
      </div>

      <div className="wrap">
        <a
          href={content.mail_to_url}
          rel="noopener noreferrer"
          target="_blank"
          className="outlinedButtonComponent
        sendAnEmailButton">
          {content.cta}
        </a>
      </div>
      <div className="bottomSocialsContainer">
        {socials.map((item, index) => {
          return (
            <div
              key={index}
              className="socialsIcon"
              alt={'Navigate to ' + item.name}
              onClick={item.clickAction}
            >
              {item.icon()}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ContactSection
