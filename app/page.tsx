"use client";

import { motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Noise from "@/components/Noise";
import SpotlightCard from "@/components/SpotlightCard";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export default function Home() {
  return (
    <main className="bg-[#050505] text-white min-h-screen selection:bg-white selection:text-black font-sans pb-32 overflow-x-hidden">
      <Noise />
      <Navbar />
      
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        <section id="about" className="min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-24 text-center scroll-mt-32 relative">
          <motion.h1 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-[10rem] font-bold tracking-tighter mb-8 leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-zinc-600"
          >
            Patel Tirth
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-3xl text-zinc-400 max-w-3xl mx-auto font-light tracking-tight leading-relaxed"
          >
            Software Engineer & B.Tech IT Student at <span className="text-white font-medium drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">Parul University</span>. 
            Focusing on the MERN stack and high-performance system architecture.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Scroll</span>
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent"
            />
          </motion.div>
        </section>

        <motion.section 
          id="work"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[240px] scroll-mt-32"
        >
          
          <SpotlightCard variants={item} className="md:col-span-8 md:row-span-2">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-mono uppercase tracking-widest mb-8 border border-blue-500/20 shadow-[0_0_15px_-3px_rgba(59,130,246,0.2)]">Featured Work</span>
              <h2 className="text-5xl font-bold mb-6 tracking-tight text-white group-hover:scale-[1.02] origin-left transition-transform duration-500">TrueView-AI</h2>
              <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
                A MERN stack tool integrated with AI to analyze and verify product review authenticity.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-8">
              {['MongoDB', 'Express', 'React', 'Node.js', 'AI'].map(tech => (
                <span key={tech} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 backdrop-blur-md">{tech}</span>
              ))}
            </div>
          </SpotlightCard>

          <SpotlightCard variants={item} className="md:col-span-4 md:row-span-2">
            <div>
              <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest mb-8 block">Education</span>
              <div className="space-y-8">
                <div className="group-hover:translate-x-2 transition-transform duration-500">
                  <h4 className="font-bold text-xl text-white">B.Tech in IT</h4>
                  <p className="text-zinc-500 text-sm">Parul University</p>
                  <p className="text-white font-mono text-4xl mt-2 tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">7.84 CGPA</p>
                </div>
                <div className="pt-6 border-t border-white/5 group-hover:translate-x-2 transition-transform duration-500 delay-75">
                  <h4 className="font-bold text-lg text-zinc-300">Diploma in IT</h4>
                  <p className="text-zinc-500 text-xs">Parul Polytechnic</p>
                  <p className="text-zinc-400 font-mono text-xl mt-1 italic">7.69 CGPA</p>
                </div>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard variants={item} className="md:col-span-6 md:row-span-2">
            <div>
              <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest mb-8 block text-white">Mobile Engineering</span>
              <h3 className="text-4xl font-bold mb-4 group-hover:scale-[1.02] origin-left transition-transform duration-500">RideOn Mobile</h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Vehicle rental ecosystem with OTP verification and real-time GPS proximity tracking.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 backdrop-blur-md">React Native</span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 backdrop-blur-md">Firebase</span>
            </div>
          </SpotlightCard>

          <motion.div variants={item} className="md:col-span-6 md:row-span-2 rounded-[2.5rem] bg-zinc-100 text-black p-10 hover:bg-white transition-colors duration-500 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] flex flex-col justify-between group">
            <div>
              <span className="text-black/40 text-[10px] font-mono uppercase tracking-widest mb-8 block font-bold">Experience</span>
              <h3 className="text-3xl font-bold mb-2 group-hover:scale-[1.02] origin-left transition-transform duration-500">Web Developer Intern</h3>
              <p className="text-black/60 font-semibold text-lg">CARE Group Sight Solution</p>
              <ul className="mt-8 space-y-4 text-base font-medium leading-relaxed text-black/80">
                <li className="flex items-start gap-3"><span className="text-black/40">01</span> Maintained web application modules</li>
                <li className="flex items-start gap-3"><span className="text-black/40">02</span> Handled backend & database tasks</li>
                <li className="flex items-start gap-3"><span className="text-black/40">03</span> Collaborated in structured SDLC</li>
              </ul>
            </div>
          </motion.div>

        </motion.section>
      </div>

      <Contact />
    </main>
  );
}