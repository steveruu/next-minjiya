import Link from "next/link";
import Image from "next/image";

export default function Header({ ...props }) {
    return (
        <header className="hidden top-0 md:flex h-16 items-center gap-4 border-b border-b-zinc-800 bg-background px-4 md:px-6 bg-zinc-950 text-slate-200">
            <nav className="gap-6 font-medium flex flex-row justify-start items-center md:gap-5 text-sm lg:gap-6 font-rubik ">
                <Link
                    href="#"
                    className="hidden md:inline-flex items-center gap-6 text-muted-foreground transition-colors hover:text-foreground"
                >
                    <Image src="/mt.svg" alt="minjiya" width={50} height={50} className="flex-grow" />
                    {props.czech ? "domů" : "home"}
                </Link>
                <Link
                    href="#technologies"
                    className="hidden md:inline text-neutral-400 transition-colors hover:text-white"
                >
                    {props.czech ? "technologie" : "technologies"}
                </Link>
                <Link
                    href="#projects"
                    className="hidden md:inline text-neutral-400 transition-colors hover:text-white"
                >
                    {props.czech ? "naše projekty" : "our projects"}
                </Link>
                <Link
                    href="#contact-us"
                    className="hidden md:inline text-neutral-400 transition-colors hover:text-white"
                >
                    {props.czech ? "kontaktujte nás" : "contact us"}
                </Link>
            </nav>
        </header>
    );
}
