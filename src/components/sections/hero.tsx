"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const logoY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const logoScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const taglineY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const taglineOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const bgOrbScale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);

  const taglineLines = t(
    "アナログの本質を追求する。\n真に推薦すべき銘機を選出する。",
    "Pursuing the essence of analog.\nSelecting truly exceptional equipment.",
    "追求模拟音频的本质。\n甄选真正值得推荐的铭机。"
  ).split("\n");

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs — parallax */}
      <motion.div className="absolute inset-0" style={{ scale: bgOrbScale }}>
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold-primary/5 blur-3xl"
          style={{ animation: "pulse-gold 4s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gold-dark/5 blur-3xl"
          style={{ animation: "pulse-gold 4s ease-in-out infinite 2s" }}
        />
      </motion.div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 pt-16">
        {/* Logo image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ y: logoY, scale: logoScale }}
          className="mb-10"
        >
          <Image
            src="/images/logo-alt.jpg"
            alt="analog Grand Prix 2025"
            width={600}
            height={450}
            priority
            className="mx-auto rounded-lg shadow-2xl shadow-gold-primary/10"
          />
        </motion.div>

        {/* Tagline — large, cinematic, gold */}
        <motion.div
          style={{ y: taglineY, opacity: taglineOpacity }}
          className="mt-10 max-w-3xl mx-auto"
        >
          {taglineLines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.7 + i * 0.25,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="font-serif text-2xl md:text-4xl lg:text-[2.75rem] font-bold leading-snug tracking-wide gold-gradient-text"
            >
              {line}
            </motion.p>
          ))}
          {/* Decorative line under tagline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-6 mx-auto w-32 h-px bg-gradient-to-r from-transparent via-gold-primary/60 to-transparent origin-center"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-20"
        >
          <p className="text-text-muted text-xs tracking-widest mb-3">SCROLL</p>
          <div
            className="mx-auto w-5 h-8 rounded-full border border-gold-primary/30 flex items-start justify-center p-1"
          >
            <div
              className="w-1 h-2 rounded-full bg-gold-primary/60"
              style={{ animation: "bounce-down 2s ease-in-out infinite" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
