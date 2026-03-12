"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import storeData from "@/data/audio-land/store.json";

export function AudioLandIntro() {
  return (
    <section className="al-intro">
      <ScrollReveal>
        <p>{storeData.description}</p>

        <div className="al-intro-stats">
          <div className="al-intro-stat">
            <span className="al-intro-stat-value">
              {storeData.totalPurchases}
              <span style={{ fontSize: "16px" }}>点以上</span>
            </span>
            <span className="al-intro-stat-label">累計買取件数</span>
          </div>
          <div className="al-intro-stat">
            <span className="al-intro-stat-value">
              {storeData.satisfaction}
              <span style={{ fontSize: "16px" }}>%</span>
            </span>
            <span className="al-intro-stat-label">お客様満足度</span>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
