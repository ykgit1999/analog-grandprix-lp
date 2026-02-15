"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  /** Subtle zoom-in from slightly smaller */
  scale?: boolean;
}

const directionOffset = {
  up: { y: 50 },
  down: { y: -50 },
  left: { x: 60 },
  right: { x: -60 },
};

export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className,
  scale = false,
}: ScrollRevealProps) {
  const offset = directionOffset[direction];

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...offset,
        ...(scale ? { scale: 0.95 } : {}),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        ...(scale ? { scale: 1 } : {}),
      }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
