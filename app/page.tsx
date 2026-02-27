"use client";

import { motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

// Explicitly typing variants to resolve the TS error
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
      <Navbar />
      
      {/* Dynamic Background Auras */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* About Section - Matches Navbar Link */}
        <section id="about" className="pt-48 pb-24 text-center scroll-mt-32">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-bold tracking-tighter mb-8 leading-none"
          >
            Patel Tirth
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto font-light tracking-tight leading-relaxed"
          >
            Software Engineer & B.Tech IT Student at <span className="text-white font-medium">Parul University</span>. 
            Focusing on the MERN stack and high-performance system architecture.
          </motion.p>
        </section>

        {/* Work Section - Matches Navbar Link */}
        <motion.section 
          id="work"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[240px] scroll-mt-32"
        >
          
          {/* Feature Card: TrueView-AI */}
          <motion.div variants={item} className="md:col-span-8 md:row-span-2 group relative overflow-hidden rounded-[2.5rem] bg-zinc-900/20 border border-white/5 p-10 backdrop-blur-3xl hover:border-white/20 transition-all duration-500 flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-mono uppercase tracking-widest mb-6 border border-blue-500/20">Featured Work</span>
              <h2 className="text-5xl font-bold mb-6 tracking-tight text-white">TrueView-AI</h2>
              <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
                A MERN stack tool integrated with AI to analyze and verify product review authenticity.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-8">
              {['MongoDB', 'Express', 'React', 'Node.js', 'AI'].map(tech => (
                <span key={tech} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300">{tech}</span>
              ))}
            </div>
          </motion.div>

          {/* Feature Card: Academic Profile */}
          <motion.div variants={item} className="md:col-span-4 md:row-span-2 rounded-[2.5rem] bg-zinc-900/20 border border-white/5 p-10 backdrop-blur-3xl flex flex-col justify-between">
            <div>
              <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest mb-6 block">Education</span>
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-xl text-white">B.Tech in IT</h4>
                  <p className="text-zinc-500 text-sm">Parul University</p>
                  <p className="text-white font-mono text-3xl mt-2 tracking-tighter">7.84 CGPA</p>
                </div>
                <div className="pt-6 border-t border-white/5">
                  <h4 className="font-bold text-lg text-zinc-300">Diploma in IT</h4>
                  <p className="text-zinc-500 text-xs">Parul Polytechnic</p>
                  <p className="text-zinc-400 font-mono text-xl mt-1 italic">7.69 CGPA</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature Card: RideOn Mobile */}
          <motion.div variants={item} className="md:col-span-6 md:row-span-2 rounded-[2.5rem] bg-zinc-900/20 border border-white/5 p-10 backdrop-blur-3xl hover:bg-zinc-900/40 transition-all flex flex-col justify-between group">
            <div>
              <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest mb-6 block text-white">Mobile Engineering</span>
              <h3 className="text-3xl font-bold mb-4">RideOn Mobile</h3>
              <p className="text-zinc-400 leading-relaxed">
                Vehicle rental ecosystem with OTP verification and real-time GPS proximity tracking.
              </p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-zinc-300">React Native</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-zinc-300">Firebase</span>
            </div>
          </motion.div>

          {/* Feature Card: Experience */}
          <motion.div variants={item} className="md:col-span-6 md:row-span-2 rounded-[2.5rem] bg-white text-black p-10 flex flex-col justify-between">
            <div>
              <span className="text-black/40 text-[10px] font-mono uppercase tracking-widest mb-6 block">Experience</span>
              <h3 className="text-2xl font-bold">Web Developer Intern</h3>
              <p className="text-black/60 font-medium">CARE Group Sight Solution</p>
              <ul className="mt-6 space-y-3 text-sm font-medium leading-relaxed">
                <li>• Maintained web application modules</li>
                <li>• Handled backend & database tasks</li>
                <li>• Collaborated in structured SDLC</li>
              </ul>
            </div>
          </motion.div>

        </motion.section>
      </div>

      <Contact />
    </main>
  );
}