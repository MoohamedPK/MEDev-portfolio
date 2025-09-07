import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className=" bg-sand">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <div className="h-screen bg-white"></div>
    </main>
  );
}
