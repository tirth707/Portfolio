"use client";

import { motion } from "framer-motion";

export default function TechStack() {
  const stacks = [
    { title: "Frontend", tools: ["React Native", "Next.js", "Tailwind"] },
    { title: "Backend", tools: ["Spring Boot", "Node.js", "REST APIs"] },
    { title: "Storage", tools: ["MySQL", "MongoDB", "Firebase"] }
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-zinc-500 text-center tracking-tighter">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          // Inside components/TechStack.tsx
{stacks.map((stack, i) => (
  <div key={i} className="p-10 rounded-[2.5rem] bg-zinc-900/30 border border-white/5 backdrop-blur-md">
    <h3 className="text-zinc-500 font-mono text-xs uppercase mb-8 tracking-widest">{stack.title}</h3>
    <div className="space-y-4">
      {/* FIXED: Changed stack.items to stack.tools */}
      {stack.tools.map((tool, idx) => (
        <p key={idx} className="text-2xl font-bold text-white">{tool}</p>
      ))}
    </div>
  </div>
))}
        </div>
      </div>
    </section>
  );
}