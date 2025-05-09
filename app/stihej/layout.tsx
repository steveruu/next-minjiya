import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";

const inter = Inter({
    subsets: ["latin", "latin-ext"],
    display: "swap",
    variable: "--font-inter",
});

const bricolage = Bricolage_Grotesque({
    subsets: ["latin", "latin-ext"],
    display: "swap",
    variable: "--font-bricolage",
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Stíhej! | Liberec Public Transport App",
    description: "Streamlined public transport navigation for Liberec. Get where you need to be, on time, every time.",
    keywords: ["public transport", "liberec", "transportation", "bus app", "tram app", "travel", "commute"],
};

export default function StihejLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`${inter.variable} ${bricolage.variable} font-sans bg-black text-white min-h-screen antialiased`}>
            {children}
        </div>
    );
}
