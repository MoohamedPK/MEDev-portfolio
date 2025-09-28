import { MetadataRoute } from 'next'
import { ProjectsData } from '@/constants'
import generateSlug from '@/lib'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mohamedhassani.dev'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
  ]

  // Dynamic project pages
  const projectPages = ProjectsData.map((project) => ({
    url: `${baseUrl}/projects/${generateSlug(project.title)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...projectPages]
}
