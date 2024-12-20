import type { Metadata } from 'next'
import { Lexend_Deca } from 'next/font/google'

const inter = Lexend_Deca({ subsets: ['latin', 'latin-ext'] })

export const metadata: Metadata = {
    title: "Bahno",
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
