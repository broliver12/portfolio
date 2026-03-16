const normalizePath = (value) => {
  if (!value) return undefined

  try {
    return new URL(value, window.location.origin).pathname
  } catch {
    return value
  }
}

export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return
  }

  window.gtag('event', name, params)
}

export function trackResumeDownload(params = {}) {
  trackEvent('resume_download', {
    file_name: 'oliver_straszynski_resume.pdf',
    ...params,
  })
}

export function trackContactClick(params = {}) {
  trackEvent('contact_click', params)
}

export function trackProjectClick(params = {}) {
  trackEvent('project_click', params)
}

export function trackSectionView(sectionName) {
  trackEvent('section_view', {
    section_name: sectionName,
    page_path: normalizePath(window.location.href),
  })
}
