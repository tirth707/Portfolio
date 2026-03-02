"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  const navItems = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className="fixed top-8 left-0 w-full flex justify-center z-[9999]">
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-10 px-10 py-4 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl"
      >
        <div className="text-white font-bold tracking-tighter uppercase text-sm">Tirth Patel</div>
        <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="hover:text-white transition-colors">
              {item.name}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}