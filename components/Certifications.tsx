"use client";

import { motion } from "framer-motion";

export default function Certifications() {
  const certs = [
    "AWS Academy Graduate",
    "NPTEL Computer Networks (Elite)",
    "ISC2 Certified in Cybersecurity (Preparing)",
    "Google Data Analytics",
    "Oracle Java Foundations"
  ];

  return (
    <section className="py-20 bg-black overflow-hidden border-y border-white/5">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex whitespace-nowrap gap-20"
      >
        {[...certs, ...certs].map((cert, i) => (
          <span key={i} className="text-4xl md:text-6xl font-bold text-zinc-800 uppercase italic">
            {cert}
          </span>
        ))}
      </motion.div>
    </section>
  );
}