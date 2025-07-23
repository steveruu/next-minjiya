"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Header({ ...props }) {
    return (
        <motion.header
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed w-full z-50 backdrop-blur-sm bg-minjiya/90 border-b border-white/5 will-change-transform transform-gpu"
        >
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between h-16">
                    <a
                        href="#"
                        className="flex items-center justify-center gap-3 flex-1 md:flex-none text-white hover:opacity-80 transition-opacity"
                    >
                        <Image
                            src="/mt-newgen.svg"
                            alt="minjiya"
                            width={36}
                            height={36}
                            className="transform hover:scale-105 transition-transform "
                        />
                    </a>

                    <div className="hidden md:flex items-center gap-8">
                        {[
                            { href: "#technologies", label: props.czech ? "technologie" : "technologies" },
                            { href: "#projects", label: props.czech ? "naše projekty" : "our projects" },
                            { href: "#contact-us", label: props.czech ? "kontaktujte nás" : "contact us" },
                        ].map((item, index) => (
                            <motion.a
                                key={item.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 * index }}
                                href={item.href}
                                className="text-white/80 hover:text-white transition-colors duration-300 font-medium text-sm uppercase tracking-wide relative group"
                            >
                                {item.label}
                                <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-white/0 group-hover:bg-white/60 transform origin-left transition-all duration-300 scale-x-0 group-hover:scale-x-100"></span>
                            </motion.a>
                        ))}
                    </div>

                    {/* Social Media Links for minjiyalabs */}
                    <div className="flex items-center gap-3">
                        <a
                            href="https://github.com/minjiyalabs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                            aria-label="GitHub minjiyalabs"
                        >
                            <FaGithub className="text-lg" />
                        </a>
                        <a
                            href="https://x.com/minjiyalabs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                            aria-label="X minjiyalabs"
                        >
                            <FaXTwitter className="text-lg" />
                        </a>
                        <a
                            href="https://instagram.com/minjiyalabs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                            aria-label="Instagram minjiyalabs"
                        >
                            <FaInstagram className="text-lg" />
                        </a>
                    </div>
                </nav>
            </div>
        </motion.header>
    );
}
