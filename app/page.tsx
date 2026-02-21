import Hero from "@/components/Hero";
import AcademicBento from "@/components/AcademicBento";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import ProjectGallery from "@/components/ProjectGallery";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* 1. Hero: Takes up the full first screen */}
      <Hero />
      
      {/* 2. Content Container: Adds 40 units of space between every section */}
      <div className="flex flex-col gap-y-40 pb-40">
        
        {/* Education Section */}
        <Reveal>
          <section className="px-6">
            <AcademicBento />
          </section>
        </Reveal>

        {/* Tech Stack Section */}
        <Reveal>
          <section className="px-6">
            <TechStack />
          </section>
        </Reveal>

        {/* Professional Journey */}
        <Reveal>
          <section className="px-6">
            <Experience />
          </section>
        </Reveal>

        {/* Projects */}
        <Reveal>
          <section className="px-6">
            <ProjectGallery />
          </section>
        </Reveal>

      </div>

      {/* 3. Footer */}
      <Contact />
    </main>
  );
}