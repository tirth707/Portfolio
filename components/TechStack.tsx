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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stacks.map((stack, i) => (
            <div key={i} className="group p-8 border-r last:border-none border-zinc-900">
              <h3 className="text-zinc-500 font-mono text-xs uppercase mb-6">{stack.title}</h3>
              <div className="space-y-4">
                // Change stack.items.map to stack.tools.map
{stack.tools.map((item, idx) => (
  <p key={idx} className="text-2xl font-bold group-hover:scale-110 transition-transform cursor-default">
    {item}
  </p>
))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}