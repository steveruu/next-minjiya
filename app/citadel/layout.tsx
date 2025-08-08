import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const lora = Lora({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-lora",
});

export const metadata: Metadata = {
    title: "citadel — your mind, fortified",
    description:
        "Citadel is a calm, modern app for practicing Stoicism. Simple daily reflections, prompts, and progress to fortify your mind.",
    keywords: [
        "citadel",
        "stoicism",
        "stoic",
        "mindfulness",
        "journal",
        "minjiya",
        "minjiyalabs",
        "mobile app",
        "iOS",
        "Android",
    ],
    metadataBase: new URL("https://minjiya.com"),
    openGraph: {
        title: "citadel — your mind, fortified",
        description:
            "A calm, modern app for practicing Stoicism. Simple daily reflections, prompts, and progress to fortify your mind.",
        images: [
            {
                url: "/citadel.png",
                alt: "citadel — your mind, fortified",
            },
        ],
        type: "website",
        url: "https://minjiya.com/citadel",
    },
    alternates: {
        canonical: "https://minjiya.com/citadel",
    },
};

export default function CitadelLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div
            className={`antialiased ${inter.variable} ${lora.variable} min-h-screen bg-[hsl(var(--c-bg))] text-[hsl(var(--c-fg))]`}
        >
            <Analytics />
            {children}
            <SpeedInsights />
        </div>
    );
}

