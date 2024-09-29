import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    return (
        <header className="top-0 flex h-16 items-center gap-4 border-b border-b-zinc-800 bg-background px-4 md:px-6 bg-zinc-950 text-slate-200">
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 font-rubik ">

                <Link
                    href="#"
                    className="inline-flex items-center gap-6 text-muted-foreground transition-colors hover:text-foreground"
                >
                    <Image src="/mt.svg" alt="minjiya" width={50} height={50} />
                    home
                </Link>
                <Link
                    href="#technologies"
                    className="text-neutral-400 transition-colors hover:text-white"
                >
                    technologies
                </Link>
                <Link
                    href="#references"
                    className="text-neutral-400 transition-colors hover:text-white"
                >
                    references
                </Link>
                <Link
                    href="#contact"
                    className="text-neutral-400 transition-colors hover:text-white"
                >
                    contact us
                </Link>
            </nav>
        </header>
    )
}