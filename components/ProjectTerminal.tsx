"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProjectTerminal() {
  const [text, setText] = useState("");
  const fullText = "> Ranshell System: Initializing... \n> Status: Monitoring Hash Buffers... \n> Threat Detected: Isolate Network? [Y/N] \n> Action: Network Isolated Successfully.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto my-20 bg-[#0d0d0d] rounded-lg border border-white/10 p-6 font-mono text-sm md:text-base">
      <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
      </div>
      <pre className="text-green-400 leading-relaxed whitespace-pre-wrap">
        {text}
        <span className="animate-pulse">_</span>
      </pre>
      <div className="mt-6">
        <h3 className="text-2xl font-bold text-white">Ranshell Ransomware Detection</h3>
        <p className="text-zinc-500 mt-2">
          System-level security using hash detection and honeypots to trigger automatic isolation.
        </p>
      </div>
    </div>
  );
}