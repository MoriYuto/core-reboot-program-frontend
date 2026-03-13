import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes';
import BackgroundImage from "../assets/images/background.webp";

import "./globals.css";
import { roboto } from "./style/font";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Core Reboot Program | 64タイプ行動分析",
  description:
    "3,000名のデータに基づく64タイプ行動分析で、恋愛における無意識のパターンを可視化する診断サービスです。",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Core Reboot Program | 64タイプ行動分析",
    description:
      "3,000名のデータに基づく64タイプ行動分析で、恋愛における無意識のパターンを可視化する診断サービスです。",
    type: "website",
    locale: "ja_JP",
    siteName: "Core Reboot Program",
    url: "/",
    images: [
      {
        url: BackgroundImage.src,
        width: 1200,
        height: 630,
        alt: "Core Reboot Program",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Core Reboot Program | 64タイプ行動分析",
    description:
      "3,000名のデータに基づく64タイプ行動分析で、恋愛における無意識のパターンを可視化する診断サービスです。",
    images: [BackgroundImage.src],
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${roboto.variable} antialiased min-w-[37.5rem]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
