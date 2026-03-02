"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Noise from "@/components/Noise";
import SpotlightCard from "@/components/SpotlightCard";
import SocialDock from "@/components/SocialDock";

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

function VaultCounter({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value]);

  return <span>{count.toFixed(2)}</span>;
}

export default function Home() {
  const skills = [
    { text: "Java", hollow: false },
    { text: "TypeScript", hollow: true },
    { text: "React Native", hollow: false },
    { text: "MongoDB", hollow: true },
    { text: "Express.js", hollow: false },
    { text: "React", hollow: true },
    { text: "Node.js", hollow: false },
    { text: "Tailwind CSS", hollow: true },
    { text: "Firebase", hollow: false },
    { text: "Data Structures", hollow: true },
    { text: "System Architecture", hollow: false }
  ];
  const marqueeContent = [...skills, ...skills, ...skills, ...skills];

  return (
    <main className="bg-[#050505] text-white min-h-screen selection:bg-white selection:text-black font-sans pb-32 overflow-x-hidden">
      <Noise />
      <Navbar />
      <SocialDock />
      
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        <section id="about" className="min-h-[85vh] flex flex-col items-center justify-center pt-32 pb-16 text-center scroll-mt-32 relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-12 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono tracking-widest uppercase text-zinc-300">Actively Building & Architecting</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-[9.5rem] font-bold tracking-tighter mb-8 leading-none bg-clip-text text-transparent bg-gradient-to-br from-white via-zinc-200 to-zinc-700"
          >
            Tirth Patel
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-3xl text-zinc-400 max-w-4xl mx-auto font-light tracking-tight leading-relaxed"
          >
            Full Stack Software Engineer & B.Tech IT Student at <span className="text-white font-medium drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">Parul University</span>. 
            Engineering high-performance systems across web, mobile, and deep backend infrastructure.
          </motion.p>
        </section>

        <div 
          className="w-[100vw] relative left-1/2 -translate-x-1/2 overflow-hidden border-y border-white/5 bg-zinc-900/30 py-8 mb-40 backdrop-blur-md"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
        >
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
            className="flex w-fit gap-16 font-mono text-2xl uppercase tracking-[0.1em] font-bold items-center"
          >
            {marqueeContent.map((skill, index) => (
              <span key={index} className="whitespace-nowrap flex items-center gap-16 transition-colors duration-300">
                <span className={skill.hollow ? "text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.4)]" : "text-white"}>
                  {skill.text}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
              </span>
            ))}
          </motion.div>
        </div>

        <motion.section 
          id="work"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 scroll-mt-32"
        >
          
          <SpotlightCard variants={item} className="md:col-span-8 flex flex-col justify-between min-h-[320px] ring-1 ring-white/5 p-10">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-mono uppercase tracking-widest mb-6 border border-blue-500/20 shadow-[0_0_15px_-3px_rgba(59,130,246,0.2)]">Web Infrastructure</span>
              <a href="https://github.com/tirth707" target="_blank" rel="noopener noreferrer" className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white flex items-center gap-4 group-hover:scale-[1.02] origin-left transition-all duration-500 w-fit">
                TrueView-AI
                <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-blue-400">↗</span>
              </a>
              <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
                Fake review detection engine leveraging Cloud compute and NLP Sentiment Analysis to scrape, analyze, and generate real-time product Trust Scores.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-8 mt-auto relative z-20">
              {['React.js', 'Node.js', 'Python', 'MongoDB', 'AI Compute'].map(tech => (
                <span key={tech} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default">{tech}</span>
              ))}
            </div>
          </SpotlightCard>

          <SpotlightCard variants={item} className="md:col-span-4 flex flex-col justify-between min-h-[320px] ring-1 ring-white/5 p-10">
            <div>
              <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest mb-6 block">Academic Trajectory</span>
              <div className="space-y-10">
                <div className="group-hover:translate-x-3 transition-transform duration-500">
                  <h4 className="font-bold text-xl text-white">B.Tech in IT</h4>
                  <p className="text-zinc-500 text-sm">Parul University</p>
                  <p className="text-white font-mono text-5xl mt-3 tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] flex items-baseline gap-2">
                    <VaultCounter value={7.84} />
                    <span className="text-lg text-zinc-600 tracking-normal">CGPA</span>
                  </p>
                </div>
                <div className="pt-6 border-t border-white/5 group-hover:translate-x-3 transition-transform duration-500 delay-75">
                  <h4 className="font-bold text-lg text-zinc-300">Diploma in IT</h4>
                  <p className="text-zinc-500 text-xs">Parul Polytechnic</p>
                  <p className="text-zinc-400 font-mono text-3xl mt-2 italic flex items-baseline gap-2">
                    <VaultCounter value={7.69} />
                    <span className="text-sm text-zinc-700 tracking-normal not-italic">CGPA</span>
                  </p>
                </div>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard variants={item} className="md:col-span-4 flex flex-col justify-between min-h-[320px] ring-1 ring-white/5 p-10">
            <div>
              <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest mb-6 block text-white">Systems Engineering</span>
              <a href="https://github.com/tirth707" target="_blank" rel="noopener noreferrer" className="text-3xl font-bold mb-4 flex items-center gap-4 group-hover:scale-[1.02] origin-left transition-transform duration-500 w-fit">
                Ranshell
                <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-white">↗</span>
              </a>
              <p className="text-zinc-400 text-base leading-relaxed max-w-xl">
                Automated ransomware detection system operating at the system level using hash-based monitoring and network isolation protocols.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-8 mt-auto relative z-20">
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 backdrop-blur-md hover:bg-white/10 transition-colors">Java</span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 backdrop-blur-md hover:bg-white/10 transition-colors">Cybersecurity</span>
            </div>
          </SpotlightCard>

          <SpotlightCard variants={item} className="md:col-span-8 flex flex-col justify-between min-h-[320px] ring-1 ring-white/5 p-10">
            <div>
              <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest mb-6 block text-white">Open Source Architecture</span>
              <a href="https://github.com/tirth707" target="_blank" rel="noopener noreferrer" className="text-3xl font-bold mb-4 flex items-center gap-4 group-hover:scale-[1.02] origin-left transition-transform duration-500 w-fit">
                Educational Platform AI
                <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-white">↗</span>
              </a>
              <p className="text-zinc-400 text-base leading-relaxed max-w-xl">
                Optimized application performance by reducing load times, implementing route-based code splitting, and engineering interactive UI elements for a major open-source learning initiative.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-8 mt-auto relative z-20">
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 backdrop-blur-md hover:bg-white/10 transition-colors">React.js</span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 backdrop-blur-md hover:bg-white/10 transition-colors">Performance Optimization</span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 backdrop-blur-md hover:bg-white/10 transition-colors">Open Source</span>
            </div>
          </SpotlightCard>

          <SpotlightCard variants={item} className="md:col-span-6 flex flex-col justify-between min-h-[320px] ring-1 ring-white/5 p-10">
            <div>
              <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest mb-6 block text-white">Mobile Architecture</span>
              <a href="https://github.com/tirth707" target="_blank" rel="noopener noreferrer" className="text-3xl font-bold mb-4 flex items-center gap-4 group-hover:scale-[1.02] origin-left transition-transform duration-500 w-fit">
                RideOn Mobile
                <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-white">↗</span>
              </a>
              <p className="text-zinc-400 text-base leading-relaxed max-w-3xl">
                Cross-platform vehicle rental ecosystem architected with OTP secure verification and deeply integrated GPS proximity tracking.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-8 mt-auto relative z-20">
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 backdrop-blur-md hover:bg-white/10 transition-colors">React Native</span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 backdrop-blur-md hover:bg-white/10 transition-colors">Firebase Auth</span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 backdrop-blur-md hover:bg-white/10 transition-colors">Google Maps</span>
            </div>
          </SpotlightCard>

          <SpotlightCard variants={item} className="md:col-span-6 flex flex-col justify-between min-h-[320px] ring-1 ring-white/5 p-10">
            <div>
              <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest mb-6 block text-white">Hardware Integration</span>
              <a href="https://github.com/tirth707" target="_blank" rel="noopener noreferrer" className="text-3xl font-bold mb-4 flex items-center gap-4 group-hover:scale-[1.02] origin-left transition-transform duration-500 w-fit">
                Smart GPS Alarm
                <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-white">↗</span>
              </a>
              <p className="text-zinc-400 text-base leading-relaxed max-w-3xl">
                Location-based alert application that interfaces directly with device hardware telemetry to trigger precision geofenced notifications.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-8 mt-auto relative z-20">
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 backdrop-blur-md hover:bg-white/10 transition-colors">Java</span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 backdrop-blur-md hover:bg-white/10 transition-colors">Geofencing</span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 backdrop-blur-md hover:bg-white/10 transition-colors">Location Services</span>
            </div>
          </SpotlightCard>

        </motion.section>
      </div>

      <Contact />
    </main>
  );
}