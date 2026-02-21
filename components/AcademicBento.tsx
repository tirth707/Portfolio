"use client";

import { motion } from "framer-motion";

export default function AcademicBento() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* B.Tech Focus */}
        <div className="md:col-span-2 bg-zinc-900 rounded-[3rem] p-12 border border-white/5">
          <h3 className="text-zinc-500 font-mono text-xs uppercase mb-4 tracking-tighter">Current Pursuit</h3>
          <h2 className="text-4xl font-bold">B.Tech in IT</h2>
          <p className="text-zinc-400 mt-4 text-lg">Parul University</p>
          <div className="mt-8 flex items-baseline gap-4">
            <span className="text-7xl font-bold tracking-tighter">7.84</span>
            <span className="text-zinc-500 font-bold uppercase text-sm italic underline underline-offset-8">Current CGPA</span>
          </div>
        </div>

        {/* Diploma Focus */}
        <div className="bg-white text-black rounded-[3rem] p-12 flex flex-col justify-between">
          <div>
            <h3 className="font-mono text-xs uppercase mb-4 opacity-50">Foundation</h3>
            <h2 className="text-2xl font-bold">Diploma in IT</h2>
          </div>
          <div className="mt-10">
            <p className="text-5xl font-bold tracking-tighter text-zinc-400 italic">7.69</p>
            <p className="text-xs font-bold uppercase mt-2">Final CGPA (2021-2024)</p>
          </div>
        </div>

      </div>
    </section>
  );
}