"use client";
import { motion, useScroll } from "framer-motion";

// Inside your RootLayout or a separate component:
export function ScrollBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-white z-[100] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}