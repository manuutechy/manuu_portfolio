import type { MetadataRoute } from 'next'
import { siteUrl } from './lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const routes: { path: string; priority: number }[] = [
    { path: '', priority: 1 },
    { path: '/about', priority: 0.9 },
    { path: '/munchify', priority: 0.9 },
    { path: '/cyzora', priority: 0.8 },
    { path: '/zyranet', priority: 0.8 },
  ]
  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: route.priority,
  }))
}
