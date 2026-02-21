"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="py-32 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-zinc-500 text-sm font-bold uppercase tracking-widest mb-20">Professional Experience</h2>
        <div className="group border-t border-zinc-800 py-16 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h3 className="text-2xl font-bold">Web Developer Intern</h3>
            <p className="text-zinc-500 mt-1">CARE Group Sight Solution Pvt. Ltd.</p>
          </div>
          <div className="md:col-span-8">
            <ul className="space-y-4 text-zinc-400 text-lg">
              <li className="flex gap-4"><span>—</span> Assisted in maintaining web application modules.</li>
              <li className="flex gap-4"><span>—</span> Handled backend integration and database tasks.</li>
              <li className="flex gap-4"><span>—</span> Collaborated in a structured software development life cycle (SDLC).</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}