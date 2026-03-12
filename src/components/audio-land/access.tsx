"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { GoldDivider } from "@/components/ui/gold-divider";
import storeData from "@/data/audio-land/store.json";

export function AudioLandAccess() {
  return (
    <section id="access" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="店舗情報" subtitle="ACCESS" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Store info */}
          <ScrollReveal direction="left">
            <div className="p-8 rounded-xl bg-bg-card border border-border-subtle">
              <h3 className="font-serif text-2xl font-bold gold-gradient-text mb-6">
                {storeData.name}
              </h3>

              <dl className="space-y-5">
                <div>
                  <dt className="text-gold-primary/60 text-xs tracking-wider mb-1">住所</dt>
                  <dd className="text-text-primary text-sm">{storeData.address}</dd>
                </div>

                <GoldDivider />

                <div>
                  <dt className="text-gold-primary/60 text-xs tracking-wider mb-1">営業時間</dt>
                  <dd className="text-text-primary text-sm">
                    <p>平日 {storeData.hours.weekday}</p>
                    <p>土日祝 {storeData.hours.weekend}</p>
                    <p className="text-gold-primary/70 text-xs mt-1">{storeData.hours.closed}</p>
                  </dd>
                </div>

                <GoldDivider />

                <div>
                  <dt className="text-gold-primary/60 text-xs tracking-wider mb-1">お電話</dt>
                  <dd className="text-text-primary text-sm">
                    <a
                      href={`tel:${storeData.phone.replace(/-/g, "")}`}
                      className="hover:text-gold-light transition-colors"
                    >
                      {storeData.phone}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-gold-primary/60 text-xs tracking-wider mb-1">メール</dt>
                  <dd className="text-text-primary text-sm">
                    <a
                      href={`mailto:${storeData.email}`}
                      className="hover:text-gold-light transition-colors"
                    >
                      {storeData.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </ScrollReveal>

          {/* Map placeholder & access info */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              {/* Map placeholder */}
              <div className="relative h-64 rounded-xl bg-bg-card border border-border-subtle overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gold-primary/10 border border-gold-primary/20 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 text-gold-primary">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-text-muted text-xs tracking-wider">MAP</p>
                </div>
              </div>

              {/* Access details */}
              <div className="p-6 rounded-xl bg-bg-card border border-border-subtle">
                <h4 className="font-serif text-lg font-bold text-text-primary mb-4">
                  アクセス
                </h4>
                <ul className="space-y-3 text-text-secondary text-sm">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gold-primary/60 shrink-0" />
                    <span>JR「御茶ノ水」駅 聖橋口より徒歩5分</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gold-primary/60 shrink-0" />
                    <span>東京メトロ千代田線「新御茶ノ水」駅 B3出口より徒歩3分</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gold-primary/60 shrink-0" />
                    <span>都営新宿線「小川町」駅 A5出口より徒歩2分</span>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
