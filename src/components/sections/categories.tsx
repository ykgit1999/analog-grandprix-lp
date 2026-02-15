"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useI18n } from "@/lib/i18n";
import categoriesData from "@/data/categories.json";
import type { Category } from "@/types/award";

const categories = categoriesData as Category[];

// SVG icons for each category
const categoryIcons: Record<string, ReactNode> = {
  turntable: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <circle cx="24" cy="24" r="4" fill="currentColor" opacity="0.8" />
      <circle cx="24" cy="24" r="1.5" fill="currentColor" />
    </svg>
  ),
  cartridge: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <rect x="14" y="10" width="20" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <line x1="24" y1="34" x2="24" y2="42" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="43" r="1.5" fill="currentColor" />
      <line x1="18" y1="16" x2="30" y2="16" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="18" y1="20" x2="30" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    </svg>
  ),
  tonearm: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="38" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
      <line x1="36" y1="13" x2="14" y2="38" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="40" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  "phono-stage": (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <rect x="6" y="14" width="36" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="24" r="4" stroke="currentColor" strokeWidth="1" />
      <circle cx="32" cy="24" r="4" stroke="currentColor" strokeWidth="1" />
      <line x1="12" y1="38" x2="12" y2="42" stroke="currentColor" strokeWidth="1.5" />
      <line x1="36" y1="38" x2="36" y2="42" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  "tube-amp": (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <rect x="6" y="20" width="36" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="16" cy="14" rx="4" ry="7" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="32" cy="14" rx="4" ry="7" stroke="currentColor" strokeWidth="1.5" />
      <line x1="16" y1="7" x2="16" y2="10" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="32" y1="7" x2="32" y2="10" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    </svg>
  ),
  accessory: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
      <path d="M24 12L28 20H20L24 12Z" fill="currentColor" opacity="0.6" />
      <circle cx="24" cy="30" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
};

export function Categories() {
  const { locale, t } = useI18n();

  return (
    <section id="categories" className="py-24 md:py-32 bg-bg-secondary">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          title={t("製品カテゴリー", "Product Categories", "产品类别")}
          subtitle={locale === "ja" ? "Product Categories" : locale === "zh" ? "评选范围" : undefined}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.id} delay={i * 0.08} scale>
              <motion.a
                href="#awards"
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="block bg-bg-card rounded-xl p-6 border border-border-subtle hover:border-border-gold transition-all duration-300 text-center group"
              >
                <div className="text-gold-primary/70 group-hover:text-gold-light transition-colors flex justify-center mb-4">
                  {categoryIcons[cat.id]}
                </div>
                <h3 className="font-serif text-base font-bold text-text-primary mb-1">
                  {locale === "zh" ? cat.nameZh : locale === "en" ? cat.nameEn : cat.nameJa}
                </h3>
                {locale === "ja" && (
                  <p className="text-xs text-text-muted tracking-wider uppercase">
                    {cat.nameEn}
                  </p>
                )}
                <p className="mt-3 text-xs text-text-secondary leading-relaxed">
                  {locale === "en" ? cat.descriptionEn : locale === "zh" ? cat.descriptionZh : cat.description}
                </p>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
