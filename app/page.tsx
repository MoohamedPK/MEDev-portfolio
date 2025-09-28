import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohamed Hassani - Frontend Developer & Web Expert",
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
    "modern web development",
    "Mohamed Hassani"
  ],
  openGraph: {
    title: "Mohamed Hassani - Frontend Developer & Web Expert",
    description: "Creative frontend developer specializing in modern web applications. Expert in React, Next.js, TypeScript, and GSAP animations.",
    url: "https://mohamedhassani.dev",
    siteName: "Mohamed Hassani Portfolio",
    images: [
      {
        url: "/media/my-logo-2.svg",
        width: 1200,
        height: 630,
        alt: "Mohamed Hassani - Frontend Developer Portfolio Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Hassani - Frontend Developer & Web Expert",
    description: "Creative frontend developer specializing in modern web applications. Expert in React, Next.js, TypeScript, and GSAP animations.",
    images: ["/media/my-logo-2.svg"],
  },
  alternates: {
    canonical: "https://mohamedhassani.dev",
  },
};

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="bg-text min-h-screen">
        <section id="hero" className="relative" aria-label="Hero section">
          <Hero />
        </section>

        <section id="about" className="py-18 sm:py-20 md:py-20 lg:py-24" aria-label="About section">
          <About />
        </section>

        <section id="projects" className="relative" aria-label="Projects section">
          <Projects />
        </section>
      </main>
    </>
  );
}
