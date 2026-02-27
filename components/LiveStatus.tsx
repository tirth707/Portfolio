"use client";

import { motion } from "framer-motion";

export default function LiveStatus() {
  const focuses = [
    {
      title: "TrueView-AI",
      description: "Building a MERN stack tool with AI capabilities to analyze and verify product review authenticity.",
      status: "In Development"
    },
    {
      title: "Data Structures & Algorithms",
      description: "Executing a strict 60-day Java DSA roadmap across LeetCode and HackerRank to master complex problem-solving.",
      status: "Active Sprint"
    },
    {
      title: "Open Source Contribution",
      description: "Actively contributing to EduAid by optimizing environments and resolving core repository issues for GSoC.",
      status: "Contributing"
    }
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-zinc-500 text-sm font-bold uppercase tracking-widest mb-12">Current Trajectory</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {focuses.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 backdrop-blur-sm"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-[10px] font-mono uppercase tracking-wider border border-green-500/20">
                  {item.status}
                </span>
              </div>
              <p className="text-zinc-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}