import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "minjiya",
  description: 'shaping the future',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zxx">
      <body
        className={`antialiased flex place-items-center min-h-screen text-center bg-[#161729]`}
      >
        {children}
      </body>
    </html>
  );
}
