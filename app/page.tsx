import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import ProjectTerminal from "@/components/ProjectTerminal";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Certifications />
      <Experience />
      <Education />
      <Skills />
      <Gallery />
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-20 tracking-tight text-zinc-500">Selected Work</h2>
          <ProjectTerminal />
        </div>
      </section>
      <Contact />
    </main>
  );
}