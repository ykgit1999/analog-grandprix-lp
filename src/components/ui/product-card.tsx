"use client";

import { motion } from "framer-motion";
import type { AwardProduct } from "@/types/award";
import { CATEGORY_LABELS } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";
import { AwardBadge } from "./award-badge";

interface ProductCardProps {
  product: AwardProduct;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const { locale } = useI18n();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.97 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group relative bg-bg-card rounded-xl p-6 border border-border-subtle hover:border-border-gold transition-all duration-300 hover:bg-bg-card-hover"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <AwardBadge type={product.awardType} />
        <span className="text-xs text-text-muted">
          {CATEGORY_LABELS[product.category]?.[locale] ?? product.categoryLabel}
        </span>
      </div>

      <h3 className="font-serif text-lg font-bold text-text-primary mb-1 group-hover:text-gold-light transition-colors">
        {product.productName}
      </h3>

      <p className="text-sm text-gold-primary font-semibold mb-3">
        {product.manufacturer}
      </p>

      {product.description && (() => {
        const desc = locale === "en" ? (product.descriptionEn || product.description) : locale === "zh" ? (product.descriptionZh || product.description) : product.description;
        return (
          <p className="text-sm text-text-secondary leading-relaxed mb-3">
            {desc}
          </p>
        );
      })()}

      {product.price && (
        <p className="text-xs text-text-muted">
          {product.price}
        </p>
      )}

      {/* Gold accent line at bottom */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold-primary/0 to-transparent group-hover:via-gold-primary/40 transition-all duration-500" />
    </motion.div>
  );
}
