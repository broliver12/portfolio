import React, {useEffect, useState} from 'react'
import './ContactSection.css'
import '../../components/image_cube/Cube.css'
import ct from '../../content/ContactContent'
import linksContent from '../../content/ExternalLinks'
import IconLinkedin from '../../icon/IconLinkedin'
import IconGitHub from '../../icon/IconGithub'
import IconForum from '../../icon/IconForum'
import IconMailOutline from '../../icon/IconMailOutline'
import IconQuickreply from '../../icon/IconQuickreply'
import IconLocationOn from '../../icon/IconLocationOn'
import CardSurface from '../../components/card_surface/CardSurface'

const DownloadIcon = () => (
  <svg
    xmlns="https://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

/**
 * Contact Widget
 *
 * @return {ContactSection}
 */
function ContactSection() {
  const content = ct()
  const links = linksContent()
  const linkedinHandle = 'linkedin.com/in/ostraszynski'
  const emailAddress = 'oliver.strasz@gmail.com'

  const [faceIndex, setFaceIndex] = useState(0)
  const [copiedField, setCopiedField] = useState('')
  const [isPageVisible, setIsPageVisible] = useState(
    typeof document === 'undefined' ? true : !document.hidden
  )
  const [isContactVisible, setIsContactVisible] = useState(true)
  const [reduceMotion, setReduceMotion] = useState(false)
  const faceOrder = ['front', 'right', 'back', 'left', 'top', 'bottom']
  const cubeClassName = 'cube show-' + faceOrder[faceIndex]

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => {
      setReduceMotion(mediaQuery.matches)
    }
    updatePreference()
    mediaQuery.addEventListener('change', updatePreference)

    return () => mediaQuery.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    const onVisibilityChange = () => setIsPageVisible(!document.hidden)
    document.addEventListener('visibilitychange', onVisibilityChange)
    return () =>
      document.removeEventListener('visibilitychange', onVisibilityChange)
  }, [])

  useEffect(() => {
    const section = document.getElementById('contact')
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsContactVisible(entry.isIntersecting),
      {threshold: 0.15}
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (reduceMotion || !isPageVisible || !isContactVisible) return
    const interval = setInterval(() => {
      setFaceIndex((prev) => (prev + 1) % faceOrder.length)
    }, 4200)
    return () => clearInterval(interval)
  }, [reduceMotion, isPageVisible, isContactVisible])

  const copyText = async (value, key) => {
    await navigator.clipboard.writeText(value)
    setCopiedField(key)
    setTimeout(() => setCopiedField(''), 1500)
  }

  const openMailClient = (event) => {
    event.preventDefault()
    window.location.href = 'mailto:' + emailAddress
  }

  const cubeImages = [
    '/img/oliver_headshot.jpg',
    '/img/oliver_indi_island.png',
    '/img/oliver_kelsey_nice.png',
    '/img/indi_toronto.png',
    '/img/oliver_italy.png',
    '/img/oliver_st_emilion.png',
  ]

  const actionItems = [
    {
      key: 'resume',
      label: 'Download Resume',
      href: links.resume_url,
      download: 'oliver_straszynski_resume.pdf',
      iconType: 'download',
      primary: true,
    },
    {
      key: 'email',
      label: 'Send Email',
      href: 'mailto:' + emailAddress,
      onClick: openMailClient,
      iconType: 'mail',
    },
    {
      key: 'linkedin',
      label: 'View LinkedIn Profile',
      href: links.linkedin_url,
      target: '_blank',
      rel: 'noreferrer',
      iconType: 'linkedin',
    },
    {
      key: 'github',
      label: 'View GitHub Profile',
      href: links.github_url,
      target: '_blank',
      rel: 'noreferrer',
      iconType: 'github',
    },
  ]

  const renderActionIcon = (iconType) => {
    if (iconType === 'mail') {
      return (
        <span className="actionBtnIcon actionBtnIconSvg" aria-hidden="true">
          <IconMailOutline />
        </span>
      )
    }

    if (iconType === 'linkedin') {
      return (
        <span className="actionBtnIcon actionBtnIconSvg" aria-hidden="true">
          <IconLinkedin />
        </span>
      )
    }

    if (iconType === 'github') {
      return (
        <span className="actionBtnIcon actionBtnIconSvg" aria-hidden="true">
          <IconGitHub />
        </span>
      )
    }

    if (iconType === 'download') {
      return (
        <span className="actionBtnIcon actionBtnIconSvg" aria-hidden="true">
          <DownloadIcon />
        </span>
      )
    }

    return null
  }

  return (
    <div id="contact" className="contactSectionContainer">
      <div className="contactCubeWrapper">
        <div className="scene contactScene">
          <div className={cubeClassName}>
            <div className="cube__face cube__face--front"
              style={{
                backgroundImage: 'url(' + cubeImages[0] + ')',
                backgroundSize: 'cover'
              }} />
            <div className="cube__face cube__face--back"
              style={{
                backgroundImage: 'url(' + cubeImages[1] + ')',
                backgroundSize: 'cover'
              }} />
            <div className="cube__face cube__face--right"
              style={{
                backgroundImage: 'url(' + cubeImages[2] + ')',
                backgroundSize: 'cover'
              }} />
            <div className="cube__face cube__face--left"
              style={{
                backgroundImage: 'url(' + cubeImages[3] + ')',
                backgroundSize: 'cover'
              }} />
            <div className="cube__face cube__face--top"
              style={{
                backgroundImage: 'url(' + cubeImages[4] + ')',
                backgroundSize: 'cover'
              }} />
            <div className="cube__face cube__face--bottom"
              style={{
                backgroundImage: 'url(' + cubeImages[5] + ')',
                backgroundSize: 'cover'
              }} />
          </div>
        </div>
      </div>

      <div className="contactTitleHeader">{content.header}</div>
      <div className="contactParagraph">{content.sub_header}</div>

      <div className="contactGrid">
        <CardSurface className="contactCard">
          <div className="contactCardTitle">
            <span className="contactTitleIcon" aria-hidden="true">
              <IconForum />
            </span>
            <span className='centeredText'>Contact Me</span>
          </div>

          <div className="contactInfoRow">
            <div className="contactInfoTopRow">
              <div className="contactInfoLabelGroup">
                <span className="contactInfoIcon" aria-hidden="true">
                  <IconMailOutline />
                </span>
                <div className="centeredText contactInfoLabel">Email</div>
              </div>
            </div>
            <div className="contactInfoValueRow">
              <div className="contactInfoValue">{emailAddress}</div>
              <button
                type="button"
                className="copyIconBtn"
                onClick={() => copyText(emailAddress, 'email')}
              >
                {copiedField === 'email' ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>

          <div className="contactInfoRow">
            <div className="contactInfoTopRow">
              <div className="contactInfoLabelGroup">
                <span className="contactInfoLinkedinIcon" aria-hidden="true">
                  <IconLinkedin />
                </span>
                <div className="centeredText contactInfoLabel">LinkedIn</div>
              </div>
            </div>
            <div className="contactInfoValueRow">
              <div className="contactInfoValue">{linkedinHandle}</div>
              <button
                type="button"
                className="copyIconBtn"
                onClick={() => copyText(linkedinHandle, 'linkedin')}
              >
                {copiedField === 'linkedin' ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>

          <div className="contactCardNote">
            I&apos;d love to hear about what you&apos;re building, and how I can contribute. Let&apos;s talk!.
          </div>
        </CardSurface>

        <CardSurface className="contactCard">
          <div className="contactCardTitle">
            <span className="contactTitleIcon" aria-hidden="true">
              <IconQuickreply />
            </span>
            <span className='centeredText'>Quick Actions</span>
          </div>

          {actionItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              target={item.target}
              rel={item.rel}
              download={item.download}
              className={
                'actionBtn' + (item.primary ? ' actionBtnPrimary' : '')
              }
              onClick={item.onClick}
            >
              <span className="actionBtnContent">
                {renderActionIcon(item.iconType)}
                <span className="centeredText actionBtnText">{item.label}</span>
              </span>
            </a>
          ))}

          <div className="availabilityBlock">
            <div className="availabilityTitle">
              <span className="availabilityIcon" aria-hidden="true">
                <IconLocationOn />
              </span>
              <span className="centeredText">Availability</span>
            </div>
            <div className="availabilityText">
              Open to new opportunities, both remote and in office.
            </div>
          </div>
        </CardSurface>
      </div>
    </div>
  )
}

export default ContactSection
