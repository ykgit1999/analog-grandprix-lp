"use client";

import "./audio-land.css";
import { AudioLandHero } from "@/components/audio-land/hero";
import { AudioLandIntro } from "@/components/audio-land/intro";
import { AudioLandArticleList } from "@/components/audio-land/article-list";
import { AudioLandSidebar } from "@/components/audio-land/sidebar";

export default function AudioLandPage() {
  return (
    <div className="al-page">
      <AudioLandHero />
      <AudioLandIntro />
      <div className="al-content">
        <AudioLandArticleList />
        <AudioLandSidebar />
      </div>
    </div>
  );
}
