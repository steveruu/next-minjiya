import type { Metadata } from 'next'
import { Lexend_Deca } from 'next/font/google'

const inter = Lexend_Deca({ subsets: ['latin', 'latin-ext'] })

export const metadata: Metadata = {
    title: 'Bahno | Průvodce světem kratomu',
    description: 'Objevte bezpečné a zodpovědné užívání kratomu. Připojte se ke komunitě, která sdílí zkušenosti a podporuje správné praktiky užívání.',
    keywords: ['kratom', 'bahno', 'průvodce', 'bezpečnost', 'komunita'],
    openGraph: {
        type: "website",
        url: "https://minjiya.com/bahno",
        title: 'Bahno | Průvodce světem kratomu',
        description: 'Objevte bezpečné a zodpovědné užívání kratomu.',
    },
    twitter: {
        card: "summary_large_image",
        title: 'Bahno | Průvodce světem kratomu',
        description: 'Objevte bezpečné a zodpovědné užívání kratomu.',
    },
}

export default function BahnoLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className={inter.className}>
            {children}
        </div>
    )
}
