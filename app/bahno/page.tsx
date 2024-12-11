"use client";

import Link from "next/link";

export default function BahnoPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-[#2D5A27] to-[#1A3A18]">
            <nav className="p-6">
                <h1 className="text-3xl font-bold text-[#A7D49B]">Bahno 🍃</h1>
            </nav>

            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col items-center gap-12 md:flex-row md:justify-between">
                    <div className="max-w-xl space-y-6">
                        <h2 className="text-5xl font-bold text-[#C5E6B8]">
                            Průvodce světem kratomu
                        </h2>
                        <p className="text-xl text-[#A7D49B]">
                            Objevte bezpečné a zodpovědné užívání kratomu. Připojte se ke komunitě, která sdílí zkušenosti a podporuje správné praktiky užívání.
                        </p>
                        <div className="space-x-4">
                            <Link
                                href="#join"
                                className="inline-block rounded-lg bg-[#4A8C3F] px-6 py-3 text-lg font-medium text-white hover:bg-[#3F7535] transition-colors"
                            >
                                Stáhnout Bahno
                            </Link>
                            <Link
                                href="#learn-more"
                                className="inline-block rounded-lg border-2 border-[#4A8C3F] px-6 py-3 text-lg text-[#A7D49B] hover:bg-[#4A8C3F] hover:text-white transition-colors"
                            >
                                Zjistit více
                            </Link>
                        </div>
                    </div>

                    <div className="relative h-[600px] w-[300px]">
                        <div className="absolute inset-0 rounded-3xl bg-[#4A8C3F]/20 backdrop-blur-xl"></div>
                        <div className="absolute inset-4 rounded-2xl bg-[#1A3A18]"></div>
                    </div>
                </div>

                <section id="learn-more" className="mt-32">
                    <h3 className="text-center text-3xl font-bold text-[#C5E6B8] mb-16">
                        Poznejte svět kratomu bezpečně
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Bezpečné dávkování",
                                description: "Naučte se správně dávkovat a sledovat své užívání pro maximální bezpečnost"
                            },
                            {
                                title: "Druhy a účinky",
                                description: "Podrobný průvodce různými druhy kratomu a jejich specifickými účinky"
                            },
                            {
                                title: "Komunita",
                                description: "Sdílejte zkušenosti a získejte podporu od zkušených uživatelů"
                            }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="rounded-xl bg-[#2D5A27] p-6 text-[#A7D49B] hover:bg-[#4A8C3F] transition-colors"
                            >
                                <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="join" className="mt-32">
                    <div className="bg-[#2D5A27] rounded-2xl p-12">
                        <h3 className="text-center text-3xl font-bold text-[#C5E6B8] mb-8">
                            Stáhněte si Bahno
                        </h3>
                        <p className="text-center text-xl text-[#A7D49B] mb-12 max-w-2xl mx-auto">
                            Stáhněte si aplikaci Bahno a mějte přehled o svém užívání kratomu. Dostupné pro iOS i Android.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                            <a
                                href="#"
                                className="flex items-center space-x-4 bg-black hover:bg-gray-900 transition-colors rounded-lg px-8 py-4"
                            >
                                <svg className="h-8 w-8" viewBox="0 0 512 512" fill="white">
                                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                                </svg>
                                <div className="text-left">
                                    <div className="text-xs text-gray-300">Stáhnout na</div>
                                    <div className="text-lg font-semibold text-white">Google Play</div>
                                </div>
                            </a>
                            <a
                                href="#"
                                className="flex items-center space-x-4 bg-black hover:bg-gray-900 transition-colors rounded-lg px-8 py-4"
                            >
                                <svg className="h-8 w-8" viewBox="0 0 384 512" fill="white">
                                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                                </svg>
                                <div className="text-left">
                                    <div className="text-xs text-gray-300">Stáhnout na</div>
                                    <div className="text-lg font-semibold text-white">App Store</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
