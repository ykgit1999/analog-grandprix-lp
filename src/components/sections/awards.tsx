"use client";

import { useState, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ProductCard } from "@/components/ui/product-card";
import {
  getAvailableYears,
  getAwardsByYear,
  getUniqueAwardTypes,
} from "@/lib/awards";
import { AWARD_TYPE_LABELS } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";
import type { AwardType } from "@/types/award";

export function Awards() {
  const { locale, t } = useI18n();
  const years = getAvailableYears();
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [selectedAwardType, setSelectedAwardType] = useState<AwardType | "all">("all");

  const yearlyAwards = useMemo(
    () => getAwardsByYear(selectedYear),
    [selectedYear]
  );

  const products = yearlyAwards?.products ?? [];
  const availableTypes = getUniqueAwardTypes(products);

  const filteredProducts = useMemo(() => {
    if (selectedAwardType === "all") return products;
    return products.filter((p) => p.awardType === selectedAwardType);
  }, [products, selectedAwardType]);

  return (
    <section id="awards" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title={t("受賞製品", "Award Winners", "获奖产品")}
          subtitle={locale === "ja" ? "Award Winners" : locale === "zh" ? "历届获奖" : undefined}
        />

        {/* Year selector */}
        <ScrollReveal delay={0.1}>
        <div className="flex items-center justify-center gap-3 mb-8">
          <label className="text-text-secondary text-sm">
            {t("年度:", "Year:", "年度:")}
          </label>
          <select
            value={selectedYear}
            onChange={(e) => {
              setSelectedYear(Number(e.target.value));
              setSelectedAwardType("all");
            }}
            className="bg-bg-card border border-border-subtle rounded-lg px-4 py-2 text-text-primary text-sm focus:outline-none focus:border-gold-primary/50 transition-colors"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Award type tabs */}
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedAwardType("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedAwardType === "all"
                ? "bg-gold-primary text-bg-primary"
                : "bg-bg-card text-text-secondary border border-border-subtle hover:border-border-gold hover:text-text-primary"
            }`}
          >
            {t("すべて", "All", "全部")} ({products.length})
          </button>
          {availableTypes.map((type) => {
            const count = products.filter((p) => p.awardType === type).length;
            return (
              <button
                key={type}
                onClick={() => setSelectedAwardType(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedAwardType === type
                    ? "bg-gold-primary text-bg-primary"
                    : "bg-bg-card text-text-secondary border border-border-subtle hover:border-border-gold hover:text-text-primary"
                }`}
              >
                {AWARD_TYPE_LABELS[type][locale]} ({count})
              </button>
            );
          })}
        </div>
        </ScrollReveal>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-text-muted py-12">
            {t(
              "該当する受賞製品はありません",
              "No award winners found",
              "没有符合条件的获奖产品"
            )}
          </p>
        )}
      </div>
    </section>
  );
}
