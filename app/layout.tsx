import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Bricolage_Grotesque } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

const bricolage = Bricolage_Grotesque({
    subsets: ["latin", "latin-ext"],
    display: "swap",
    variable: "--font-bricolage",
    weight: ["400", "500", "600", "700"],
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
        "@minjiyalabs",
        "minjiya.com",
        "github.com/minjiyalabs",
        "x.com/minjiyalabs",
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
        "Oficiální stránka minjiya (@minjiyalabs) - Tvoříme webové a mobilní aplikace budoucnosti. Profesionální vývoj moderních webových stránek a mobilních aplikací s důrazem na design a uživatelskou zkušenost. Všechny naše open-source projekty na github.com/minjiyalabs. Sledujte @minjiyalabs na GitHub, X a Instagram.",
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
            "Oficiální stránka minjiya (@minjiyalabs) - Tvoříme webové a mobilní aplikace budoucnosti. Všechny naše open-source projekty na github.com/minjiyalabs. Sledujte @minjiyalabs na GitHub, X a Instagram.",
        siteName: "minjiya",
        images: [
            {
                url: "https://minjiya.com/mt.png",
                alt: "minjiya - Tvoříme webové a mobilní aplikace budoucnosti",
            },
        ],
        locale: "cs_CZ",
    },
    twitter: {
        card: "summary_large_image",
        title: "minjiya | Tvoříme webové a mobilní aplikace budoucnosti",
        description:
            "minjiya (@minjiyalabs) - Tvoříme webové a mobilní aplikace budoucnosti. Profesionální vývoj s důrazem na design a uživatelskou zkušenost. Sledujte @minjiyalabs na GitHub, X a Instagram.",
        images: [
            {
                url: "https://minjiya.com/mt.png",
                alt: "minjiya - Tvoříme webové a mobilní aplikace budoucnosti",
            },
        ],
        creator: "@minjiyalabs",
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
        <html lang="cs" className="dark scroll-smooth">
            <head>
                <meta name="theme-color" content="#121212" />
                <meta name="author" content="minjiya (@minjiyalabs)" />
                <meta name="github" content="https://github.com/minjiyalabs" />
                <meta name="twitter" content="https://x.com/minjiyalabs" />
                <meta name="instagram" content="https://instagram.com/minjiyalabs" />
                <meta name="organization" content="minjiyalabs" />
                <meta name="social:github" content="@minjiyalabs" />
                <meta name="social:twitter" content="@minjiyalabs" />
                <meta name="social:instagram" content="@minjiyalabs" />
                <meta property="og:site_name" content="minjiya" />
                <meta name="description" content="Oficiální stránka minjiya (@minjiyalabs) - všechny open-source projekty na github.com/minjiyalabs" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <link rel="canonical" href="https://minjiya.com" />
                <link rel="preload" as="image" href="/mt.svg" />
            </head>
            <body
                className={`bg-minjiya bg-grid-pattern ${bricolage.variable} ${stick.variable}`}
            >
                {children}
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
