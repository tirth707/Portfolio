"use client";

import { motion } from "framer-motion";

export default function ToolTicker() {
  const tools = ["Git", "GitHub", "SQL", "DBMS", "REST APIs", "Spring Boot"];

  return (
    <div className="py-10 bg-zinc-900/50 overflow-hidden flex">
      <motion.div
        animate={{ x: [0, -1035] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="flex gap-20 whitespace-nowrap px-10"
      >
        {[...tools, ...tools].map((tool, i) => (
          <span key={i} className="text-2xl font-mono font-bold text-zinc-500 uppercase">
            {tool}
          </span>
        ))}
      </motion.div>
    </div>
  );
}