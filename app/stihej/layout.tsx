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
    metadataBase: new URL("https://minjiya.com"),
    title: "Stíhej! | Aplikace pro libereckou MHD",
    description: "Zjednodušená navigace v liberecké MHD. Aktualizace v reálném čase, intuitivní rozhraní a chytré plánování pro tvůj každodenní pohyb městem.",
    keywords: ["MHD", "Liberec", "doprava", "autobusová aplikace", "tramvajová aplikace", "cestování", "dojíždění", "spoje", "jízdní řády"],
    authors: [{ name: "minjiya", url: "https://minjiya.com" }, { name: "steveruu", url: "https://stvr.cz" }],
    creator: "minjiya",
    publisher: "minjiya",
    applicationName: "Stíhej!",
    category: "travel",
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://minjiya.com/stihej",
    },
    openGraph: {
        type: "website",
        url: "https://minjiya.com/stihej",
        title: "Stíhej! | Aplikace pro libereckou MHD",
        description: "Zjednodušená navigace v liberecké MHD. Aktualizace v reálném čase, intuitivní rozhraní a chytré plánování pro tvůj každodenní pohyb městem.",
        siteName: "Stíhej!",
        locale: "cs_CZ",
        images: [
            {
                url: "https://minjiya.com/images/stihej-prev.png",
                width: 1659,
                height: 926,
                alt: "Stíhej! - Aplikace pro libereckou MHD",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Stíhej! | Aplikace pro libereckou MHD",
        description: "Zjednodušená navigace v liberecké MHD. Aktualizace v reálném čase, intuitivní rozhraní a chytré plánování.",
        images: [
            {
                url: "https://minjiya.com/images/stihej-prev.png",
                width: 1659,
                height: 926,
                alt: "Stíhej! - Aplikace pro libereckou MHD",
            },
        ],
        creator: "@steveruu",
    },
    appleWebApp: {
        capable: true,
        title: "Stíhej!",
        statusBarStyle: "black-translucent",
    },
    formatDetection: {
        telephone: true,
        email: true,
    },
    appLinks: {
        ios: {
            url: "https://apps.apple.com/us/app/st%C3%ADhej/id6744646794",
            app_store_id: "6744646794",
        },
    },
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
