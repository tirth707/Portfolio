"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function SocialDock() {
  const socials = [
    { icon: <Github size={20} />, href: "https://github.com/tirth707" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/tirth-patel-04881325b/" },
    { icon: <Mail size={20} />, href: "mailto:ptirth2206@gmail.com" },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999]">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
        className="flex items-center gap-8 px-8 py-4 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)]"
      >
        {socials.map((social, i) => (
          <motion.a
            key={i}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="text-zinc-400 hover:text-white transition-all duration-300"
          >
            {social.icon}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}