"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' || 
        target.closest('a') || 
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/30 pointer-events-none z-[10000] mix-blend-difference flex items-center justify-center bg-white/10 backdrop-blur-sm"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        scale: isHovering ? 1.8 : 1,
        backgroundColor: isHovering ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.1)",
        border: isHovering ? "none" : "1px solid rgba(255,255,255,0.3)"
      }}
      transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.5 }}
    />
  );
}