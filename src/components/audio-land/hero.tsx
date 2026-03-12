"use client";

import { motion } from "framer-motion";
import storeData from "@/data/audio-land/store.json";

export function AudioLandHero() {
  return (
    <section className="al-hero">
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo */}
        <div className="al-hero-logo">
          <span className="al-hero-logo-ruby">オーディオランド</span>
          <span className="al-hero-logo-name">Audio Land</span>
          <span className="al-hero-logo-sub">{storeData.tagline}</span>
        </div>

        {/* Catchcopy */}
        <motion.p
          className="al-hero-catchcopy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {storeData.catchcopy}
        </motion.p>

        {/* Divider */}
        <motion.div
          className="al-hero-divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        />

        {/* Main copy */}
        <motion.h1
          className="al-hero-main"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {storeData.mainCopy}
        </motion.h1>

        {/* Divider */}
        <motion.div
          className="al-hero-divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        />

        {/* Sub copy */}
        <motion.p
          className="al-hero-subcopy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          {storeData.subCopy.split("の")[0]}の
          <span className="al-hero-highlight">
            {storeData.subCopy.split("の").slice(1).join("の")}
          </span>
        </motion.p>
      </motion.div>
    </section>
  );
}
