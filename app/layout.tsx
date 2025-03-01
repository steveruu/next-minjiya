import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';

import "./globals.css";
import { Rubik, Stick } from 'next/font/google'

// Optimize font loading with display swap
const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial', 'sans-serif']
});

const stick = Stick({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-stick',
  display: 'swap',
  preload: true,
  fallback: ['monospace']
});

export const metadata: Metadata = {
  metadataBase: new URL("https://minjiya.com"),
  keywords: ["minjiya", "minjiyalabs", "web", "stránky", "vývoj", "mobilní aplikace", "aplikace", "vývoj stránek", "webové stránky", "redesign", "stránky budoucnosti", "budoucnost", "web development", "mobile apps", "future websites"],
  title: "minjiya | Tvoříme webové a mobilní aplikace budoucnosti",
  description: 'minjiya - Tvoříme webové a mobilní aplikace budoucnosti. Profesionální vývoj moderních webových stránek a mobilních aplikací s důrazem na design a uživatelskou zkušenost.',
  generator: 'Next.js',
  applicationName: 'minjiya',
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'minjiya Team' }],
  creator: 'minjiya',
  publisher: 'minjiya',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    url: "https://minjiya.com",
    title: "minjiya | Tvoříme webové a mobilní aplikace budoucnosti",
    description: 'Tvoříme webové a mobilní aplikace budoucnosti. Profesionální vývoj s důrazem na design a uživatelskou zkušenost.',
    siteName: "minjiya",
    images: [
      {
        url: "https://minjiya.com/mt.png",
        width: 800,
        height: 600,
        alt: "minjiya - Tvoříme webové a mobilní aplikace budoucnosti",
      },
    ],
    locale: 'cs_CZ',
  },
  twitter: {
    card: 'summary_large_image',
    title: "minjiya | Tvoříme webové a mobilní aplikace budoucnosti",
    description: 'Tvoříme webové a mobilní aplikace budoucnosti. Profesionální vývoj s důrazem na design a uživatelskou zkušenost.',
    images: [
      {
        url: "https://minjiya.com/mt.png",
        width: 800,
        height: 600,
        alt: "minjiya - Tvoříme webové a mobilní aplikace budoucnosti",
      },
    ],
    creator: '@minjiya',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://minjiya.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preload" as="image" href="/mt.svg" />
      </head>
      <body
        className={`${rubik.className} ${stick.variable}`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html >
  );
}
