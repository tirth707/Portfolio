"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
      });

      gsap.to(textRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        scale: 0.8,
        opacity: 0,
        filter: "blur(10px)",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen flex items-center justify-center bg-black">
      <div ref={textRef} className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
          Patel Tirth
        </h1>
        <p className="mt-6 text-zinc-400 text-xl md:text-2xl font-light">
          B.Tech IT Student @ Parul University
        </p>
      </div>
    </section>
  );
}