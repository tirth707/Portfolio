"use client";

import { motion } from "framer-motion";

export default function AnimeSection() {
  return (
    <section className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-zinc-500 mb-6 uppercase tracking-widest">Creative Side</h2>
          <h3 className="text-5xl font-bold mb-6">Anime Content Creator</h3>
          <p className="text-zinc-400 text-lg leading-relaxed">
            When I'm not coding REST APIs or Spring Boot systems, I manage a YouTube channel focused on anime. This allows me to experiment with video editing tools like CapCut and master SEO strategies.
          </p>
        </div>
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <div className="h-64 bg-zinc-800 rounded-3xl animate-pulse"></div>
          <div className="h-64 bg-zinc-900 rounded-3xl border border-white/5 flex items-center justify-center">
            <span className="text-zinc-700 font-bold uppercase rotate-90 text-4xl">VIDEO EDITING</span>
          </div>
        </div>
      </div>
    </section>
  );
}