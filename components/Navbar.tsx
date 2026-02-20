"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-black/50 border-b border-white/10"
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter text-white">
          Tirth.
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="https://github.com/yourusername"
          target="_blank"
          className="px-4 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-zinc-200 transition-colors"
        >
          GitHub
        </Link>
      </div>
    </motion.nav>
  );
}