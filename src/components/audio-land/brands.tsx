"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import brandsData from "@/data/audio-land/brands.json";

const categoryIcons: Record<string, string> = {
  turntable: "◎",
  cartridge: "◇",
  amplifier: "△",
  "tube-amp": "◆",
  tonearm: "─",
};

export function AudioLandBrands() {
  const featuredBrands = brandsData.filter((b) => b.featured);

  return (
    <section id="products" className="relative py-28 px-6 bg-bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="取扱ブランド" subtitle="BRANDS" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredBrands.map((brand, i) => (
            <ScrollReveal key={brand.id} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group relative p-6 rounded-xl bg-bg-card border border-border-subtle hover:border-gold-primary/30 transition-colors duration-300"
              >
                {/* Category icon */}
                <span className="absolute top-4 right-4 text-gold-primary/30 text-lg">
                  {categoryIcons[brand.category] || "●"}
                </span>

                {/* Country badge */}
                <span className="inline-block px-2 py-0.5 text-[10px] tracking-wider text-gold-light/60 border border-gold-primary/15 rounded bg-gold-primary/[0.04] mb-4">
                  {brand.country}
                </span>

                {/* Brand name */}
                <h3 className="font-serif text-2xl font-bold text-text-primary group-hover:text-gold-light transition-colors duration-300">
                  {brand.name}
                </h3>

                {/* Description */}
                <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                  {brand.description}
                </p>

                {/* Bottom accent line */}
                <div className="mt-5 h-px bg-gradient-to-r from-gold-primary/40 via-gold-primary/10 to-transparent" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Other brands mention */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-text-muted text-sm">
              その他、
              {brandsData
                .filter((b) => !b.featured)
                .map((b) => b.name)
                .join("、")}
              など多数のブランドをお取り扱いしています。
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
