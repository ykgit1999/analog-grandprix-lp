"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useI18n } from "@/lib/i18n";
import historyData from "@/data/history.json";
import type { HistoryMilestone } from "@/types/award";

const history = historyData as HistoryMilestone[];

export function History() {
  const { locale, t } = useI18n();

  return (
    <section id="history" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title={t("沿革", "History", "沿革")}
          subtitle={locale === "ja" ? "Timeline" : locale === "zh" ? "发展历程" : undefined}
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-primary/40 via-gold-primary/20 to-transparent" />

          {history.map((milestone, i) => (
            <ScrollReveal key={milestone.year} delay={i * 0.12} direction={i % 2 === 0 ? "left" : "right"}>
              <div
                className={`relative flex items-start gap-6 mb-10 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold-primary border-2 border-bg-primary z-10" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-bg-card rounded-lg p-5 border border-border-subtle hover:border-border-gold transition-colors"
                  >
                    <span className="text-gold-primary font-serif font-bold text-lg">
                      {milestone.year}
                    </span>
                    <h4 className="font-bold text-text-primary mt-1 mb-2">
                      {locale === "en" ? milestone.titleEn : locale === "zh" ? milestone.titleZh : milestone.title}
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {locale === "en" ? milestone.descriptionEn : locale === "zh" ? milestone.descriptionZh : milestone.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
