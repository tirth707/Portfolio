"use client";

import { motion } from "framer-motion";

export default function TechStack() {
  const stacks = [
    { title: "Frontend", tools: ["React Native", "Next.js", "Tailwind"] },
    { title: "Backend", tools: ["Spring Boot", "Node.js", "REST APIs"] },
    { title: "Storage", tools: ["MySQL", "MongoDB", "Firebase"] }
  ];

  return (
    <section className="w-full">
      <h2 className="text-zinc-500 text-sm font-bold uppercase tracking-widest mb-12">Tech Stack</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stacks.map((stack, i) => (
          <div key={i} className="p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-md">
            <h3 className="text-zinc-500 font-mono text-xs uppercase mb-8 tracking-widest">{stack.title}</h3>
            <div className="space-y-4">
              {stack.tools.map((item, idx) => (
                <p key={idx} className="text-2xl font-bold text-white">{item}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}