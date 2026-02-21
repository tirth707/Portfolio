"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

 useEffect(() => {
    const animation = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    
    // Returning an explicit cleanup function resolves ts(2345)
    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="h-screen w-[400vw] flex flex-row relative bg-zinc-900">
          <div className="h-screen w-screen flex items-center justify-center">
            <h2 className="text-9xl font-bold uppercase tracking-tighter">Tools</h2>
          </div>
          <div className="h-screen w-screen flex items-center justify-center bg-white text-black">
            <h3 className="text-7xl font-bold">MERN Stack</h3>
          </div>
          <div className="h-screen w-screen flex items-center justify-center">
            <h3 className="text-7xl font-bold">REST APIs</h3>
          </div>
          <div className="h-screen w-screen flex items-center justify-center bg-zinc-800">
            <h3 className="text-7xl font-bold">Firebase</h3>
          </div>
        </div>
      </div>
    </section>
  );
}