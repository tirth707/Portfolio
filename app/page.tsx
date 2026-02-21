import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import ProjectTerminal from "@/components/ProjectTerminal";
import AnimeSection from "@/components/AnimeSection";
import Contact from "@/components/Contact";
import MagneticButton from "@/components/MagneticButton";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <About />
      
      {/* Resume Section */}
      <div className="flex justify-center py-10">
        <MagneticButton>
          <a 
            href="/Tirth_resume-2.pdf" 
            target="_blank" 
            className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-110 transition-transform"
          >
            View Full Resume
          </a>
        </MagneticButton>
      </div>

      <Experience />
      <Skills />
      <AnimeSection />

      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-20 tracking-tight text-zinc-500 text-center uppercase">Selected Work</h2>
          
          {/* Detailed RideOn Card */}
          <div className="mb-20 p-1 rounded-[3rem] bg-gradient-to-b from-zinc-700 to-transparent">
            <div className="bg-black rounded-[2.9rem] p-12 overflow-hidden relative">
              <h3 className="text-5xl font-bold mb-4">RideOn Mobile</h3>
              <p className="text-zinc-400 text-xl max-w-xl mb-8">
                A cross-platform vehicle rental app built with React Native and Firebase. 
                Features OTP-based verification and GPS proximity tracking.
              </p>
              <div className="flex gap-4">
                {["React Native", "Firebase", "REST APIs"].map((tech) => (
                  <span key={tech} className="px-4 py-1 border border-zinc-800 rounded-full text-xs font-mono">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          <ProjectTerminal />
        </div>
      </section>

      <Contact />
    </main>
  );
}