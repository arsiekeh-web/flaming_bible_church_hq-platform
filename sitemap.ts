import { MetadataRoute } from 'next'

// TODO: replace with the real domain once purchased — must match the
// SITE_URL in app/layout.tsx.
const SITE_URL = 'https://your-domain-here.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/events', '/events/reverence', '/fellowship', '/sermons']

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))
}
