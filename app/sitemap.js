const siteUrl = 'https://ostraszynski.com'

export const dynamic = 'force-static'

export default function sitemap() {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
