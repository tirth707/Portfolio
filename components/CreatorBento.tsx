"use client";

import { motion } from "framer-motion";

export default function CreatorBento() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          whileHover={{ scale: 0.98 }}
          className="bg-red-600/5 border border-red-500/10 p-12 rounded-[3rem] flex flex-col justify-center relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-red-500/20 transition-colors duration-700" />
          <span className="text-red-500 font-mono text-xs uppercase tracking-widest mb-4 z-10">YouTube Creator</span>
          <h2 className="text-6xl font-bold text-white mb-6 z-10 tracking-tighter">100,000+</h2>
          <p className="text-zinc-400 text-lg z-10">Subscribers across multiple channels including "pokemon hindi" and "7sgaming", creating high-engagement AMVs and content.</p>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 0.98 }}
          className="bg-purple-600/5 border border-purple-500/10 p-12 rounded-[3rem] flex flex-col justify-center relative overflow-hidden group"
        >
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 group-hover:bg-purple-500/20 transition-colors duration-700" />
          <span className="text-purple-500 font-mono text-xs uppercase tracking-widest mb-4 z-10">Digital Community</span>
          <h2 className="text-5xl font-bold text-white mb-6 z-10 tracking-tight">memekhabri</h2>
          <p className="text-zinc-400 text-lg z-10">Managing an active Instagram presence, curating viral digital culture, memes, and engaging reels for a growing audience.</p>
        </motion.div>
      </div>
    </section>
  );
}