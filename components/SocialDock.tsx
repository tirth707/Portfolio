"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function SocialDock() {
  const socials = [
    { icon: <Github size={20} />, href: "https://github.com/tirth707" },
    { icon: <Linkedin size={20} />, href: "#" },
    { icon: <Mail size={20} />, href: "mailto:ptirth2206@gmail.com" },
  ];

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100]">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-2 p-2 rounded-full bg-zinc-900/50 backdrop-blur-xl border border-white/10"
      >
        {socials.map((social, i) => (
          <MagneticButton key={i}>
            <a 
              href={social.href} 
              target="_blank"
              className="p-3 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              {social.icon}
            </a>
          </MagneticButton>
        ))}
      </motion.div>
    </div>
  );
}