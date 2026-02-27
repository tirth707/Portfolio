"use client";

import { motion } from "framer-motion";

export default function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
      className="w-full block"
    >
      {children}
    </motion.div>
  );
}