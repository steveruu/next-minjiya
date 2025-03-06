import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import "../globals.css";

// Modern sans-serif font for body text
const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-sans",
});

// Elegant serif font for headings
const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-serif",
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
                    "min-h-screen bg-background font-sans antialiased selection:bg-primary/20 selection:text-primary",
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
