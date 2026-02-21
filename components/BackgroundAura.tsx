"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundAura() {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <motion.div
      style={{ rotate }}
      className="fixed top-[-10%] left-[-10%] w-[120vw] h-[120vh] z-[-1] opacity-20 pointer-events-none"
    >
      <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-blue-500/30 rounded-full blur-[12rem]" />
      <div className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] bg-purple-500/20 rounded-full blur-[10rem]" />
    </motion.div>
  );
}