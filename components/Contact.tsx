"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Copy, Check, ArrowUpRight, Send } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("ptirth2206@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative flex flex-col items-center justify-center pt-40 pb-20 overflow-hidden border-t border-white/5 bg-gradient-to-b from-transparent to-zinc-900/20">
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center w-full max-w-7xl px-6"
      >
        <h2 className="text-[15vw] md:text-[12rem] font-bold tracking-tighter leading-none text-white mb-12 hover:scale-[1.02] transition-transform duration-500 cursor-default">
          Let's build.
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-4 mb-20">
          <motion.button
            onClick={handleCopy}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-3 px-8 py-4 rounded-full border backdrop-blur-md transition-all duration-300 ${
              copied 
                ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-400" 
                : "bg-white/5 border-white/10 text-zinc-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            <span className="font-mono text-sm md:text-base tracking-widest">
              ptirth2206@gmail.com
            </span>
            {copied ? <Check size={18} /> : <Copy size={18} />}
          </motion.button>

          <motion.a
            href="mailto:ptirth2206@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold tracking-widest text-sm md:text-base hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            <Send size={18} />
            EMAIL ME
          </motion.a>

          <span className="hidden md:block text-zinc-700 mx-2">/</span>

          <div className="px-8 py-4 rounded-full border border-white/5 bg-transparent text-zinc-400 font-mono text-sm md:text-base tracking-widest cursor-default">
            Vadodara, India
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/10 text-xs font-mono uppercase tracking-widest text-zinc-500">
          <div className="flex gap-8 mb-6 md:mb-0">
            <a 
              href="https://github.com/tirth707" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors group"
            >
              GitHub
              <ArrowUpRight size={14} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
            </a>
            <a 
              href="https://www.linkedin.com/in/tirth-patel-04881325b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors group"
            >
              LinkedIn
              <ArrowUpRight size={14} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
            </a>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Available for new opportunities
          </div>
        </div>
      </motion.div>
    </section>
  );
}