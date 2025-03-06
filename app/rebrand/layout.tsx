import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import "../globals.css";
import dynamic from "next/dynamic";

// Dynamically import analytics components with no SSR to reduce initial load
const Analytics = dynamic(
    () => import("@vercel/analytics/react").then((mod) => mod.Analytics),
    { ssr: false }
);

const SpeedInsights = dynamic(
    () =>
        import("@vercel/speed-insights/next").then((mod) => mod.SpeedInsights),
    { ssr: false }
);

// Modern sans-serif font for body text with display swap
const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
});

// Elegant serif font for headings with display swap
const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-serif",
    display: "swap",
});

export const metadata: Metadata = {
    title: "čas na rebrand? | minjiya",
    description:
        "Připravujeme pro vás nový design. Sledujte náš prostor pro nejnovější aktualizace.",
    openGraph: {
        title: "čas na rebrand? | minjiya",
        description:
            "Připravujeme pro vás nový design. Sledujte náš prostor pro nejnovější aktualizace.",
        type: "website",
    },
};

export default function RebrandLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            <div
                className={cn(
                    "min-h-screen bg-background font-sans antialiased selection:bg-primary/20 selection:text-primary will-change-auto",
                    outfit.variable,
                    playfair.variable
                )}
            >
                <main className="flex-1">{children}</main>
                <Analytics />
                <SpeedInsights />
            </div>
        </ThemeProvider>
    );
}
