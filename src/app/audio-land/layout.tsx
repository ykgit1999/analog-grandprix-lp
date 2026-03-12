import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "オーディオランド | Audio Land — ハイエンド・ヴィンテージオーディオ買取専門店",
  description:
    "オーディオランドは、ハイエンド・ヴィンテージオーディオの高額買取専門店です。買取件数35万点以上の実績と信頼。お客様満足度98.0%以上。まずはお気軽にご相談ください。",
  openGraph: {
    title: "オーディオランド | Audio Land",
    description:
      "ハイエンド・ヴィンテージオーディオ買取専門店。買取件数35万点以上の実績と信頼。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "オーディオランド | Audio Land",
    description:
      "まじめに高額買取を続けてきた信頼×実績。ハイエンド・ヴィンテージオーディオの高額査定に自信あり。",
  },
};

export default function AudioLandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
