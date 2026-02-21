import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import ProjectGallery from "@/components/ProjectGallery";
import BackgroundAura from "@/components/BackgroundAura";
import AcademicBento from "@/components/AcademicBento";
import Experience from "@/components/Experience";
import ProjectTerminal from "@/components/ProjectTerminal";
import Contact from "@/components/Contact";
import SocialDock from "@/components/SocialDock";

export default function Home() {
  return (
    <main className="bg-black text-white relative">
      <BackgroundAura />
      <SocialDock />
      <Hero />
      <AcademicBento />
      <TechStack />
      <Experience />
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <div className="inline-block px-6 py-2 rounded-full border border-green-500/20 bg-green-500/5 text-green-500 text-sm font-mono">
          NPTEL Computer Networks - Elite Certified
        </div>
      </section>
      <ProjectGallery />
      <ProjectTerminal />
      <Contact />
    </main>
  );
}