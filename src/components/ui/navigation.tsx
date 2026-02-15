"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "@/lib/constants";
import { useI18n, type Locale } from "@/lib/i18n";

const LOCALE_LABELS: { locale: Locale; label: string }[] = [
  { locale: "ja", label: "JA" },
  { locale: "en", label: "EN" },
  { locale: "zh", label: "ZH" },
];

export function Navigation() {
  const { locale, setLocale } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = NAV_ITEMS[locale];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [navItems]);

  const handleClick = (id: string) => {
    setIsMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-bg-primary/95 backdrop-blur-md border-b border-border-subtle"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo image */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2"
        >
          <Image
            src="/images/logo.png"
            alt="analog Grand Prix"
            width={100}
            height={28}
            className="h-7 w-auto"
          />
        </button>

        {/* Desktop nav + language switcher */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-8">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => handleClick(id)}
                  className={`relative text-sm font-medium transition-colors py-1 ${
                    activeSection === id
                      ? "text-gold-primary"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {label}
                  {activeSection === id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold-primary rounded-full"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Language switcher */}
          <div className="flex items-center border border-border-subtle rounded-full overflow-hidden">
            {LOCALE_LABELS.map(({ locale: loc, label }) => (
              <button
                key={loc}
                onClick={() => setLocale(loc)}
                className={`px-3 py-1 text-xs font-semibold transition-all duration-200 ${
                  locale === loc
                    ? "bg-gold-primary text-bg-primary"
                    : "text-text-muted hover:text-text-primary"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile: language switcher + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          {/* Compact language switcher */}
          <div className="flex items-center border border-border-subtle rounded-full overflow-hidden">
            {LOCALE_LABELS.map(({ locale: loc, label }) => (
              <button
                key={loc}
                onClick={() => setLocale(loc)}
                className={`px-2 py-0.5 text-[10px] font-semibold transition-all duration-200 ${
                  locale === loc
                    ? "bg-gold-primary text-bg-primary"
                    : "text-text-muted"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="flex flex-col gap-1.5 w-6"
            aria-label="Menu"
          >
            <span
              className={`block h-0.5 bg-text-primary transition-all duration-300 ${
                isMobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-text-primary transition-all duration-300 ${
                isMobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-text-primary transition-all duration-300 ${
                isMobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-primary/98 backdrop-blur-md border-b border-border-subtle overflow-hidden"
          >
            <ul className="px-6 py-4 space-y-3">
              {navItems.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => handleClick(id)}
                    className={`block w-full text-left text-base py-2 transition-colors ${
                      activeSection === id
                        ? "text-gold-primary"
                        : "text-text-secondary"
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
