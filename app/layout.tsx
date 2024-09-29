import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

export const metadata: Metadata = {
  title: "minjiya",
  description: 'shaping the future',
  openGraph: {
    type: 'website',
    url: "https://minjiya.com",
    title: "minjiya",
    description: 'shaping the future',
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
    description: 'shaping the future',
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
    <html lang="zxx">
      <body
        className={`antialiased flex place-items-center h-dvh text-center bg-[#161729]`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
