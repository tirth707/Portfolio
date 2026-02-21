"use client";

import { motion } from "framer-motion";

export default function ProjectCard({ title, tech, description }: any) {
  return (
    <motion.div 
      whileHover={{ scale: 0.98 }}
      className="relative aspect-video rounded-[3rem] bg-zinc-900 border border-white/5 overflow-hidden p-12 flex flex-col justify-end group"
    >
      <div className="absolute top-12 right-12 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center">→</div>
      </div>
      <h3 className="text-zinc-500 font-mono text-xs uppercase mb-4">{tech}</h3>
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="text-zinc-400 max-w-md">{description}</p>
    </motion.div>
  );
}