"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 tracking-tight text-zinc-500 text-center">Identity</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Education Card */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-2 p-10 rounded-3xl bg-zinc-900/50 border border-white/5 flex flex-col justify-between"
          >
            <div>
              <p className="text-zinc-500 font-mono text-sm uppercase mb-4">Education</p>
              <h3 className="text-3xl font-bold">B.Tech Information Technology</h3>
              <p className="text-xl text-zinc-400 mt-2">Parul Institute of Engineering and Technology</p>
            </div>
            <div className="mt-12">
              <span className="text-6xl font-bold tracking-tighter">7.84 CGPA</span>
              <p className="text-zinc-500 mt-2 italic">Consistently maintaining a strong academic record.</p>
            </div>
          </motion.div>

          {/* Quick Stats Card */}
          <div className="space-y-6">
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="p-8 rounded-3xl bg-white text-black h-1/2 flex flex-col justify-center"
            >
              <p className="text-sm font-bold uppercase mb-2">Location</p>
              <p className="text-2xl font-bold italic text-zinc-600 underline underline-offset-4 decoration-black/20">Vadodara, India</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="p-8 rounded-3xl bg-zinc-900 border border-white/5 h-1/2 flex flex-col justify-center"
            >
              <p className="text-sm text-zinc-500 font-mono uppercase mb-2">Status</p>
              <p className="text-2xl font-bold">6th Semester</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}