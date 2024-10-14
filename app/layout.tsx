import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "minjiya",
  description: 'tvoříme webové a mobilní aplikace budoucnosti',
  openGraph: {
    type: 'website',
    url: "https://minjiya.com",
    title: "minjiya",
    description: 'tvoříme webové a mobilní aplikace budoucnosti',
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
    description: 'tvoříme webové a mobilní aplikace budoucnosti',
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
      </body>
    </html >
  );
}
