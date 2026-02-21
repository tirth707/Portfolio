import Hero from "@/components/Hero";
import ProjectGallery from "@/components/ProjectGallery";
import BackgroundAura from "@/components/BackgroundAura";
import AcademicBento from "@/components/AcademicBento";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import ProjectTerminal from "@/components/ProjectTerminal";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-black text-white relative">
      <BackgroundAura />
      <Hero />
      <section className="py-20 text-center px-6">
        <h2 className="text-zinc-500 font-mono text-sm uppercase tracking-[0.5em] mb-4">
          Core Competencies
        </h2>
        <p className="text-2xl font-light text-zinc-300 max-w-3xl mx-auto">
          Frontend, Backend integration, and Database management.
        </p>
      </section>
      <AcademicBento />
      <Experience />
      <Skills />
      <ProjectGallery />
      <ProjectTerminal />
      <Contact />
    </main>
  );
}