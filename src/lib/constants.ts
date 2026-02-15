import type { AwardType, ProductCategory } from "@/types/award";
import type { Locale } from "@/lib/i18n";

export const AWARD_TYPE_LABELS: Record<AwardType, Record<Locale, string>> = {
  gold: { ja: "Gold Award", en: "Gold Award", zh: "金奖" },
  grandprix: { ja: "アナロググランプリ賞", en: "Grand Prix Award", zh: "大奖赛奖" },
  "best-cp": { ja: "ベストコストパフォーマンス賞", en: "Best Value Award", zh: "最佳性价比奖" },
  "special-development": { ja: "特別開発賞", en: "Special Development Award", zh: "特别开发奖" },
  accessory: { ja: "アナログアクセサリー賞", en: "Analog Accessory Award", zh: "模拟配件奖" },
};

export const AWARD_TYPE_SHORT_LABELS: Record<AwardType, string> = {
  gold: "Gold",
  grandprix: "Grand Prix",
  "best-cp": "Best CP",
  "special-development": "Special Dev.",
  accessory: "Accessory",
};

export const CATEGORY_LABELS: Record<ProductCategory, Record<Locale, string>> = {
  turntable: { ja: "ターンテーブル", en: "Turntable", zh: "唱盘" },
  cartridge: { ja: "カートリッジ", en: "Cartridge", zh: "唱头" },
  tonearm: { ja: "トーンアーム", en: "Tonearm", zh: "唱臂" },
  "phono-stage": { ja: "フォノイコライザー", en: "Phono Stage", zh: "唱放" },
  "tube-amp": { ja: "管球アンプ", en: "Tube Amplifier", zh: "电子管放大器" },
  accessory: { ja: "アクセサリー", en: "Accessory", zh: "配件" },
};

export const AWARD_TYPE_COLORS: Record<AwardType, string> = {
  gold: "bg-gradient-to-r from-gold-primary to-gold-light text-bg-primary",
  grandprix: "bg-gold-dark/80 text-gold-light",
  "best-cp": "bg-tier-silver/20 text-tier-silver",
  "special-development": "bg-tier-blue/20 text-tier-blue",
  accessory: "bg-tier-bronze/20 text-tier-bronze",
};

export const SITE_INFO = {
  title: "アナロググランプリ",
  titleEn: "Analog Grand Prix",
  titleZh: "模拟大奖赛",
  organizer: "アナロググランプリ実行委員会",
  organizerEn: "Analog Grand Prix Committee",
  organizerZh: "模拟大奖赛执行委员会",
  publisher: "音元出版株式会社",
  publisherEn: "Ongen Publishing Inc.",
  publisherZh: "音元出版株式会社",
  phone: "03-5833-5020",
  email: "audio@ongen.co.jp",
  officialUrl: "https://www.ongen.co.jp/award/analog/",
  philewebUrl: "https://www.phileweb.com",
  since: 2008,
} as const;

export const NAV_ITEMS: Record<Locale, { id: string; label: string }[]> = {
  ja: [
    { id: "about", label: "概要" },
    { id: "awards", label: "受賞製品" },
    { id: "categories", label: "カテゴリー" },
    { id: "judges", label: "選考委員" },
    { id: "history", label: "沿革" },
  ],
  en: [
    { id: "about", label: "About" },
    { id: "awards", label: "Winners" },
    { id: "categories", label: "Categories" },
    { id: "judges", label: "Jury" },
    { id: "history", label: "History" },
  ],
  zh: [
    { id: "about", label: "概述" },
    { id: "awards", label: "获奖产品" },
    { id: "categories", label: "类别" },
    { id: "judges", label: "评委" },
    { id: "history", label: "沿革" },
  ],
};
