import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mohamed Hassani - Frontend Developer & Web Expert",
    template: "%s | Mohamed Hassani Portfolio"
  },
  description: "Creative frontend developer specializing in modern web applications. Expert in React, Next.js, TypeScript, and GSAP animations. Building unique digital experiences from concept to code.",
  keywords: [
    "frontend developer",
    "web developer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "portfolio",
    "web design",
    "UI/UX developer",
    "JavaScript developer",
    "GSAP animations",
    "modern web development"
  ],
  authors: [{ name: "Mohamed Hassani" }],
  creator: "Mohamed Hassani",
  publisher: "Mohamed Hassani",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mohamedhassani.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mohamedhassani.dev',
    title: 'Mohamed Hassani - Frontend Developer & Web Expert',
    description: 'Creative frontend developer specializing in modern web applications. Expert in React, Next.js, TypeScript, and GSAP animations.',
    siteName: 'Mohamed Hassani Portfolio',
    images: [
      {
        url: '/media/my-logo-2.svg',
        width: 1200,
        height: 630,
        alt: 'Mohamed Hassani - Frontend Developer Portfolio Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohamed Hassani - Frontend Developer & Web Expert',
    description: 'Creative frontend developer specializing in modern web applications. Expert in React, Next.js, TypeScript, and GSAP animations.',
    images: ['/media/my-logo-2.svg'],
    creator: '@mohamedhassani',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mohamed Hassani",
    "jobTitle": "Frontend Developer",
    "description": "Creative frontend developer specializing in modern web applications. Expert in React, Next.js, TypeScript, and GSAP animations.",
    "url": "https://mohamedhassani.dev",
    "image": "https://mohamedhassani.dev/media/my-logo-2.svg",
    "sameAs": [
      "https://github.com/MoohamedPK",
      "https://linkedin.com/in/mohamedhassani"
    ],
    "knowsAbout": [
      "Frontend Development",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Web Design",
      "UI/UX",
      "GSAP Animations"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Frontend Developer",
      "description": "Building modern web applications with React, Next.js, and TypeScript"
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/media/my-logo-2.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Contact/>
        <Footer/>
      </body>
    </html>
  );
}
