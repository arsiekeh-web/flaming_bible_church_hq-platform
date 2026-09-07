import { MetadataRoute } from 'next'

const BASE_URL = 'https://flaming-bible-church-hq.org'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/events', '/sermons', '/fellowship']

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
