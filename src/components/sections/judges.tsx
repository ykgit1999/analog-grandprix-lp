"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useI18n } from "@/lib/i18n";
import judgesData from "@/data/judges.json";
import type { Judge } from "@/types/award";

const judges = judgesData as Judge[];

export function Judges() {
  const { locale, t } = useI18n();
  const chair = judges.find((j) => j.role === "chair");
  const members = judges.filter((j) => j.role === "member");

  const getBio = (judge: Judge) => {
    if (locale === "en") return judge.bioEn || judge.bio;
    if (locale === "zh") return judge.bioZh || judge.bio;
    return judge.bio;
  };

  const getName = (judge: Judge) => {
    if (locale !== "ja" && judge.nameEn) {
      return (
        <>
          {judge.name}
          <span className="text-text-muted text-sm font-normal ml-2">
            {judge.nameEn}
          </span>
        </>
      );
    }
    return judge.name;
  };

  return (
    <section id="judges" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title={t("選考委員", "Jury Members", "评选委员")}
          subtitle={locale === "ja" ? undefined : locale === "zh" ? "专业评审团" : undefined}
        />

        <ScrollReveal>
          <p className="text-center text-text-secondary max-w-2xl mx-auto mb-16 leading-relaxed">
            {t(
              "経験豊富なオーディオ評論家5名が選考委員を務め、さらに全国約23店舗のオーディオ専門店からの投票を加えた多角的な視点で銘機を選出しています。",
              "Five experienced audio critics serve on the jury, complemented by votes from approximately 23 specialty audio stores nationwide, ensuring a well-rounded selection of exceptional equipment.",
              "由5位经验丰富的音频评论家担任评委，并结合全国约23家音频专门店的投票，以多角度的视野甄选铭机。"
            )}
          </p>
        </ScrollReveal>

        {/* Chair - Featured */}
        {chair && (
          <ScrollReveal scale className="mb-12">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="max-w-2xl mx-auto bg-bg-card rounded-2xl p-8 border border-border-gold relative overflow-hidden"
            >
              {/* Gold corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-gold-primary/10 to-transparent" />
              </div>

              <div className="flex items-start gap-6">
                {/* Photo */}
                <div className="flex-shrink-0 w-24 h-24 rounded-full overflow-hidden border-2 border-gold-primary/40">
                  {chair.imageUrl ? (
                    <Image
                      src={chair.imageUrl}
                      alt={chair.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gold-dark to-gold-primary flex items-center justify-center">
                      <span className="font-serif text-2xl font-bold text-bg-primary">
                        {chair.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                <div>
                  <span className="text-xs text-gold-primary tracking-wider font-semibold">
                    {t("選考委員長", "Chair", "评选委员长")}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-text-primary mt-1">
                    {getName(chair)}
                  </h3>
                  <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                    {getBio(chair)}
                  </p>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        )}

        {/* Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {members.map((judge, i) => (
            <ScrollReveal key={judge.id} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-bg-card rounded-xl p-6 border border-border-subtle hover:border-border-gold transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  {/* Photo */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border border-border-subtle">
                    {judge.imageUrl ? (
                      <Image
                        src={judge.imageUrl}
                        alt={judge.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full bg-bg-card-hover flex items-center justify-center">
                        <span className="font-serif text-lg font-bold text-gold-primary">
                          {judge.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>

                  <div>
                    <span className="text-xs text-text-muted tracking-wider">
                      {t("選考委員", "Member", "评选委员")}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-text-primary mt-0.5">
                      {getName(judge)}
                    </h3>
                    <p className="mt-2 text-text-secondary text-sm leading-relaxed">
                      {getBio(judge)}
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Retail voting note */}
        <ScrollReveal className="mt-12">
          <div className="text-center bg-bg-card/50 rounded-xl p-6 border border-border-subtle max-w-xl mx-auto">
            <p className="text-sm text-text-secondary">
              <span className="text-gold-primary font-semibold">
                {t("+ 全国約23店舗", "+ Approx. 23 Stores Nationwide", "+ 全国约23家店铺")}
              </span>
              {t(
                "のオーディオ専門店による投票",
                " — voting by specialty audio retailers",
                "的音频专门店投票"
              )}
            </p>
            <p className="text-xs text-text-muted mt-2">
              {t(
                "北海道から福岡まで、全国のオーディオ専門店が選考に参加しています",
                "Specialty audio stores across Japan, from Hokkaido to Fukuoka, participate in the selection process",
                "从北海道到福冈，日本全国的音频专门店均参与评选过程"
              )}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
