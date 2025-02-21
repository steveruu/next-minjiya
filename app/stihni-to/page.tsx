import { BusFront, Clock, MapPin, Smartphone } from "lucide-react";
import Image from "next/image";
import { FaApple, FaStar } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";

export default function StihniTo() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-600 via-indigo-700 to-indigo-900 text-white">
            <nav className="absolute top-0 w-full z-10 bg-gradient-to-b from-black/20 to-transparent">
                <div className="container mx-auto px-4 py-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/images/stihni-to.svg"
                            alt="Stihni.to logo"
                            width={32}
                            height={32}
                            className="w-8 h-8"
                        />
                        <span className="text-xl font-bold">Stihni.to</span>
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                        <a
                            href="#features"
                            className="hover:text-indigo-200 transition-colors"
                        >
                            Funkce
                        </a>
                        <a
                            href="#download"
                            className="hover:text-indigo-200 transition-colors"
                        >
                            Stáhnout
                        </a>
                    </div>
                </div>
            </nav>

            <div className="container mx-auto px-4 pt-32 pb-16">
                <div className="text-center max-w-6xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full mb-8">
                        <FaStar className="w-4 h-4 text-yellow-400" />
                        <h2 className="text-sm">
                            Nejlepší aplikace pro MHD v Liberci
                        </h2>
                    </div>
                    <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent lg:h-[5rem]">
                        Stihni každý spoj v Liberci
                    </h1>
                    <h3 className="text-xl md:text-2xl text-indigo-200 mb-12 leading-relaxed">
                        Už žádné zbytečné čekání na zastávce! Víme přesně, kdy
                        vám jede další spoj!
                    </h3>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <a
                            href="#download"
                            className="group bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-100 transition-all duration-200 flex items-center gap-2 w-full sm:w-auto justify-center"
                        >
                            <MdDownload className="w-5 h-5" />
                            Stáhnout
                        </a>
                    </div>
                    {/* Stats */}
                    <div className="flex items-center justify-center gap-8 text-indigo-200">
                        <div>
                            <div className="font-bold text-2xl">15+</div>
                            <div className="text-sm">linek MHD</div>
                        </div>
                        <div className="w-px h-12 bg-indigo-200/20"></div>
                        <div>
                            <div className="font-bold text-2xl">24/7</div>
                            <div className="text-sm">dostupnost</div>
                        </div>
                        <div className="w-px h-12 bg-indigo-200/20"></div>
                        <div>
                            <div className="font-bold text-2xl">200+</div>
                            <div className="text-sm">zastávek</div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 text-center relative">
                    <div className="bg-gradient-to-b from-[#1a1f2d] to-[#2a2f3d] inline-block rounded-[3rem]  min-[400px]:p-5 shadow-2xl  duration-500">
                        <div className="overflow-hidden rounded-[2.5rem] w-[320px]">
                            <Image
                                src="/images/stihni-to.png"
                                alt="Stihni.to aplikace"
                                width={320}
                                height={680}
                                className="w-full"
                                quality={100}
                                priority
                            />
                        </div>
                    </div>
                </div>

                <div
                    id="features"
                    className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-32"
                >
                    <div className="group bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/15 transition-all duration-300 cursor-default">
                        <div className="flex items-center mb-4">
                            <div className="p-3 bg-indigo-500/20 rounded-lg group-hover:bg-indigo-500/30 transition-colors">
                                <Clock className="w-6 h-6 text-indigo-300" />
                            </div>
                            <h2 className="text-xl font-semibold ml-4">
                                Víme, kdy vám to jede
                            </h2>
                        </div>
                        <p className="text-indigo-200 leading-relaxed">
                            Žádné zbytečné čekání na zastávce. Ukážeme vám
                            přesné časy odjezdů, ať víte, kdy vyrazit z domu.
                        </p>
                    </div>

                    <div className="group bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/15 transition-all duration-300 cursor-default">
                        <div className="flex items-center mb-4">
                            <div className="p-3 bg-indigo-500/20 rounded-lg group-hover:bg-indigo-500/30 transition-colors">
                                <MapPin className="w-6 h-6 text-indigo-300" />
                            </div>
                            <h2 className="text-xl font-semibold ml-4">
                                Zastávky poblíž
                            </h2>
                        </div>
                        <p className="text-indigo-200 leading-relaxed">
                            Ať jste kdekoli v Liberci nebo Jablonci, ukážeme vám
                            nejbližší zastávky jedním kliknutím.
                        </p>
                    </div>

                    <div className="group bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/15 transition-all duration-300 cursor-default">
                        <div className="flex items-center mb-4">
                            <div className="p-3 bg-indigo-500/20 rounded-lg group-hover:bg-indigo-500/30 transition-colors">
                                <BusFront className="w-6 h-6 text-indigo-300" />
                            </div>
                            <h2 className="text-xl font-semibold ml-4">
                                Všechny spoje pohromadě
                            </h2>
                        </div>
                        <p className="text-indigo-200 leading-relaxed">
                            Tramvaje i autobusy na jednom místě. Jednoduchý
                            přehled všech linek liberecké MHD.
                        </p>
                    </div>

                    <div className="group bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/15 transition-all duration-300 cursor-default">
                        <div className="flex items-center mb-4">
                            <div className="p-3 bg-indigo-500/20 rounded-lg group-hover:bg-indigo-500/30 transition-colors">
                                <Smartphone className="w-6 h-6 text-indigo-300" />
                            </div>
                            <h2 className="text-xl font-semibold ml-4">
                                Jednoduše a rychle
                            </h2>
                        </div>
                        <p className="text-indigo-200 leading-relaxed">
                            Aplikace, se kterou si budete rozumět. Bez složitého
                            nastavování, prostě to funguje.
                        </p>
                    </div>
                </div>

                <div id="download" className="text-center mt-32">
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6">Stáhněte si Stihni.to</h2>
                        <p className="text-indigo-200 mb-8 max-w-2xl mx-auto">
                            Objevte revoluční způsob cestování libereckou MHD.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href="https://apps.apple.com/us/app/stihni-to/id6741535473"
                                target="_blank"
                                className="group bg-white hover:bg-white/90 text-indigo-600 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 w-full sm:w-auto justify-center transition-colors"
                            >
                                <FaApple className="w-5 h-5" />
                                Stáhnout pro iOS
                            </a>
                            <a
                                href="https://minjiya.com/bin/stihni-to.apk"
                                target="_blank"
                                className="group bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 w-full sm:w-auto justify-center transition-colors"
                            >
                                <FaAndroid className="w-5 h-5" />
                                Stáhnout pro Android
                                <span className="bg-white/10 px-2 py-1 rounded text-sm ml-2">
                                    .apk
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                <footer className="mt-32 mb-8 border-t border-indigo-200/10 pt-8">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <div className="flex items-center gap-2 mb-4">
                            <Image
                                src="/images/stihni-to.svg"
                                alt="Stihni.to logo"
                                width={24}
                                height={24}
                                className="w-6 h-6"
                                draggable={false}
                                loading="eager"
                            />
                            <span className="font-semibold">Stihni.to</span>
                        </div>
                        <div className="flex gap-8 mb-6">
                            <a
                                href="/stihni-to/privacy"
                                className="text-indigo-200 hover:text-white transition-colors"
                            >
                                Ochrana soukromí
                            </a>
                            <a
                                href="/stihni-to/tos"
                                className="text-indigo-200 hover:text-white transition-colors"
                            >
                                Podmínky použití
                            </a>
                        </div>
                        <p className="text-indigo-200/80 text-sm">
                            &copy; 2025 minjiya. Všechna práva vyhrazena.
                        </p>
                        <p className="text-indigo-200/80 text-xs">
                            Vytvořil{" "}
                            <a
                                href="https://stvr.cz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-indigo-300 transition-colors duration-200"
                            >
                                @steveruu
                            </a>{" "}
                            v rámci{" "}
                            <a
                                href="/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-indigo-300 transition-colors duration-200"
                            >
                                @minjiyalabs
                            </a>
                        </p>
                        <p className="text-indigo-200/60 text-xs max-w-md text-center">
                            <a
                                href="https://github.com/google/material-design-icons/blob/master/LICENSE"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Ikona &quot;subway-variant&quot; je součástí
                                knihovny Material Design Icons od společnosti
                                Google a je používána v souladu s podmínkami
                                licence Apache License 2.0. Tento symbol není
                                registrovanou ochrannou známkou.
                            </a>
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
}
