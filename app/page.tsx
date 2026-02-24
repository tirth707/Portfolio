import Hero from "@/components/Hero";
import AcademicBento from "@/components/AcademicBento";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main className="bg-[#050505] text-white selection:bg-white selection:text-black">
      <Hero />
      
      <div className="flex flex-col gap-y-32 md:gap-y-48 pb-40 px-6 max-w-7xl mx-auto w-full">
        
        <Reveal>
          <AcademicBento />
        </Reveal>

        <Reveal>
          <section className="space-y-12">
            <div className="flex items-center justify-between">
              <h2 className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Featured Work</h2>
              <div className="h-[1px] flex-1 bg-zinc-800 ml-8" />
            </div>
            
            <div className="grid grid-cols-1 gap-10">
              <ProjectCard 
                title="RideOn Mobile"
                tech="React Native • Firebase"
                description="A comprehensive vehicle rental ecosystem featuring OTP-based secure verification and real-time GPS proximity tracking."
                link="#"
              />
              <ProjectCard 
                title="Ranshell Detection"
                tech="Java • Cybersecurity"
                description="Automated ransomware detection system operating at the system level using hash-based monitoring and network isolation protocols."
                link="#"
              />
            </div>
          </section>
        </Reveal>

        <Reveal>
          <TechStack />
        </Reveal>

        <Reveal>
          <Experience />
        </Reveal>

      </div>
      
      <Contact />
    </main>
  );
}