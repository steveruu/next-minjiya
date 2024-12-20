import Link from "next/link";
import Image from "next/image";

export default function Header({ ...props }) {
    return (
        <header className="fixed w-full z-50 backdrop-blur-md bg-zinc-950/80 border-b border-white/10">
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between h-16">
                    <Link
                        href="#"
                        className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity"
                    >
                        <Image
                            src="/mt.svg"
                            alt="minjiya"
                            width={40}
                            height={40}
                            className="transform hover:scale-105 transition-transform"
                        />
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        {[
                            { href: "#technologies", label: props.czech ? "technologie" : "technologies" },
                            { href: "#projects", label: props.czech ? "naše projekty" : "our projects" },
                            { href: "#contact-us", label: props.czech ? "kontaktujte nás" : "contact us" },
                        ].map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-gray-300 hover:text-white transition-colors duration-300 font-rubik text-sm"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    );
}
