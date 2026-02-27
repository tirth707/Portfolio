"use client";

import { motion } from "framer-motion";

export default function BeyondCode() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-zinc-500 text-sm font-bold uppercase tracking-widest mb-12">Beyond The Screen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ y: -5 }}
            className="p-10 rounded-[3rem] bg-gradient-to-br from-zinc-900/50 to-black border border-zinc-800 backdrop-blur-md"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Financial Markets</h3>
            <p className="text-zinc-400 text-lg">
              Actively analyzing and investing across mutual funds, equities, and commodities like gold. Applying data-driven mindsets to personal finance and wealth generation.
            </p>
          </motion.div>
          
          <motion.div
            whileHover={{ y: -5 }}
            className="p-10 rounded-[3rem] bg-gradient-to-bl from-zinc-900/50 to-black border border-zinc-800 backdrop-blur-md"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Competitive Tactics</h3>
            <p className="text-zinc-400 text-lg">
              Strategic execution and split-second decision making honed through high-tier competitive play in Free Fire MAX, perfectly balancing intense focus with digital downtime.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}