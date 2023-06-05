import React, {useState} from 'react'
import './ContactSection.css'
import IconGitHub from '../../icon/IconGithub'
import IconLinkedIn from '../../icon/IconLinkedin'
import ct from '../../content/ContactContent'
import li from '../../content/ExternalLinks.js'
import IconCopiedSuccessfully from '../../icon/IconCopiedSuccessfully'

/**
 * Contact Widget
 *
 * @return {ContactSection}
 */
function ContactSection() {
  const openInNewTab = (url) => {
    window.open(url, '_blank')
  }

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  const [buttonClassName, setButtonClassName] = useState('outlinedButtonComponent copyBtn')

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

      <div className="wrap">
        <a className="textWrapper">
        Reach me by email at
        </a>
        <a className="email">
          oliver.strasz@gmail.com
        </a>
        <c
          onClick={async () => {
            navigator.clipboard.writeText('oliver.strasz@gmail.com')
            setButtonClassName('iconWrapper')
            const revert = async () => {
              await sleep(2000)
              setButtonClassName('outlinedButtonComponent copyBtn')
            }
            if (buttonClassName == 'outlinedButtonComponent copyBtn') {
              revert()
            }
          }}
          className={buttonClassName}>
          {
            (buttonClassName == 'iconWrapper') ? <a className='copySuccessBtn'><IconCopiedSuccessfully/></a> : <>{content.cta}</>
          }
        </c>
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
