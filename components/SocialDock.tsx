"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function SocialDock() {
  const socials = [
    { icon: <Github size={20} />, href: "https://github.com/tirth707" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/tirth-patel-04881325b" },
    { icon: <Mail size={20} />, href: "mailto:ptirth2206@gmail.com" },
  ];

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[9999]"> 
  <motion.div
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="flex items-center gap-4 p-3 rounded-full bg-zinc-900/50 backdrop-blur-2xl border border-white/10"
  >
    {socials.map((social, i) => (
      <a 
        key={i}
        href={social.href}
        target="_blank" // Required to open LinkedIn in a new tab
        rel="noopener noreferrer"
        className="p-3 rounded-full hover:bg-white hover:text-black transition-all duration-500"
      >
        {social.icon}
      </a>
    ))}
  </motion.div>
</div>
  );
}