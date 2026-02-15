import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "アナロググランプリ | Analog Grand Prix",
  description:
    "2008年創設。アナログオーディオの本質を追求する製品に贈られる、音元出版主催のアワード。ターンテーブル、カートリッジ、管球アンプなど厳選された銘機を紹介。",
  openGraph: {
    title: "アナロググランプリ | Analog Grand Prix",
    description:
      "2008年創設。アナログオーディオの本質を追求する製品に贈られるアワード。",
    type: "website",
    locale: "ja_JP",
    url: "https://www.ongen.co.jp/award/analog/",
  },
  twitter: {
    card: "summary_large_image",
    title: "アナロググランプリ | Analog Grand Prix",
    description:
      "2008年創設。アナログオーディオの本質を追求する製品に贈られるアワード。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSerifJP.variable} ${notoSansJP.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
