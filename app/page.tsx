"use client";

import Header from "@/components/Header";
import dynamic from 'next/dynamic';
import Image from "next/image";
import { FaArrowDown, FaEnvelope, FaGithub, FaInstagram, FaCode, FaRocket } from "react-icons/fa6";
import Script from "next/script";
import { motion } from "framer-motion";

const CodePreview = dynamic(() => import("@/components/CodePreview"), { ssr: true });
const Technologies = dynamic(() => import("@/components/Technologies"), { ssr: false });
const OurProjects = dynamic(() => import("@/components/OurProjects"), { ssr: false });
const Form = dynamic(() => import("@/components/Form"), { ssr: false });

import { Sparkles } from "lucide-react";

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
            <div className="relative min-h-screen bg-minjiya overflow-x-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/10 via-[#a78bfa]/5 to-[#ec4899]/10 pointer-events-none opacity-70"></div>

                <Header czech />

                <div className="min-h-[calc(100dvh)] flex flex-col justify-between py-8 lg:py-16">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf610_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf610_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
                    <div className="container mx-auto mt-2 md:mt-16 px-4 flex-grow flex items-center">
                        <div className="flex flex-col xl:flex-row flex-grow items-center justify-center gap-8 lg:gap-16">
                            <div className="flex flex-col items-center lg:items-start lg:w-1/2 max-w-xl">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="relative group"
                                >
                                    <Image
                                        src="/mt-newgen.svg"
                                        alt="minjiya"
                                        width={200}
                                        height={108}
                                        draggable={false}
                                        className="transition-all duration-500 sm:w-[275px] sm:h-[148px] mt-10 sm:mt-0"
                                        priority
                                    />
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                                    className="text-3xl sm:text-5xl lg:text-6xl mt-4 sm:mt-8 mb-2 sm:mb-3 font-bold text-center lg:text-left"
                                >
                                    <span className="text-white">
                                        minjiya
                                    </span>
                                </motion.h1>
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                                    className="hidden md:block text-2xl font-stick text-white/80 tracking-wider hover:text-white transition-colors duration-300"
                                >
                                    みんじや
                                </motion.h2>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                                className="lg:w-1/2 max-w-xl mt-4 sm:mt-8 lg:mt-0"
                            >
                                <CodePreview />
                            </motion.div>
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                        className="container mx-auto px-4 text-center mt-8 lg:mt-0"
                    >
                        <h3 className="text-2xl md:text-4xl font-medium tracking-tight mb-4 sm:mb-8 px-4">
                            <span className="text-white">
                                Tvoříme{" "}
                            </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] via-[#a78bfa] to-[#ec4899] font-semibold relative inline-block">
                                budoucnost
                                <Sparkles className="inline-flex items-center text-[#e2549b] ml-4 mb-2" size={30} />
                            </span>
                        </h3>
                        <motion.a
                            href="#technologies"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4, duration: 0.4 }}
                            className="inline-block group transition-all hover:-translate-y-1 p-3 rounded-none animate-bounce"
                        >
                            <FaArrowDown className="text-2xl sm:text-3xl text-white/70 group-hover:text-white" />
                        </motion.a>
                    </motion.div>
                </div>
            </div>

            <div id="technologies" className="py-32 bg-[#f5f5f5]">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center justify-center gap-4 mb-20"
                    >
                        <FaCode className="hidden md:block text-3xl text-[#8b5cf6]" />
                        <h2 className="text-center text-2xl md:text-4xl font-bold leading-[3rem] text-minjiya">
                            pomocí{" "}
                            <span className="text-[#8b5cf6] bg-gradient-to-r from-[#8b5cf6]/10 via-[#a78bfa]/10 to-[#ec4899]/10 px-4 py-2 shadow-sm uppercase tracking-wider">
                                cutting–edge
                            </span>
                            {" "} technologií.
                        </h2>
                    </motion.div>
                    <Technologies />
                    <OurProjects />
                </div>
            </div>

            <div id="contact-us" className="relative bg-minjiya py-32">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/10 via-[#a78bfa]/5 to-[#ec4899]/10 pointer-events-none opacity-70"></div>

                <div className="container mx-auto px-4 relative">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center justify-center gap-4 mb-4"
                        >
                            <FaRocket className="text-3xl text-[#ec4899]" />
                            <h2 className="text-4xl md:text-5xl text-center font-bold text-white tracking-tight">
                                Kontaktujte nás
                            </h2>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-xl text-center text-white/70 mb-12"
                        >
                            Máte otázky nebo zájem o spolupráci? Neváhejte se nám ozvat!
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-row flex-wrap gap-2 md:gap-6 justify-center mb-12"
                        >
                            {[
                                { icon: FaEnvelope, label: "Email", href: "mailto:inquiries@minjiya.com" },
                                { icon: FaInstagram, label: "Instagram", href: "https://instagram.com/minjiyalabs" },
                                { icon: FaGithub, label: "GitHub", href: "https://github.com/minjiyalabs" },
                            ].map(({ icon: Icon, label, href }, index) => (
                                <motion.a
                                    key={label}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                                    href={href}
                                    className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white transition-all duration-300 hover:scale-105 hover:shadow-sm uppercase tracking-widest text-xs border border-white/10"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon className="text-lg" />
                                    <span>{label}</span>
                                </motion.a>
                            ))}
                        </motion.div>

                        <Form czech />
                    </div>
                </div>
            </div>

            <footer className="bg-[#0a0a0a] py-8 px-4 border-t border-white/5">
                <p className="text-white/40 text-center text-sm max-w-3xl mx-auto hover:text-white/60 transition-colors duration-300">
                    Mezi minjiya a Tailwind CSS, Next.js, React, Go, TypeScript, Prisma, Expo neexistují žádné vazby. <br />Všechny obchodní značky a ochranné známky jsou vlastnictvím jejich příslušných vlastníků.
                </p>
            </footer>
        </>
    );
}
