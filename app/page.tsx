import Hero from "@/components/Hero";
import ProjectTerminal from "@/components/ProjectTerminal";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Experience />
      <Skills />
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-20 tracking-tight text-zinc-500">Selected Work</h2>
          <div className="group relative overflow-hidden rounded-2xl bg-zinc-900 aspect-video flex items-center justify-center mb-20 hover:scale-[0.98] transition-transform duration-700">
             <div className="text-center p-10">
                <h3 className="text-3xl font-bold mb-4">RideOn Vehicle Rental</h3>
                <p className="text-zinc-400 max-w-md mx-auto">React Native application with Firebase.</p>
             </div>
          </div>
          <ProjectTerminal />
        </div>
      </section>
      <Contact />
    </main>
  );
}