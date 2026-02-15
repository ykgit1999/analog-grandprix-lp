"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useI18n } from "@/lib/i18n";

export function About() {
  const { locale, t } = useI18n();

  const stats = locale === "en"
    ? [
        { value: "17", label: "Years of History", suffix: "th" },
        { value: "6", label: "Categories" },
        { value: "5", label: "Jury Members" },
        { value: "23", label: "Voting Stores" },
      ]
    : locale === "zh"
    ? [
        { value: "17", label: "年历史", suffix: "届" },
        { value: "6", label: "个类别" },
        { value: "5", label: "位评委" },
        { value: "23", label: "家投票店铺" },
      ]
    : [
        { value: "17", label: "年の歴史", suffix: "th" },
        { value: "6", label: "カテゴリ" },
        { value: "5", label: "選考委員", suffix: "名" },
        { value: "23", label: "投票店舗", suffix: "店" },
      ];

  return (
    <section id="about" className="py-24 md:py-32 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title={t("アナロググランプリとは", "About the Award", "关于模拟大奖赛")}
          subtitle={locale === "ja" ? "About the Award" : locale === "zh" ? "奖项简介" : undefined}
        />

        {/* Description */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-text-secondary leading-relaxed text-base md:text-lg">
              {t(
                "アナロググランプリは、2008年に音元出版が創設したアナログオーディオ機器のためのアワードです。ターンテーブル、カートリッジ、フォノイコライザー、管球アンプなど、アナログ再生にまつわる製品の中から、5名のオーディオ評論家と全国約23店舗のオーディオ専門店の投票により、真に推薦すべき銘機を選出しています。",
                "The Analog Grand Prix is an award for analog audio equipment established by Ongen Publishing in 2008. From turntables, cartridges, phono stages, and tube amplifiers to other analog playback products, truly exceptional equipment is selected through voting by five expert audio critics and approximately 23 specialty audio stores nationwide.",
                "模拟大奖赛是音元出版社于2008年创立的模拟音频设备奖项。从唱盘、唱头、唱放、电子管放大器等模拟播放相关产品中，由5位音频评论家和全国约23家音频专门店投票，甄选出真正值得推荐的铭机。"
              )}
            </p>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.12} scale>
              <motion.div
                whileHover={{ y: -4, borderColor: "rgba(201, 168, 76, 0.3)" }}
                transition={{ duration: 0.3 }}
                className="text-center p-6 rounded-xl bg-bg-card border border-border-subtle"
              >
                <div className="font-serif text-4xl md:text-5xl font-bold gold-gradient-text">
                  {stat.value}
                  {stat.suffix && (
                    <span className="text-lg text-gold-dark ml-1">{stat.suffix}</span>
                  )}
                </div>
                <p className="mt-2 text-text-secondary text-sm">{stat.label}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
