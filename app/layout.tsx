import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";

import "./globals.css";

// Use local fonts instead of Google Fonts to avoid network failures
const rubik = localFont({
    src: [
        {
            path: "../public/fonts/Rubik-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/Rubik-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../public/fonts/Rubik-Bold.woff2",
            weight: "700",
            style: "normal",
        },
    ],
    display: "swap",
    fallback: ["system-ui", "arial", "sans-serif"],
    variable: "--font-rubik",
});

const stick = localFont({
    src: "../public/fonts/Stick-Regular.woff2",
    variable: "--font-stick",
    fallback: ["system-ui", "arial", "sans-serif"],
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://minjiya.com"),
    keywords: [
        "minjiya",
        "minjiyalabs",
        "web",
        "stránky",
        "vývoj",
        "mobilní aplikace",
        "aplikace",
        "vývoj stránek",
        "webové stránky",
        "redesign",
        "stránky budoucnosti",
        "budoucnost",
        "web development",
        "mobile apps",
        "future websites",
    ],
    title: "minjiya | Tvoříme webové a mobilní aplikace budoucnosti",
    description:
        "minjiya - Tvoříme webové a mobilní aplikace budoucnosti. Profesionální vývoj moderních webových stránek a mobilních aplikací s důrazem na design a uživatelskou zkušenost.",
    generator: "Next.js",
    applicationName: "minjiya",
    referrer: "origin-when-cross-origin",
    authors: [{ name: "minjiya Team" }],
    creator: "minjiya",
    publisher: "minjiya",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: "website",
        url: "https://minjiya.com",
        title: "minjiya | Tvoříme webové a mobilní aplikace budoucnosti",
        description:
            "Tvoříme webové a mobilní aplikace budoucnosti. Profesionální vývoj s důrazem na design a uživatelskou zkušenost.",
        siteName: "minjiya",
        images: [
            {
                url: "https://minjiya.com/mt.png",
                width: 800,
                height: 600,
                alt: "minjiya - Tvoříme webové a mobilní aplikace budoucnosti",
            },
        ],
        locale: "cs_CZ",
    },
    twitter: {
        card: "summary_large_image",
        title: "minjiya | Tvoříme webové a mobilní aplikace budoucnosti",
        description:
            "Tvoříme webové a mobilní aplikace budoucnosti. Profesionální vývoj s důrazem na design a uživatelskou zkušenost.",
        images: [
            {
                url: "https://minjiya.com/mt.png",
                width: 800,
                height: 600,
                alt: "minjiya - Tvoříme webové a mobilní aplikace budoucnosti",
            },
        ],
        creator: "@minjiya",
    },
    alternates: {
        canonical: "https://minjiya.com",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="cs" className="scroll-smooth">
            <head>
                <meta name="theme-color" content="#a83bff" />
                <link rel="preload" as="image" href="/mt.svg" />
            </head>
            <body
                className={`bg-[length:40px_40px] [background-image:linear-gradient(to_right,rgba(128,128,128,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.1)_1px,transparent_1px)] ${rubik.className} ${stick.variable}`}
            >
                {children}
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
