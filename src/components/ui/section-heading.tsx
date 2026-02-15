"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "./scroll-reveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className = "" }: SectionHeadingProps) {
  return (
    <ScrollReveal scale className={`text-center mb-16 ${className}`}>
      <h2 className="font-serif text-3xl md:text-5xl font-bold gold-gradient-text inline-block">
        {title}
      </h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-3 text-text-secondary text-sm tracking-widest uppercase"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 mx-auto w-28 h-px bg-gradient-to-r from-transparent via-gold-primary to-transparent origin-center"
      />
    </ScrollReveal>
  );
}
