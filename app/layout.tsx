import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';

import "./globals.css";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL("https://minjiya.com"),
  keywords: ["minjiya", "web", "stránky", "vývoj", "mobilní aplikace", "aplikace", "vývoj stránek", "webové stránky", "redesign", "stránky budoucnosti", "budoucnost"],
  title: "minjiya",
  description: 'Tvoříme webové a mobilní aplikace budoucnosti',
  openGraph: {
    type: 'website',
    url: "https://minjiya.com",
    title: "minjiya",
    description: 'Tvoříme webové a mobilní aplikace budoucnosti',
    siteName: "minjiya",
    images: [
      {
        url: "https://minjiya.com/mt.png",
        width: 800,
        height: 600,
        alt: "minjiya",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "minjiya",
    description: 'Tvoříme webové a mobilní aplikace budoucnosti',
    images: [
      {
        url: "https://minjiya.com/mt.png",
        width: 800,
        height: 600,
        alt: "minjiya",
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={inter.className}
      >
        <Analytics />
        {children}
        <SpeedInsights />
      </body>
    </html >
  );
}
