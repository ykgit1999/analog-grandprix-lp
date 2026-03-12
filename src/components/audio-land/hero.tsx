"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function AudioLandHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background — vinyl record inspired concentric rings */}
      <motion.div className="absolute inset-0" style={{ scale: bgScale }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#080C16] via-bg-primary to-bg-secondary" />
        {/* Concentric circles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-primary/[0.06]"
            style={{
              width: `${(i + 1) * 200}px`,
              height: `${(i + 1) * 200}px`,
            }}
          />
        ))}
        {/* Glow orbs */}
        <div
          className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-gold-primary/[0.04] blur-[100px]"
          style={{ animation: "pulse-gold 5s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-gold-dark/[0.05] blur-[80px]"
          style={{ animation: "pulse-gold 5s ease-in-out infinite 2.5s" }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {/* PHILE WEB badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-1.5 text-xs tracking-[0.2em] text-gold-light/80 border border-gold-primary/20 rounded-full bg-gold-primary/[0.05]">
            PHILE WEB SPECIAL
          </span>
        </motion.div>

        {/* Store name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider gold-gradient-text"
        >
          オーディオランド
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-3 text-gold-light/50 text-sm tracking-[0.3em] uppercase"
        >
          Audio Land
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-gold-primary/60 to-transparent origin-center"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          className="mt-8 font-serif text-xl md:text-3xl lg:text-4xl font-bold leading-relaxed gold-shimmer"
        >
          音楽の感動を、もっと深く。
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-6 text-text-secondary text-sm md:text-base max-w-lg mx-auto leading-relaxed"
        >
          アナログオーディオ専門店として、
          <br className="hidden md:block" />
          本物の音をお届けします。
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#products"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold tracking-wider bg-gradient-to-r from-gold-dark via-gold-primary to-gold-dark text-bg-primary rounded-full hover:shadow-lg hover:shadow-gold-primary/20 transition-all duration-300"
          >
            取扱ブランド
          </a>
          <a
            href="#access"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold tracking-wider text-gold-light border border-gold-primary/30 rounded-full hover:bg-gold-primary/10 transition-all duration-300"
          >
            店舗情報
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="mt-20"
        >
          <p className="text-text-muted text-xs tracking-widest mb-3">SCROLL</p>
          <div className="mx-auto w-5 h-8 rounded-full border border-gold-primary/30 flex items-start justify-center p-1">
            <div
              className="w-1 h-2 rounded-full bg-gold-primary/60"
              style={{ animation: "bounce-down 2s ease-in-out infinite" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
