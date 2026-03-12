import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "オーディオランド | Audio Land — アナログオーディオ専門店",
  description:
    "オーディオランドは、アナログオーディオの魅力を伝え続ける専門店です。ターンテーブル、カートリッジ、管球アンプなど、厳選された銘機を取り揃え、最適なオーディオ体験をご提案いたします。",
  openGraph: {
    title: "オーディオランド | Audio Land",
    description:
      "アナログオーディオ専門店。ターンテーブル、カートリッジ、管球アンプなど厳選された銘機を取り揃えています。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "オーディオランド | Audio Land",
    description:
      "アナログオーディオ専門店。音楽の感動を、もっと深く。",
  },
};

export default function AudioLandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
