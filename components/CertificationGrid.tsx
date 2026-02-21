"use client";

import { motion } from "framer-motion";

export default function CertificationGrid() {
  const certs = [
    { title: "AWS Academy Graduate", org: "Amazon Web Services", status: "Completed" },
    { title: "ISC2 Cybersecurity", org: "ISC2", status: "Preparing" },
    { title: "Computer Networks", org: "NPTEL", status: "Elite" },
    { title: "Android App Dev", org: "Coursera", status: "Completed" }
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-zinc-500 uppercase tracking-widest">Credentials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map((cert, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-white/20 transition-all"
            >
              <p className="text-xs font-mono text-zinc-500 mb-4">{cert.org}</p>
              <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
              <p className="text-sm text-green-500 font-medium">{cert.status}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}