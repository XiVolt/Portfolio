import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tristan-bras.dev'

  // Liste des projets avec leurs slugs
  const projects = [
    'biosymphonie',
    'echecs',
    'bomberman',
    'procyon',
    'algorithmes-tri',
    'base-de-donnees',
    'portfolio-nextjs',
    'volturacode-website',
    'jeu-c',
    'onlyfoot',
    'lensymphony-java',
    'lensymphony-php',
    'marathon-web-blues',
  ]

  const projectUrls = projects.map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...projectUrls,
  ]
}

