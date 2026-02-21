import Hero from "@/components/Hero";
import About from "@/components/About";
import CertificationGrid from "@/components/CertificationGrid";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import ProjectTerminal from "@/components/ProjectTerminal";
import AnimeSection from "@/components/AnimeSection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <About />
      <CertificationGrid />
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="p-10 rounded-[3rem] border border-white/5 bg-zinc-900/30">
          <h3 className="text-2xl font-bold mb-4 italic">Academic Foundation</h3>
          <p className="text-zinc-400">
            Before my B.Tech, I completed a Diploma in IT at Parul Polytechnic with a 7.69 CGPA.
          </p>
        </div>
      </section>
      <Experience />
      <Skills />
      <AnimeSection />
      <ProjectTerminal />
      <Contact />
    </main>
  );
}