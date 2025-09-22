import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="bg-text min-h-screen">
      <Navbar />

      <section id="hero" className="relative">
        <Hero />
      </section>

      <section id="about" className="py-18 sm:py-20 md:py-20 lg:py-24 ">
        <About />
      </section>

      <section id="projects" className="relative">
        <Projects />
      </section>

      <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24">
        <Contact />
      </section>

      <Footer/>
    </main>
  );
}
