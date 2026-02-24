"use client";

import { motion } from "framer-motion";

export default function ProjectCard({ title, tech, description, link }: any) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="relative overflow-hidden rounded-[2.5rem] bg-zinc-900/40 backdrop-blur-2xl border border-white/10 p-10 md:p-16 flex flex-col justify-end min-h-[400px] group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white font-mono text-xs uppercase tracking-widest mb-6 backdrop-blur-md border border-white/5">
          {tech}
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-8">
          {description}
        </p>
        <a href={link} className="inline-flex items-center gap-3 text-white font-semibold group/link">
          <span>View Project</span>
          <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/link:bg-white group-hover/link:text-black transition-all duration-300">
            ↗
          </span>
        </a>
      </div>
    </motion.div>
  );
}