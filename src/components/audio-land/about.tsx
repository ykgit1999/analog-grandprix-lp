"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { GoldDivider } from "@/components/ui/gold-divider";
import storeData from "@/data/audio-land/store.json";

const stats = [
  { value: `${new Date().getFullYear() - storeData.established}`, label: "年の実績", suffix: "年" },
  { value: "500", label: "取扱ブランド数", suffix: "+" },
  { value: "3,000", label: "成約実績", suffix: "台" },
  { value: "2", label: "フロア構成", suffix: "F" },
];

export function AudioLandAbout() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="コンセプト" subtitle="CONCEPT" />

        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-serif text-lg md:text-xl leading-loose text-text-primary/90">
              {storeData.concept}
            </p>
          </div>
        </ScrollReveal>

        <GoldDivider className="my-16" />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="font-serif text-4xl md:text-5xl font-bold gold-gradient-text">
                  {stat.value}
                  <span className="text-lg">{stat.suffix}</span>
                </p>
                <p className="mt-2 text-text-secondary text-sm">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
