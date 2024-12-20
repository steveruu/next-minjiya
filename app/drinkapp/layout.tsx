import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin', 'latin-ext'] })

export const metadata: Metadata = {
    metadataBase: new URL("https://minjiya.com"),
    title: "DrinkApp - Track Your Hydration Journey",
    description: "Stay healthy and hydrated with DrinkApp. Monitor your daily water intake, set reminders, and achieve your wellness goals.",
    openGraph: {
        type: "website",
        url: "https://minjiya.com/drinkapp",
        title: "DrinkApp - Track Your Hydration Journey",
        description: "Stay healthy and hydrated with DrinkApp. Monitor your daily water intake, set reminders, and achieve your wellness goals.",
        siteName: "DrinkApp",
        images: [
            {
                url: "https://minjiya.com/images/drinkapp_2.png",
                width: 800,
                height: 600,
                alt: "DrinkApp Interface",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "DrinkApp - Track Your Hydration Journey",
        description: "Stay healthy and hydrated with DrinkApp. Monitor your daily water intake, set reminders, and achieve your wellness goals.",
        images: [
            {
                url: "https://minjiya.com/images/drinkapp_2.png",
                width: 800,
                height: 600,
                alt: "DrinkApp Interface",
            },
        ],
    },
};

export default function DrinkAppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={rubik.className}>
            <Analytics />
            {children}
            <SpeedInsights />
        </div>
    );
}
