"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Web Developer Intern",
      company: "CARE Group Sight Solution Pvt. Ltd.",
      period: "Internship Experience",
      description: [
        "Assisted in developing and maintaining web application modules using modern web technologies.",
        "Worked on backend integrations and database operations.",
        "Collaborated within structured development workflows and deadlines.",
        "Gained exposure to software development life cycle (SDLC) practices."
      ]
    }
  ];

  return (
    <section id="experience" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-20 tracking-tight text-zinc-500">Experience</h2>
        
        <div className="space-y-24">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8"
            >
              <div className="md:col-span-4">
                <p className="text-zinc-500 font-mono text-sm mb-2">{exp.period}</p>
                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                <p className="text-zinc-400 mt-1">{exp.company}</p>
              </div>
              
              <div className="md:col-span-8">
                <ul className="space-y-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-zinc-400 text-lg leading-relaxed border-l border-zinc-800 pl-6 hover:border-white transition-colors duration-500">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}