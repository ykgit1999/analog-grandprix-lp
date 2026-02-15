"use client";

import { SITE_INFO } from "@/lib/constants";
import { GoldDivider } from "@/components/ui/gold-divider";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { locale, t } = useI18n();

  return (
    <footer className="py-16 bg-bg-primary">
      <div className="max-w-5xl mx-auto px-6">
        <GoldDivider className="mb-12" />

        <div className="text-center">
          <h3 className="font-serif text-xl font-bold gold-gradient-text inline-block mb-2">
            {locale === "zh" ? SITE_INFO.titleZh : SITE_INFO.title}
          </h3>
          <p className="text-text-muted text-xs tracking-wider mb-8">
            {SITE_INFO.titleEn}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-sm">
            {/* Organizer */}
            <div>
              <p className="text-text-muted text-xs tracking-wider mb-2">
                {t("主催", "Organizer", "主办")}
              </p>
              <p className="text-text-secondary">
                {locale === "en" ? SITE_INFO.organizerEn : locale === "zh" ? SITE_INFO.organizerZh : SITE_INFO.organizer}
              </p>
              <p className="text-text-secondary">
                {locale === "en" ? SITE_INFO.publisherEn : locale === "zh" ? SITE_INFO.publisherZh : SITE_INFO.publisher}
              </p>
            </div>

            {/* Contact */}
            <div>
              <p className="text-text-muted text-xs tracking-wider mb-2">
                {t("お問い合わせ", "Contact", "联系方式")}
              </p>
              <p className="text-text-secondary">{SITE_INFO.phone}</p>
              <p className="text-text-secondary">
                <a
                  href={`mailto:${SITE_INFO.email}`}
                  className="hover:text-gold-primary transition-colors"
                >
                  {SITE_INFO.email}
                </a>
              </p>
            </div>

            {/* Links */}
            <div>
              <p className="text-text-muted text-xs tracking-wider mb-2">
                {t("関連リンク", "Links", "相关链接")}
              </p>
              <p>
                <a
                  href={SITE_INFO.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-gold-primary transition-colors text-sm"
                >
                  {t("公式サイト", "Official Website", "官方网站")}
                </a>
              </p>
              <p>
                <a
                  href={SITE_INFO.philewebUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-gold-primary transition-colors text-sm"
                >
                  PHILE WEB
                </a>
              </p>
            </div>
          </div>

          <div className="h-px bg-border-subtle mb-8" />

          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()}{" "}
            {locale === "en" ? SITE_INFO.publisherEn : SITE_INFO.publisher}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
