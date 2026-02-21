import Hero from "@/components/Hero";
import ToolTicker from "@/components/ToolTicker";
import AcademicBento from "@/components/AcademicBento";
import ScrollReveal from "@/components/ScrollReveal";
import Experience from "@/components/Experience";
import CertificationGrid from "@/components/CertificationGrid";
import ProjectTerminal from "@/components/ProjectTerminal";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <ToolTicker />
      
      <section className="py-40 px-6 flex justify-center text-center">
        <ScrollReveal text="Building cross-platform mobile apps and REST-integrated systems." />
      </section>

      <AcademicBento />
      <Experience />
      <CertificationGrid />
      <ProjectTerminal />
      <Contact />
    </main>
  );
}