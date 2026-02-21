"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { category: "Frontend", items: ["React", "React Native", "Next.js", "JavaScript"] },
    { category: "Backend", items: ["Spring Boot", "REST APIs", "Node.js"] },
    { category: "Database", items: ["MySQL", "MongoDB", "Firebase"] },
    { category: "Tools & Cloud", items: ["AWS", "Git", "GitHub", "DBMS"] }
  ];

  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-20 tracking-tight text-zinc-500">Technical Arsenal</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {skills.map((skill, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/20 transition-all"
            >
              <h3 className="text-zinc-500 text-sm font-mono mb-4 uppercase tracking-widest">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-xl font-medium text-white">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}