"use client";

import { AudioLandNavigation } from "@/components/audio-land/navigation";
import { AudioLandHero } from "@/components/audio-land/hero";
import { AudioLandAbout } from "@/components/audio-land/about";
import { AudioLandBrands } from "@/components/audio-land/brands";
import { AudioLandServices } from "@/components/audio-land/services";
import { AudioLandStaffPicks } from "@/components/audio-land/staff-picks";
import { AudioLandAccess } from "@/components/audio-land/access";
import { AudioLandFooter } from "@/components/audio-land/footer";

export default function AudioLandPage() {
  return (
    <>
      <AudioLandNavigation />
      <main>
        <AudioLandHero />
        <AudioLandAbout />
        <AudioLandBrands />
        <AudioLandServices />
        <AudioLandStaffPicks />
        <AudioLandAccess />
      </main>
      <AudioLandFooter />
    </>
  );
}
