import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className=" bg-black">
      <Navbar />

      <section id="hero" className="py-32">
        <Hero />
      </section>

      <section id="about" className="py-24">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact" className="py-24">
        <Contact />
      </section>
    </main>
  );
}
