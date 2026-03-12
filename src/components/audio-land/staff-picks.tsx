"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { GoldDivider } from "@/components/ui/gold-divider";
import staffPicksData from "@/data/audio-land/staff-picks.json";

export function AudioLandStaffPicks() {
  return (
    <section id="staff-picks" className="relative py-28 px-6 bg-bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="スタッフおすすめ" subtitle="STAFF PICKS" />

        <div className="space-y-8">
          {staffPicksData.map((pick, i) => (
            <ScrollReveal key={pick.id} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
                className="relative p-6 md:p-8 rounded-xl bg-bg-card border border-border-subtle hover:border-gold-primary/20 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Product info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-0.5 text-[10px] tracking-wider text-gold-light/70 border border-gold-primary/20 rounded bg-gold-primary/[0.06]">
                        {pick.category}
                      </span>
                      <span className="text-text-muted text-xs">{pick.brand}</span>
                    </div>

                    <h3 className="font-serif text-xl md:text-2xl font-bold text-text-primary">
                      {pick.product}
                    </h3>

                    <p className="mt-1 text-gold-primary text-sm font-semibold">
                      {pick.price}
                    </p>

                    <GoldDivider className="my-4" />

                    <p className="text-text-secondary text-sm leading-relaxed">
                      {pick.comment}
                    </p>

                    <p className="mt-4 text-gold-light/50 text-xs tracking-wider">
                      &#8212; スタッフ {pick.staffName}
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
