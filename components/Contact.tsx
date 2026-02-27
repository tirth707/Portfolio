"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-7xl md:text-[12rem] font-bold tracking-tighter mb-12"
      >
        Let's build.
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-lg md:text-2xl font-medium opacity-60">
        <a href="mailto:ptirth2206@gmail.com" className="hover:text-blue-500 transition-colors">
          ptirth2206@gmail.com
        </a>
        <span className="hidden md:block">/</span>
        <span>Vadodara, India</span>
      </div>

      {/* PASTE THE NEW CODE BLOCK HERE */}
      <div className="relative z-[50] flex gap-8 mt-12"> 
        <a 
          href="https://github.com/tirth707" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-xs font-bold uppercase tracking-widest hover:text-blue-500 transition-colors"
        > 
          GitHub
        </a> 
        <a 
          href="https://www.linkedin.com/in/tirth-patel-04881325b/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-xs font-bold uppercase tracking-widest hover:text-blue-500 transition-colors"
        > 
          LinkedIn
        </a> 
      </div>
    </section>
  );
}