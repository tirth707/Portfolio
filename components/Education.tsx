"use client";

export default function Education() {
  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-zinc-500 mb-10">Education</h2>
          <div className="border-l border-zinc-800 pl-8">
            <h3 className="text-2xl font-bold">B.Tech in IT</h3>
            <p className="text-zinc-400 mt-2">Parul University</p>
            <p className="text-white mt-4 text-3xl font-bold">7.84 CGPA</p>
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5">
             <p className="text-zinc-400 leading-relaxed italic">
               "Currently pursuing 6th Semester with a focus on Full Stack Development and Cloud Infrastructure."
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}