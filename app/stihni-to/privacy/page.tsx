export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-600 via-indigo-700 to-indigo-900 text-white">
            {/* Navigation Bar */}
            <nav className="absolute top-0 w-full z-10 bg-gradient-to-b from-black/20 to-transparent">
                <div className="container mx-auto px-4 py-6">
                    <a
                        href="/stihni-to"
                        className="flex items-center gap-2 w-fit group"
                    >
                        <svg
                            className="w-6 h-6 transition-transform group-hover:-translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        <span className="text-sm">Zpět na hlavní stránku</span>
                    </a>
                </div>
            </nav>

            {/* Main Content */}
            <div className="container mx-auto px-4 pt-32 pb-16 max-w-4xl">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full mb-6">
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 15v2m0 0v2m0-2h2m-2 0H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span className="text-sm">Ochrana soukromí</span>
                    </div>
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
                        Zásady ochrany osobních údajů
                    </h1>
                    <p className="text-indigo-200">
                        Poslední aktualizace: 6. února 2025
                    </p>
                </div>

                {/* Content Sections */}
                <div className="space-y-12">
                    {/* Overview Section */}
                    <section className="bg-white/5 backdrop-blur-lg rounded-2xl p-8">
                        <h2 className="text-2xl font-semibold mb-4">Přehled</h2>
                        <p className="text-indigo-200 leading-relaxed">
                            Vítejte v aplikaci Stihni.to. Vaše soukromí je pro
                            nás prioritou. Tato politika ochrany osobních údajů
                            vysvětluje, jaké informace shromažďujeme a jak je
                            používáme.
                        </p>
                    </section>

                    {/* Data Collection Section */}
                    <section className="bg-white/5 backdrop-blur-lg rounded-2xl p-8">
                        <h2 className="text-2xl font-semibold mb-4">
                            Shromažďované údaje
                        </h2>
                        <p className="text-indigo-200 mb-6">
                            Aplikace Stihni.to je navržena s důrazem na
                            minimální sběr dat. Shromažďujeme pouze následující
                            údaje:
                        </p>
                        <div className="bg-white/5 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-indigo-500/20 rounded-lg">
                                    <svg
                                        className="w-6 h-6 text-indigo-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                        />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold mb-2">
                                        Údaje o používání aplikace
                                    </h3>
                                    <p className="text-indigo-200 mb-4">
                                        Prostřednictvím platformy Expo sbíráme
                                        anonymní statistiky o používání
                                        aplikace, které zahrnují:
                                    </p>
                                    <ul className="space-y-2 text-indigo-200">
                                        <li className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                                            Verzi aplikace
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                                            Typ zařízení a operační systém
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                                            Základní metriky výkonu aplikace
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <p className="text-indigo-200 mt-6">
                            Data nejsou žádným způsobem spojována s osobními
                            údaji uživatele.
                        </p>
                    </section>

                    {/* Other sections following the same pattern... */}
                    <section className="bg-white/5 backdrop-blur-lg rounded-2xl p-8">
                        <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
                        <p className="text-indigo-200 mb-4">
                            V případě dotazů ohledně ochrany osobních údajů nás
                            můžete kontaktovat na:
                        </p>
                        <a
                            href="mailto:privacy@minjiya.com"
                            className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                            privacy@minjiya.com
                        </a>
                    </section>
                </div>
            </div>
        </div>
    );
}
