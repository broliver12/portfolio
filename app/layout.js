import '../src/App.css'
import '../src/animations/Scroll.css'
import '../src/animations/Animations.css'
import '../src/components/socials/Socials.css'
import '../src/components/professional_experience_tile/JobTile.css'
import '../src/components/image_cube/Cube.css'
import '../src/components/button/Button.css'
import '../src/page_sections/work/WorkSection.css'
import '../src/components/portfolio_tile/ProjectTile.css'
import '../src/components/navbar/Navbar.css'
import '../src/page_sections/projects/ProjectsSection.css'
import '../src/page_sections/contact/ContactSection.css'
import '../src/page_sections/about/AboutSection.css'
import '../src/components/card_surface/CardSurface.css'
import '../src/page_sections/intro/LandingSection.css'
import '../src/page_sections/education/EducationSection.css'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ostraszynski.com'
const fullName = 'Oliver Straszynski'
const shortTitle = 'Oliver Straszynski | Senior Android Engineer'
const description = 'Senior Android engineer focused on Kotlin, ' +
  'Jetpack Compose, AI-enabled product delivery, and scalable ' +
  'mobile architecture.'
const linkedInUrl = 'https://www.linkedin.com/in/ostraszynski/'
const githubUrl = 'https://www.github.com/broliver12/'
const email = 'oliver.strasz@gmail.com'
const googleAnalyticsId = 'G-9VNPKRNBZ2'
const fontAwesomeIntegrity = 'sha384-xxzQGERXS00kBmZW/6qxqJPyxW3UR0BPs' +
  'L4c8ILaIWXva5kFi7TxkIIaMiKtqV1Q'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      'url': siteUrl,
      'name': fullName,
      'description': description,
      'inLanguage': 'en-US',
      'publisher': {
        '@id': `${siteUrl}/#person`,
      },
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      'name': fullName,
      'url': siteUrl,
      'jobTitle': 'Senior Android Engineer',
      'email': `mailto:${email}`,
      'image': `${siteUrl}/img/oliver_headshot.jpg`,
      'sameAs': [linkedInUrl, githubUrl],
      'knowsAbout': [
        'Android',
        'Kotlin',
        'Platform SDKs',
        'Jetpack Compose',
        'Mobile Architecture',
        'AI-assisted Development',
      ],
      'worksFor': {
        '@id': `${siteUrl}/#organization-league`,
      },
    },
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization-league`,
      'name': 'League Inc',
      'url': 'https://league.com/',
    },
  ],
}

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: shortTitle,
    template: '%s | Oliver Straszynski',
  },
  description,
  icons: {
    icon: [
      {url: '/icons/favicon.ico'},
      {url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png'},
      {url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png'},
    ],
    apple: [
      {url: '/icons/apple-touch-icon.png', sizes: '180x180'},
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/icons/safari-pinned-tab.svg',
        color: '#07041d',
      },
    ],
  },
  manifest: '/icons/site.webmanifest',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: shortTitle,
    description,
    siteName: fullName,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: shortTitle,
    description,
  },
  robots: {
    'index': true,
    'follow': true,
    'googleBot': {
      'index': true,
      'follow': true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'technology',
}

export const viewport = {
  themeColor: '#121419',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/theme.css" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.13.1/css/all.css"
          integrity={fontAwesomeIntegrity}
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Script
          src={
            'https://www.googletagmanager.com/gtag/js?id=' +
            googleAnalyticsId
          }
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
        {children}
      </body>
    </html>
  )
}
