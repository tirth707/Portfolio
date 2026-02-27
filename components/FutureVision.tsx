"use client";

import { motion } from "framer-motion";

export default function FutureVision() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          whileHover={{ scale: 0.99 }}
          className="relative overflow-hidden p-16 rounded-[3rem] border border-white/10 bg-zinc-900/20 backdrop-blur-2xl flex flex-col items-center text-center group"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-700" />
          <span className="text-blue-400 font-mono text-xs uppercase tracking-widest mb-6">Long-Term Trajectory</span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tighter">Master's in Germany</h2>
          <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed">
            Structuring my current B.Tech foundation and technical skills to pursue an advanced IT Master's degree in Germany, expanding my engineering perspective to a global scale.
          </p>
        </motion.div>
      </div>
    </section>
  );
}