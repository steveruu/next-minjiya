import Header from "@/components/Header";
import dynamic from 'next/dynamic';
import Image from "next/image";
import { FaArrowDown, FaEnvelope, FaGithub, FaInstagram, FaCode, FaRocket } from "react-icons/fa6";
import Script from "next/script";

const CodePreview = dynamic(() => import("@/components/CodePreview"), { ssr: true });
const Technologies = dynamic(() => import("@/components/Technologies"), { ssr: false });
const OurProjects = dynamic(() => import("@/components/OurProjects"), { ssr: false });
const Form = dynamic(() => import("@/components/Form"), { ssr: false });

export default function CzechHome() {
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "minjiya",
        "url": "https://minjiya.com",
        "logo": "https://minjiya.com/mt.png",
        "description": "Tvoříme webové a mobilní aplikace budoucnosti. Profesionální vývoj s důrazem na design a uživatelskou zkušenost.",
        "sameAs": [
            "https://github.com/minjiya",
            "https://instagram.com/minjiya"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "email": "info@minjiya.com"
        },
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "CZ"
        }
    };

    return (
        <>
            <Script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
                strategy="afterInteractive"
            />
            <div className="relative min-h-screen bg-gradient-to-b from-black to-purple-950/100 overflow-x-hidden">
                <Header czech />

                <div className="min-h-[calc(100dvh)] flex flex-col justify-between py-8 lg:py-16">
                    <div className="container mx-auto mt-2 md:mt-16 px-4 flex-grow flex items-center">
                        <div className="flex flex-col xl:flex-row flex-grow items-center justify-center gap-8 lg:gap-16">
                            <div className="flex flex-col items-center lg:items-start lg:w-1/2 max-w-xl">
                                <div className="relative group">
                                    <Image
                                        src="/mt2.webp"
                                        alt="minjiya"
                                        width={200}
                                        height={108}
                                        draggable={false}
                                        className="transition-all duration-500 sm:w-[275px] sm:h-[148px]"
                                        priority
                                    />
                                </div>

                                <h1 className="text-3xl sm:text-5xl lg:text-6xl mt-4 sm:mt-8 mb-2 sm:mb-3 font-rubik font-bold text-center lg:text-left">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-purple-100">
                                        minjiya
                                    </span>
                                </h1>
                                <h2 className="hidden md:block text-2xl font-stick text-white/80 tracking-wider hover:text-white transition-colors duration-300">
                                    みんじや
                                </h2>
                            </div>

                            <div className="lg:w-1/2 max-w-xl mt-4 sm:mt-8 lg:mt-0">
                                <CodePreview />
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto px-4 text-center mt-8 lg:mt-0">
                        <h3 className="text-2xl md:text-4xl font-rubik font-medium tracking-wide mb-4 sm:mb-8 px-4">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-purple-200">
                                Tvoříme{" "}
                            </span>
                            <span className="text-purpur font-semibold relative inline-block">
                                budoucnost ✨
                            </span>
                        </h3>
                        <a href="#technologies"
                            className="inline-block group transition-all hover:-translate-y-1 p-3 rounded-full hover:bg-white/5 backdrop-blur-sm animate-bounce">
                            <FaArrowDown className="text-2xl sm:text-3xl text-white/70 group-hover:text-white" />
                        </a>
                    </div>
                </div>
            </div>

            <div id="technologies" className="py-32 bg-gradient-to-b from-white to-purple-50">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center gap-4 mb-20">
                        <FaCode className="hidden md:block text-3xl text-purpur" />
                        <h2 className="text-center text-2xl md:text-4xl font-rubik font-bold leading-[3rem] ">
                            pomocí{" "}
                            <span className="text-purpur bg-purpur/10 px-4 py-2 rounded-lg shadow-sm">
                                cutting‑edge
                            </span>
                            {" "} technologií.
                        </h2>
                    </div>
                    <Technologies />
                    <OurProjects />
                </div>
            </div>

            <div id="contact-us" className="relative bg-gradient-to-b from-purple-950  to-purpur/90 py-32">
                <div className="container mx-auto px-4 relative">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <FaRocket className="text-3xl text-white" />
                            <h2 className="text-4xl md:text-5xl text-center font-rubik font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
                                Kontaktujte nás
                            </h2>
                        </div>
                        <p className="text-xl text-center text-neutral-300 font-rubik mb-12">
                            Máte otázky nebo zájem o spolupráci? Neváhejte se nám ozvat!
                        </p>

                        <div className="flex flex-row flex-wrap gap-2 md:gap-6 justify-center mb-12">
                            {[
                                { icon: FaEnvelope, label: "Email", href: "mailto:inquiries@minjiya.com" },
                                { icon: FaInstagram, label: "Instagram", href: "https://instagram.com/minjiyalabs" },
                                { icon: FaGithub, label: "GitHub", href: "https://github.com/minjiyalabs" },
                            ].map(({ icon: Icon, label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                                    target="_blank"
                                    rel="noopener noreferrer"
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

            <footer className="bg-neutral-900 py-8 px-4 border-t border-neutral-800">
                <p className="text-neutral-400 text-center text-sm max-w-3xl mx-auto hover:text-neutral-300 transition-colors duration-300">
                    minjiya není nijak spojena s Tailwind CSS,
                    Next.js, React, Go, TypeScript, Prisma, Expo či jejich vývojáři. <br />Všechny obchodní značky a ochranné známky jsou vlastnictvím jejich příslušných vlastníků.
                </p>
            </footer>
        </>
    );
}
