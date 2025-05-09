import Image from "next/image";
import Link from "next/link";

export default function StihejPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 overflow-hidden bg-grid-pattern pt-16">
                <div className="absolute inset-0 z-0 opacity-10 mix-blend-difference">
                    <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-400 to-transparent opacity-30"></div>
                </div>

                <div className="z-10 max-w-6xl mx-auto text-center space-y-8">
                    <div className="inline-block mb-8 rounded-full px-6 py-2 border border-white/10 backdrop-blur-sm bg-white/5">
                        <span className="text-sm font-medium tracking-wider font-inter">LIBERECKÁ MHD, JEDNODUŠE</span>
                    </div>

                    <h1 className="text-5xl sm:text-7xl md:text-8xl  tracking-tight ">
                        <span className="block font-bold font-bricolage">Stíhej!</span>
                        <span className="block mt-2 text-3xl sm:text-4xl text-gray-400">Už nikdy nezmeškáš svůj spoj.</span>
                    </h1>

                    <p className="max-w-xl mx-auto text-lg text-gray-300 font-inter">
                        Zjednodušená navigace v liberecké MHD.
                        Aktualizace v reálném čase, intuitivní rozhraní a chytré plánování pro tvůj každodenní pohyb městem.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
                        <Link href="#download" className="rounded-lg bg-white text-black px-8 py-4 font-medium text-lg hover:bg-gray-200 transition-colors">
                            Stáhnout
                        </Link>
                        <Link href="#features" className="rounded-lg border border-white/20 backdrop-blur-sm bg-white/5 px-8 py-4 font-medium text-lg hover:bg-white/10 transition-colors">
                            Zjistit více
                        </Link>
                    </div>

                    <div className="mt-16 relative max-w-md mx-auto">
                        <div className="absolute -inset-10 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl opacity-20 z-0"></div>
                        <div className="relative z-10 shadow-2xl shadow-black/50 rounded-3xl overflow-hidden border border-white/20 backdrop-blur-md">
                            <Image
                                src="/images/app_mockup.png"
                                alt="Stíhej App Interface"
                                width={400}
                                height={800}
                                className="w-full h-auto"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section id="features" className="py-24 px-4 sm:px-6 md:px-8 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-bricolage">Chytré funkce pro MHD</h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto font-inter">
                            Navrženo s myšlenkou na každodenní cestování, Stíhej! přináší esenciální funkce, které usnadní tvou cestu.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className="p-8 rounded-2xl border border-white/10 backdrop-blur-sm bg-white/5 group hover:bg-white/10 transition-colors">
                            <div className="w-14 h-14 mb-6 rounded-xl bg-white flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-bricolage">Aktualizace v reálném čase</h3>
                            <p className="text-gray-400 font-inter">
                                Živé sledování autobusů a tramvají, které zajistí, že vždy budeš vědět, kdy tvůj spoj přijede.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl border border-white/10 backdrop-blur-sm bg-white/5 group hover:bg-white/10 transition-colors">
                            <div className="w-14 h-14 mb-6 rounded-xl bg-white flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4M9 7L15 4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-bricolage">Plánování trasy</h3>
                            <p className="text-gray-400 font-inter">
                                Chytrý algoritmus najde nejlepší cestu podle tvého cíle, času a preferencí.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl border border-white/10 backdrop-blur-sm bg-white/5 group hover:bg-white/10 transition-colors">
                            <div className="w-14 h-14 mb-6 rounded-xl bg-white flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.846 5.671a1 1 0 00.95.69h5.969c.969 0 1.371 1.24.588 1.81l-4.826 3.522a1 1 0 00-.364 1.118l1.846 5.671c.3.921-.755 1.688-1.54 1.118l-4.826-3.522a1 1 0 00-1.175 0l-4.826 3.522c-.784.57-1.838-.197-1.539-1.118l1.846-5.671a1 1 0 00-.364-1.118L2.28 11.1c-.783-.57-.38-1.81.588-1.81h5.969a1 1 0 00.95-.69L11.049 2.927z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-bricolage">Oblíbené zastávky</h3>
                            <p className="text-gray-400 font-inter">
                                Ulož si své nejčastěji používané zastávky pro rychlý přístup k odjezdům a informacím.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-black to-zinc-900">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-bricolage">Elegantně. Intuitivně. Svižně.</h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto font-inter">
                            Aplikace navržená pro maximální zážitek.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-white/10 via-white/20 to-white/10 blur opacity-0 transition-opacity"></div>
                                <div className="relative overflow-hidden rounded-2xl border border-white/10">
                                    <Image
                                        src={`/images/screen-${i}.png`}
                                        alt={`Screenshot aplikace ${i}`}
                                        width={400}
                                        height={800}
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="download" className="py-24 px-4 sm:px-6 md:px-8 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="rounded-3xl overflow-hidden border border-white/10 backdrop-blur-sm bg-white/5 p-12">
                        <div className="flex justify-center items-center">
                            <div className="text-center max-w-3xl mx-auto">
                                <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-bricolage">Stíhej! ještě dnes</h2>
                                <p className="text-xl text-gray-400 mb-8 font-inter">
                                    Stáhni si aplikaci a proměň své každodenní cestování v Liberci. <br /> K dispozici pro iOS a Android.
                                </p>

                                <div className="flex flex-wrap justify-center gap-4">
                                    <Link href="https://apps.apple.com/us/app/st%C3%ADhej/id6744646794" className="flex items-center rounded-lg border border-white/20 backdrop-blur-sm bg-white/5 px-6 py-3 hover:bg-white/10 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.33-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                        </svg>
                                        <div>
                                            <div className="text-xs">Stáhnout na</div>
                                            <div className="text-xl font-semibold">App Store</div>
                                        </div>
                                    </Link>

                                    <Link href="https://objects.githubusercontent.com/github-production-release-asset-2e65be/948370128/0ca827b8-051e-407e-9b70-176884d975d8?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=releaseassetproduction%2F20250509%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250509T101334Z&X-Amz-Expires=300&X-Amz-Signature=f1120f34faa34455e75efce2490f074dadcb2fd6c6521d96cef341addf0a1c82&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%3Dapplication-008494ca-c1eb-4bf4-99c1-6b9afdd87833.apk&response-content-type=application%2Fvnd.android.package-archive" className="flex items-center rounded-lg border border-white/20 backdrop-blur-sm bg-white/5 px-6 py-3 hover:bg-white/10 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" viewBox="0 0 256 150"><path fill="#FFFFFF" d="M255.285 143.47c-.084-.524-.164-1.042-.251-1.56a128.119 128.119 0 0 0-12.794-38.288 128.778 128.778 0 0 0-23.45-31.86 129.166 129.166 0 0 0-22.713-18.005c.049-.08.09-.168.14-.25 2.582-4.461 5.172-8.917 7.755-13.38l7.576-13.068c1.818-3.126 3.632-6.26 5.438-9.386a11.776 11.776 0 0 0 .662-10.484 11.668 11.668 0 0 0-4.823-5.536 11.85 11.85 0 0 0-5.004-1.61 11.963 11.963 0 0 0-2.218.018 11.738 11.738 0 0 0-8.968 5.798c-1.814 3.127-3.628 6.26-5.438 9.386l-7.576 13.069c-2.583 4.462-5.173 8.918-7.755 13.38-.282.487-.567.973-.848 1.467-.392-.157-.78-.313-1.172-.462-14.24-5.43-29.688-8.4-45.836-8.4-.442 0-.879 0-1.324.006-14.357.143-28.152 2.64-41.022 7.12a119.434 119.434 0 0 0-4.42 1.642c-.262-.455-.532-.911-.79-1.367-2.583-4.462-5.173-8.918-7.755-13.38L65.123 15.25c-1.818-3.126-3.632-6.259-5.439-9.386A11.736 11.736 0 0 0 48.5.048 11.71 11.71 0 0 0 43.49 1.66a11.716 11.716 0 0 0-4.077 4.063c-.281.474-.532.967-.742 1.473a11.808 11.808 0 0 0-.365 8.188c.259.786.594 1.554 1.023 2.296a3973.32 3973.32 0 0 1 5.439 9.386c2.53 4.357 5.054 8.713 7.58 13.069 2.582 4.462 5.168 8.918 7.75 13.38.02.038.046.075.065.112A129.184 129.184 0 0 0 45.32 64.38a129.693 129.693 0 0 0-22.2 24.015 127.737 127.737 0 0 0-9.34 15.24 128.238 128.238 0 0 0-10.843 28.764 130.743 130.743 0 0 0-1.951 9.524c-.087.518-.167 1.042-.247 1.56A124.978 124.978 0 0 0 0 149.118h256c-.205-1.891-.449-3.77-.734-5.636l.019-.012Z" /><path fill="#202124" d="M194.59 113.712c5.122-3.41 5.867-11.3 1.661-17.62-4.203-6.323-11.763-8.682-16.883-5.273-5.122 3.41-5.868 11.3-1.662 17.621 4.203 6.322 11.764 8.682 16.883 5.272ZM78.518 108.462c4.206-6.321 3.46-14.21-1.662-17.62-5.123-3.41-12.68-1.05-16.886 5.27-4.203 6.323-3.458 14.212 1.662 17.622 5.122 3.41 12.683 1.05 16.886-5.272Z" /></svg>
                                        <div>
                                            <div className="text-xs">STÁHNOUT</div>
                                            <div className="text-xl font-semibold">.apk</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-12 px-4 sm:px-6 md:px-8 bg-black border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-8 md:mb-0">
                            <div className="text-2xl font-bold mb-3 font-bricolage">minjiya</div>
                            <p className="text-gray-400 max-w-md font-inter">
                                Tvoříme aplikace budoucnosti
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-8">
                            <div>
                                <h3 className="text-sm font-semibold uppercase mb-4 font-bricolage">Kontakt</h3>
                                <ul className="space-y-3 text-gray-400 font-inter">
                                    <li>
                                        <a href="mailto:stihej@minjiya.com" className="hover:text-white transition-colors">
                                            stihej@minjiya.com
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold uppercase mb-4 font-bricolage">Právní</h3>
                                <ul className="space-y-3 text-gray-400 font-inter">
                                    <li>
                                        <a href="/stihni-to/privacy" className="hover:text-white transition-colors">
                                            Ochrana soukromí
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/stihni-to/tos" className="hover:text-white transition-colors">
                                            Podmínky použití
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold uppercase mb-4 font-bricolage">Sociální Sítě</h3>
                                <div className="flex gap-4">
                                    <a href="https://x.com/minjiyalabs" className="hover:text-white transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
                                        </svg>
                                    </a>
                                    <a href="https://www.instagram.com/minjiyalabs" className="hover:text-white transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm font-inter">
                        © {new Date().getFullYear()} minjiya. Všechna práva vyhrazena.
                    </div>
                </div>
            </footer>
        </main>
    );
}
