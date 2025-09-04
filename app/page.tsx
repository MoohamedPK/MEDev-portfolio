import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="space-y-10 bg-black">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
    </main>
  );
}
