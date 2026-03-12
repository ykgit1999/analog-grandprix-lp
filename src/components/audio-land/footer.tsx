"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import storeData from "@/data/audio-land/store.json";

export function AudioLandFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-6 border-t border-border-subtle">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center">
            {/* Logo text */}
            <h2 className="font-serif text-2xl font-bold gold-gradient-text">
              {storeData.name}
            </h2>
            <p className="mt-1 text-gold-light/40 text-xs tracking-[0.3em]">
              {storeData.nameEn}
            </p>

            {/* Description */}
            <p className="mt-6 text-text-secondary text-sm max-w-md mx-auto leading-relaxed">
              {storeData.description}
            </p>

            {/* Links */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
              <a
                href="#about"
                className="text-text-muted hover:text-gold-light transition-colors"
              >
                コンセプト
              </a>
              <a
                href="#products"
                className="text-text-muted hover:text-gold-light transition-colors"
              >
                取扱ブランド
              </a>
              <a
                href="#services"
                className="text-text-muted hover:text-gold-light transition-colors"
              >
                サービス
              </a>
              <a
                href="#staff-picks"
                className="text-text-muted hover:text-gold-light transition-colors"
              >
                スタッフおすすめ
              </a>
              <a
                href="#access"
                className="text-text-muted hover:text-gold-light transition-colors"
              >
                店舗情報
              </a>
            </div>

            {/* Divider */}
            <div className="mt-10 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-gold-primary/30 to-transparent" />

            {/* PHILE WEB credit */}
            <div className="mt-8 flex flex-col items-center gap-2">
              <span className="px-3 py-1 text-[10px] tracking-[0.15em] text-gold-light/50 border border-gold-primary/15 rounded bg-gold-primary/[0.03]">
                PHILE WEB SPECIAL CONTENTS
              </span>
            </div>

            {/* Copyright */}
            <p className="mt-6 text-text-muted text-xs">
              &copy; {currentYear} {storeData.name}. All rights reserved.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
