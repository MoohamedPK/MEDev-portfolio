import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mohamed Hassani - Frontend Developer Portfolio',
    short_name: 'Mohamed Hassani',
    description: 'Creative frontend developer specializing in modern web applications. Expert in React, Next.js, TypeScript, and GSAP animations.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/media/my-logo-2.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any maskable'
      },
      {
        src: '/favicon.ico',
        sizes: '16x16 32x32',
        type: 'image/x-icon'
      }
    ],
    categories: ['portfolio', 'developer', 'web'],
    lang: 'en',
    orientation: 'portrait-primary',
    scope: '/',
  }
}
