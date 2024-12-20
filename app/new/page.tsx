import Header from "@/components/Header";
import CodePreview from "@/components/CodePreview";
import Technologies from "@/components/Technologies";
import Image from "next/image";
import { FaArrowDown, FaEnvelope, FaGithub, FaInstagram } from "react-icons/fa6";
import Form from "@/components/Form";
import OurProjects from "@/components/OurProjects";

export default function CzechHome() {
    return (
        <>
            {/* Hero Section with gradient background */}
            <div className="relative min-h-screen bg-gradient-to-b from-minjiya via-minjiya/95 to-minjiya/90 overflow-x-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

                <Header czech />

                {/* Hero Content */}
                <div className="relative container mx-auto px-4 pt-[4rem] xl:pt-[8rem] pb-20">
                    <div className="flex flex-col xl:flex-row items-center justify-between gap-16 xl:gap-24">
                        {/* Left side - Logo & Title */}
                        <div className="flex flex-col items-center xl:items-start xl:w-1/2">
                            <div className="relative group">
                                <Image
                                    src="mt.svg"
                                    alt="minjiya"
                                    width={275}
                                    height={148}
                                    draggable={false}
                                    loading="eager"
                                    className="transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute -inset-4 bg-purpur/20 rounded-full blur-3xl group-hover:bg-purpur/30 transition-all duration-300 opacity-75" />
                            </div>

                            <h1 className="text-4xl sm:text-5xl mt-8 mb-3 font-rubik font-bold text-white text-center xl:text-left">
                                minjiya
                            </h1>
                            <h2 className="hidden md:block text-2xl font-stick text-neutral-300 tracking-wider">
                                みんじや
                            </h2>
                        </div>

                        {/* Right side - Code Preview */}
                        <div className="xl:w-1/2">
                            <CodePreview />
                        </div>
                    </div>
                    {/* Scroll indicator */}
                    <div className="mt-20 text-center">
                        <h3 className="text-3xl md:text-4xl font-rubik font-medium tracking-wide text-white mb-8">
                            Tvoříme <span className="text-purpur font-semibold">budoucnost</span>
                        </h3>
                        <a href="#technologies"
                            className="inline-block group transition-transform hover:-translate-y-1">
                            <FaArrowDown className="text-3xl text-white/80 group-hover:text-white animate-bounce" />
                        </a>
                    </div>
                </div>
            </div>
            {/* Technologies Section */}
            <div id="technologies" className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-center text-2xl sm:text-4xl font-rubik font-bold mb-20">
                        pomocí{" "}
                        <span className="text-purpur bg-gradient-to-r from-purpur/10 to-transparent px-4 py-2 rounded-lg">
                            cutting-edge technologií.
                        </span>
                    </h2>
                    <Technologies />
                    <OurProjects />
                </div>
            </div>
            {/* Contact Section */}
            <div id="contact-us" className="relative bg-minjiya py-24">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purpur/5 to-purpur/10" />
                <div className="container mx-auto px-4 relative">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl text-center font-rubik font-bold text-white mb-4">
                            Kontaktujte nás
                        </h2>
                        <p className="text-xl text-center text-neutral-300 font-rubik mb-12">
                            Máte otázky nebo zájem o spolupráci? Neváhejte se nám ozvat!
                        </p>

                        {/* Social Links */}
                        <div className="flex flex-wrap gap-6 justify-center mb-12">
                            {[
                                { icon: FaEnvelope, label: "Email", href: "mailto:inquiries@minjiya.com" },
                                { icon: FaInstagram, label: "Instagram", href: "https://instagram.com/minjiyalabs" },
                                { icon: FaGithub, label: "GitHub", href: "https://github.com/minjiyalabs" },
                            ].map(({ icon: Icon, label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
                                    target="_blank"
                                >
                                    <Icon className="text-lg" />
                                    <span>{label}</span>
                                </a>
                            ))}
                        </div>

                        <Form czech />
                    </div>
                </div>
            </div>
            {/* Footer */}
            <footer className="bg-neutral-900 py-8 px-4">
                <p className="text-neutral-400 text-center text-sm max-w-3xl mx-auto">
                    minjiya není nijak spojena s Tailwind CSS,
                    Next.js, React, Go, TypeScript, Prisma, Expo či jejich vývojáři. Všechny obchodní značky a ochranné známky jsou vlastnictvím jejich příslušných vlastníků.
                </p>
            </footer>
        </>
    );
}
