import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl">
          Patel Tirth Bhavesh
        </h1>
        <p className="mt-4 text-zinc-400 text-lg sm:text-xl">
          Information Technology & Full Stack Developer
        </p>
      </div>
    </main>
  );
}