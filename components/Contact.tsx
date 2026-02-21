"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <footer id="contact" className="py-40 px-6 bg-white text-black rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-6xl md:text-9xl font-bold tracking-tighter mb-10"
        >
          Let's build.
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-2xl font-medium">
          <a href="mailto:ptirth2206@gmail.com" className="hover:line-through decoration-4 underline-offset-8">
            ptirth2206@gmail.com
          </a>
          <span className="hidden md:block text-zinc-300">/</span>
          <p>Vadodara, India</p>
        </div>
        <div className="mt-20 flex justify-center gap-10 text-zinc-500 uppercase text-sm tracking-widest font-bold">
          <a href="https://github.com/tirth707" target="_blank" className="hover:text-black transition-colors">GitHub</a>
          <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}