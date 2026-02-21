import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import AcademicBento from "@/components/AcademicBento";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import ProjectGallery from "@/components/ProjectGallery";
import ProjectTerminal from "@/components/ProjectTerminal";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-black text-white relative">
      <Hero />
      
      <Reveal>
        <AcademicBento />
      </Reveal>

      <Reveal>
        <section className="py-10 px-6 max-w-7xl mx-auto">
          <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5">
            <h3 className="text-zinc-500 font-mono text-xs mb-4 uppercase">Foundation</h3>
            <p className="text-xl">
              Completed Diploma in IT at Parul Polytechnic with 7.69 CGPA[cite: 38, 40].
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <TechStack />
      </Reveal>

      <Reveal>
        <Experience />
      </Reveal>

      <Reveal>
        <ProjectGallery />
      </Reveal>

      <Reveal>
        <ProjectTerminal />
      </Reveal>

      <Contact />
    </main>
  );
}