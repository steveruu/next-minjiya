export default function TermsOfService() {
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
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span className="text-sm">Podmínky použití</span>
                    </div>
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
                        Podmínky použití služby
                    </h1>
                    <p className="text-indigo-200">
                        Poslední aktualizace: 6. února 2025
                    </p>
                </div>

                {/* Content Sections */}
                <div className="space-y-12">
                    {/* Introduction */}
                    <section className="bg-white/5 backdrop-blur-lg rounded-2xl p-8">
                        <h2 className="text-2xl font-semibold mb-4">Úvod</h2>
                        <p className="text-indigo-200 leading-relaxed">
                            Vítejte v aplikaci Stihni.to. Používáním naší
                            aplikace souhlasíte s těmito podmínkami použití.
                            Přečtěte si je prosím pečlivě před použitím
                            aplikace.
                        </p>
                    </section>

                    {/* Usage Terms */}
                    <section className="bg-white/5 backdrop-blur-lg rounded-2xl p-8">
                        <h2 className="text-2xl font-semibold mb-4">
                            Podmínky užívání
                        </h2>
                        <div className="space-y-4 text-indigo-200">
                            <p>
                                Aplikaci Stihni.to můžete používat pouze v
                                souladu s těmito podmínkami a platnými zákony.
                                Zavazujete se, že:
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2"></div>
                                    <span>
                                        Nebudete aplikaci používat způsobem,
                                        který by mohl poškodit, přetížit nebo
                                        narušit naše služby
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2"></div>
                                    <span>
                                        Nebudete se pokoušet získat neoprávněný
                                        přístup k našim systémům
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2"></div>
                                    <span>
                                        Nebudete aplikaci využívat ke komerčním
                                        účelům bez našeho souhlasu
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Disclaimer */}
                    <section className="bg-white/5 backdrop-blur-lg rounded-2xl p-8">
                        <h2 className="text-2xl font-semibold mb-4">
                            Vyloučení odpovědnosti
                        </h2>
                        <p className="text-indigo-200 leading-relaxed">
                            Aplikace Stihni.to poskytuje informace o spojích MHD
                            na základě dostupných dat. Nezaručujeme absolutní
                            přesnost těchto informací. Doporučujeme vždy počítat
                            s dostatečnou časovou rezervou.
                        </p>
                    </section>

                    {/* Changes to Terms */}
                    <section className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 ">
                        <h2 className="text-2xl font-semibold mb-4">
                            Změny podmínek
                        </h2>
                        <p className="text-indigo-200 leading-relaxed">
                            Vyhrazujeme si právo tyto podmínky kdykoliv změnit.
                            O významných změnách vás budeme informovat
                            prostřednictvím aplikace. Pokračováním v používání
                            aplikace po změně podmínek vyjadřujete souhlas s
                            novými podmínkami.
                        </p>
                    </section>

                    {/* Contact */}
                    <section className="bg-white/5 backdrop-blur-lg rounded-2xl p-8">
                        <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
                        <p className="text-indigo-200 mb-4">
                            Máte-li jakékoliv dotazy k těmto podmínkám,
                            kontaktujte nás na:
                        </p>
                        <a
                            href="mailto:tos@minjiya.com"
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
                            tos@minjiya.com
                        </a>
                    </section>
                </div>
            </div>
        </div>
    );
}
