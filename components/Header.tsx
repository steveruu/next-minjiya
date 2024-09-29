import Link from 'next/link'

export default function Header() {
    return (
        <header className="top-0 flex h-16 items-center gap-4 border-b border-b-zinc-800 bg-background px-4 md:px-6 bg-zinc-950 text-slate-200">
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 ">
                <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                >
                    Home
                </Link>
                <Link
                    href="#references"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                >
                    References
                </Link>
                <Link
                    href="#contact"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                >
                    Contact us
                </Link>
            </nav>
        </header>
    )
}