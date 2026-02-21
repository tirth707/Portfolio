"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }} 
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference"
    >
      <div className="text-xl font-bold tracking-tighter uppercase">Patel Tirth</div>
      <div className="flex gap-8 text-sm font-medium uppercase tracking-widest opacity-60">
        <a href="#work" className="hover:opacity-100 transition-opacity">Work</a>
        <a href="#about" className="hover:opacity-100 transition-opacity">About</a>
        <a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a>
      </div>
    </motion.nav>
  );
}