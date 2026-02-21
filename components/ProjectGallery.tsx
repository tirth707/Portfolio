"use client";

import { motion } from "framer-motion";

export default function ProjectGallery() {
  const projects = [
    {
      title: "RideOn Mobile",
      tech: "React Native, Firebase",
      details: "OTP-based verification and GPS proximity.",
    },
    {
      title: "Ranshell System",
      tech: "Hash Detection, Honeypot",
      details: "Automatic network isolation for ransomware.",
    },
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -20, rotate: i % 2 === 0 ? 1 : -1 }}
            className="p-12 rounded-[3rem] bg-zinc-900/50 border border-white/10 group cursor-none"
          >
            <h3 className="text-zinc-500 font-mono text-xs uppercase mb-4 tracking-widest">
              {project.tech}
            </h3>
            <h2 className="text-4xl font-bold mb-6 group-hover:text-white transition-colors">
              {project.title}
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">{project.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}