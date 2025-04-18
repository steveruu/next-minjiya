import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css"

const schibsted = Schibsted_Grotesk({
    subsets: ["latin", "latin-ext"],
    display: "swap",
    variable: "--font-schibsted",
});

export const metadata: Metadata = {
    title: "Stihni.to | Chytrý průvodce libereckou MHD",
    description:
        "Stihni.to je moderní aplikace pro sledování liberecké MHD v reálném čase. Zjistěte přesné časy odjezdů, najděte nejbližší zastávky a plánujte své cesty efektivně.",
    keywords: [
        "Liberec",
        "MHD",
        "doprava",
        "autobus",
        "tramvaj",
        "jízdní řády",
        "real-time",
        "aplikace",
        "minjiya",
        "minjiyalabs",
        "stihni.to",
        "steveruu"
    ],
    metadataBase: new URL("https://minjiya.com"),
    authors: [{ name: "minjiya" }, { name: "steveruu" }],
    openGraph: {
        title: "Stihni.to | Chytrý průvodce libereckou MHD",
        description: "Sledujte libereckou MHD v reálném čase",
        images: ["/images/stihnito.png"],
    },
    alternates: {
        canonical: "https://minjiya.com/stihni-to",
    },
};

export default function StihniToLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={schibsted.className + " antialiased"}>
            <Analytics />
            {children}
            <SpeedInsights />
        </div>
    );
}
