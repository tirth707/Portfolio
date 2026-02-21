"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollReveal({ text }: { text: string }) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  return (
    <motion.p
      ref={element}
      style={{ opacity }}
      className="text-4xl md:text-6xl font-bold max-w-5xl leading-tight"
    >
      {text}
    </motion.p>
  );
}