"use client";

import { I18nProvider } from "@/lib/i18n";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Awards } from "@/components/sections/awards";
import { Categories } from "@/components/sections/categories";
import { Judges } from "@/components/sections/judges";
import { History } from "@/components/sections/history";
import { Footer } from "@/components/sections/footer";
import { Navigation } from "@/components/ui/navigation";

export default function Home() {
  return (
    <I18nProvider>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Awards />
        <Categories />
        <Judges />
        <History />
      </main>
      <Footer />
    </I18nProvider>
  );
}
