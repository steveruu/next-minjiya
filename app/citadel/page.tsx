import Image from "next/image";
import Link from "next/link";
import {
    ArrowDownToLine,
    BookText,
    CheckCheck,
    Wind,
    Sun,
    Moon,
    Target,
} from "lucide-react";
import { FaApple as Apple, FaGooglePlay as Play } from "react-icons/fa";

export default function CitadelPage() {
    return (
        <main className="font-sans-citadel">
            <section className="relative isolate">
                <div
                    className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(0,0,0,0.04),transparent)]"
                    aria-hidden
                />
                <div className="mx-auto max-w-6xl px-6 pt-20 pb-8">
                    <div className="flex flex-col items-center text-center gap-6">
                        <h1 className="font-serif-citadel text-4xl sm:text-5xl md:text-6xl leading-tight font-semibold">
                            citadel
                        </h1>
                        <span className="text-sm tracking-wider text-[hsl(var(--c-muted))]">your mind, fortified.</span>
                        <p className="max-w-2xl text-base md:text-lg text-[hsl(var(--c-muted))]">
                            A calm, modern app for practicing Stoicism. Daily reflections, gentle prompts,
                            and small habits that strengthen resilience.
                        </p>
                        <div className="mt-2 flex flex-col sm:flex-row items-center gap-6">
                            <Link
                                href="#download"
                                className="inline-flex items-center gap-2 rounded-md bg-black/80 text-white px-5 py-3 text-sm md:text-base hover:bg-black transition-colors"
                            >
                                <ArrowDownToLine className="h-4 w-4" aria-hidden />
                                Get the app
                            </Link>
                            <a
                                href="#learn-more"
                                className="text-sm md:text-base text-[hsl(var(--c-fg))] underline underline-offset-4 decoration-black/20 hover:decoration-black/40"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>

                    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="order-2 md:order-1 space-y-5">
                            <div className="card-soft p-6">
                                <h3 className="font-serif-citadel text-2xl flex items-center gap-2">
                                    <BookText className="h-5 w-5" aria-hidden />
                                    <span>daily reflections</span>
                                </h3>
                                <p className="mt-2 text-[hsl(var(--c-muted))]">
                                    Ground yourself with simple prompts inspired by Marcus Aurelius, Seneca, and Epictetus.
                                </p>
                            </div>
                            <div className="card-soft p-6">
                                <h3 className="font-serif-citadel text-2xl flex items-center gap-2">
                                    <CheckCheck className="h-5 w-5" aria-hidden />
                                    <span>quiet progress</span>
                                </h3>
                                <p className="mt-2 text-[hsl(var(--c-muted))]">
                                    See gentle streaks and milestones that encourage consistency without pressure.
                                </p>
                            </div>
                            <div className="card-soft p-6">
                                <h3 className="font-serif-citadel text-2xl flex items-center gap-2">
                                    <Wind className="h-5 w-5" aria-hidden />
                                    <span>designed for calm</span>
                                </h3>
                                <p className="mt-2 text-[hsl(var(--c-muted))]">
                                    A beige and white interface that fades into the background so your thoughts can surface.
                                </p>
                            </div>
                        </div>

                        <div className="order-1 md:order-2 flex justify-center">
                            <div className="relative w-[260px] sm:w-[300px] md:w-[360px] aspect-[9/19] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)]">
                                <Image
                                    src="/images/citadel_mockup.jpg"
                                    alt="citadel app preview"
                                    fill
                                    sizes="(max-width: 768px) 300px, 360px"
                                    priority
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="learn-more" className="mx-auto max-w-5xl px-6 py-16">
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="card-soft p-6">
                        <h4 className="font-serif-citadel text-xl flex items-center gap-2">
                            <Sun className="h-5 w-5" aria-hidden />
                            <span>Morning</span>
                        </h4>
                        <p className="mt-2 text-[hsl(var(--c-muted))]">Set intention. Choose a principle to embody today.</p>
                    </div>
                    <div className="card-soft p-6">
                        <h4 className="font-serif-citadel text-xl flex items-center gap-2">
                            <Target className="h-5 w-5" aria-hidden />
                            <span>Midday</span>
                        </h4>
                        <p className="mt-2 text-[hsl(var(--c-muted))]">Pause. A brief check-in to re-center your focus.</p>
                    </div>
                    <div className="card-soft p-6">
                        <h4 className="font-serif-citadel text-xl flex items-center gap-2">
                            <Moon className="h-5 w-5" aria-hidden />
                            <span>Evening</span>
                        </h4>
                        <p className="mt-2 text-[hsl(var(--c-muted))]">Reflect. Note what was within your control—and what wasn’t.</p>
                    </div>
                </div>
            </section>

            <section id="download" className="mx-auto max-w-6xl px-6 pb-24">
                <div className="card-soft p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="font-serif-citadel text-2xl md:text-3xl">Begin your practice</h3>
                        <p className="mt-2 text-[hsl(var(--c-muted))]">Available soon on iOS and Android.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="relative group">
                            <a
                                href="#"
                                aria-label="App Store"
                                aria-disabled="true"
                                tabIndex={-1}
                                title="Coming soon!"
                                className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm md:text-base transition-colors bg-black/30 text-white/80 cursor-not-allowed grayscale pointer-events-none"
                            >
                                <Apple className="h-4 w-4" aria-hidden />
                                App Store
                            </a>
                            <span className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded bg-black px-2 py-1 text-[10px] md:text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity shadow">
                                Coming soon!
                            </span>
                        </div>
                        <div className="relative group">
                            <a
                                href="#"
                                aria-label="Google Play"
                                aria-disabled="true"
                                tabIndex={-1}
                                title="Coming soon!"
                                className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm md:text-base transition-colors bg-black/30 text-white/80 cursor-not-allowed grayscale pointer-events-none"
                            >
                                <Play className="h-4 w-4" aria-hidden />
                                Google Play
                            </a>
                            <span className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded bg-black px-2 py-1 text-[10px] md:text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity shadow">
                                Coming soon!
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

