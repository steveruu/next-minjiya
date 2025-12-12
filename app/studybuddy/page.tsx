"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Theme colors
const colors = {
    background: {
        primary: "#0D0D1A",
        secondary: "#161625",
        card: "#1E1E2E",
        elevated: "#252538",
    },
    accent: {
        primary: "#7C3AED",
        secondary: "#A78BFA",
    },
    text: {
        primary: "#FFFFFF",
        secondary: "#A0A0B8",
        muted: "#6B6B80",
        accent: "#A78BFA",
    },
    status: {
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
        info: "#3B82F6",
    },
    border: {
        primary: "#2A2A3E",
        secondary: "#3D3D52",
    },
};

// Floating particles for Zen ambiance
const FloatingParticle = ({ delay, duration, size, left, top }: { delay: number; duration: number; size: number; left: string; top: string }) => (
    <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
            width: size,
            height: size,
            left,
            top,
            background: `radial-gradient(circle, ${colors.accent.secondary}40, transparent)`,
        }}
        animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1],
        }}
        transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
        }}
    />
);

// Zen circle animation
const ZenCircle = ({ size, delay }: { size: number; delay: number }) => (
    <motion.div
        className="absolute rounded-full border pointer-events-none"
        style={{
            width: size,
            height: size,
            borderColor: `${colors.accent.primary}20`,
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
            scale: [0, 1.5, 2],
            opacity: [0.5, 0.2, 0],
        }}
        transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            ease: "easeOut",
        }}
    />
);

// Feature card component
const FeatureCard = ({
    icon,
    title,
    description,
    gradient,
    delay,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    gradient: string;
    delay: number;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay, ease: "easeOut" }}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        className="relative group"
    >
        <div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
            style={{ background: gradient }}
        />
        <div
            className="relative p-8 rounded-3xl border backdrop-blur-sm h-full"
            style={{
                background: `linear-gradient(135deg, ${colors.background.card}90, ${colors.background.secondary}90)`,
                borderColor: colors.border.primary,
            }}
        >
            <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl"
                style={{ background: gradient }}
            >
                {icon}
            </div>
            <h3
                className="text-xl font-semibold mb-3"
                style={{ color: colors.text.primary }}
            >
                {title}
            </h3>
            <p className="text-base leading-relaxed" style={{ color: colors.text.secondary }}>
                {description}
            </p>
        </div>
    </motion.div>
);

// Pricing card component
const PricingCard = ({
    title,
    price,
    description,
    features,
    highlighted,
    emoji,
    delay,
}: {
    title: string;
    price: string;
    description: string;
    features: string[];
    highlighted?: boolean;
    emoji: string;
    delay: number;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay, ease: "easeOut" }}
        whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
        className="relative"
    >
        {highlighted && (
            <div
                className="absolute -inset-[2px] rounded-3xl"
                style={{
                    background: `linear-gradient(135deg, ${colors.accent.primary}, ${colors.accent.secondary})`,
                }}
            />
        )}
        <div
            className="relative p-8 rounded-3xl border h-full"
            style={{
                background: highlighted
                    ? `linear-gradient(135deg, ${colors.background.elevated}, ${colors.background.card})`
                    : colors.background.card,
                borderColor: highlighted ? "transparent" : colors.border.primary,
            }}
        >
            <div className="text-4xl mb-4">{emoji}</div>
            <h3
                className="text-2xl font-bold mb-2"
                style={{ color: colors.text.primary }}
            >
                {title}
            </h3>
            <div className="mb-4">
                <span
                    className="text-3xl font-bold"
                    style={{ color: highlighted ? colors.accent.secondary : colors.text.primary }}
                >
                    {price}
                </span>
            </div>
            <p className="mb-6" style={{ color: colors.text.secondary }}>
                {description}
            </p>
            <ul className="space-y-3">
                {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                        <span style={{ color: colors.status.success }}>✓</span>
                        <span style={{ color: colors.text.secondary }}>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    </motion.div>
);

export default function StudyBuddyPage() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (heroRef.current) {
                const rect = heroRef.current.getBoundingClientRect();
                setMousePosition({
                    x: (e.clientX - rect.left) / rect.width,
                    y: (e.clientY - rect.top) / rect.height,
                });
            }
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const features = [
        {
            icon: "🧠",
            title: "Chytrý přepínač modelů",
            description:
                "Dva mozky jsou víc než jeden. Flash model pro rychlé odpovědi, Pro model pro složité úlohy. Automaticky se přepíná podle potřeby.",
            gradient: `linear-gradient(135deg, ${colors.accent.primary}80, ${colors.accent.secondary}80)`,
        },
        {
            icon: "📚",
            title: "Nekonečná paměť & RAG",
            description:
                "Nahraj zápisky, PDF, screenshoty z Teams. AI nefabuluje – odpovídá na základě tvých faktů z tvé vektorové databáze.",
            gradient: `linear-gradient(135deg, ${colors.status.info}80, ${colors.accent.secondary}80)`,
        },
        {
            icon: "📸",
            title: "Vyfoť & Vyřeš",
            description:
                "Nechápeš rovnici? Vyfoť ji. Vision model převede klikyháky na data a vysvětlí ti postup, nejen výsledek.",
            gradient: `linear-gradient(135deg, ${colors.status.warning}80, ${colors.accent.primary}80)`,
        },
        {
            icon: "🧘",
            title: "Zen Mode",
            description:
                "Jedním kliknutím zmizí celý svět. Vidíš jen ten jeden aktuální úkol. Žádné notifikace, žádný stres.",
            gradient: `linear-gradient(135deg, ${colors.status.success}80, ${colors.accent.secondary}80)`,
        },
        {
            icon: "🔪",
            title: "The Slicer",
            description:
                "AI vezme obří zadání a rozseká ho na mikro-úkoly na 15 minut. Nikdy neuvidíš děsivé 'Napiš práci'.",
            gradient: `linear-gradient(135deg, ${colors.accent.secondary}80, ${colors.status.info}80)`,
        },
        {
            icon: "🚨",
            title: "Panic Button",
            description:
                "Nestíháš a hroutíš se? AI okamžitě přepočítá priority a dá ti krizový výcuc toho nejdůležitějšího.",
            gradient: `linear-gradient(135deg, ${colors.status.error}80, ${colors.accent.primary}80)`,
        },
        {
            icon: "🎧",
            title: "Commute Briefings",
            description:
                "Dojíždíš autobusem? AI ti vygeneruje 3minutový audio podcast na míru. Učení bez koukání do mobilu.",
            gradient: `linear-gradient(135deg, ${colors.accent.primary}80, ${colors.status.success}80)`,
        },
        {
            icon: "🎮",
            title: "Gamifikace",
            description:
                "Tvé zápisky jako hra. Procházíš kvízy, sbíráš XP a odemykáš nové features. Učení na pozadí.",
            gradient: `linear-gradient(135deg, ${colors.status.warning}80, ${colors.status.success}80)`,
        },
    ];

    return (
        <div
            className="min-h-screen overflow-x-hidden scroll-smooth"
            style={{ background: colors.background.primary }}
        >
            {/* Header */}
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
                style={{
                    background: `${colors.background.primary}90`,
                    backdropFilter: "blur(20px)",
                    borderBottom: `1px solid ${colors.border.primary}40`,
                }}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <a href="#" className="flex items-center gap-2">
                        <span className="text-2xl">🎓</span>
                        <span
                            className="text-xl font-bold"
                            style={{ color: colors.text.primary }}
                        >
                            StudyBuddy
                        </span>
                    </a>
                    <nav className="hidden md:flex items-center gap-8">
                        <a
                            href="#features"
                            className="text-sm font-medium transition-colors hover:opacity-80"
                            style={{ color: colors.text.secondary }}
                        >
                            Funkce
                        </a>
                        <a
                            href="#mental-health"
                            className="text-sm font-medium transition-colors hover:opacity-80"
                            style={{ color: colors.text.secondary }}
                        >
                            Duševní zdraví
                        </a>
                        <a
                            href="#pricing"
                            className="text-sm font-medium transition-colors hover:opacity-80"
                            style={{ color: colors.text.secondary }}
                        >
                            Ceník
                        </a>
                        <a
                            href="#download"
                            className="px-4 py-2 rounded-xl text-sm font-semibold transition-transform hover:scale-105"
                            style={{
                                background: `linear-gradient(135deg, ${colors.accent.primary}, ${colors.accent.secondary})`,
                                color: colors.text.primary,
                            }}
                        >
                            Stáhnout
                        </a>
                    </nav>
                </div>
            </motion.header>
            {/* Ambient background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                {/* Gradient orbs */}
                <div
                    className="absolute w-[800px] h-[800px] rounded-full blur-[120px] opacity-30"
                    style={{
                        background: `radial-gradient(circle, ${colors.accent.primary}40, transparent)`,
                        left: `${20 + mousePosition.x * 10}%`,
                        top: `${10 + mousePosition.y * 10}%`,
                        transform: "translate(-50%, -50%)",
                        transition: "left 0.5s ease-out, top 0.5s ease-out",
                    }}
                />
                <div
                    className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-20"
                    style={{
                        background: `radial-gradient(circle, ${colors.accent.secondary}40, transparent)`,
                        right: `${10 + mousePosition.x * 5}%`,
                        bottom: `${20 + mousePosition.y * 5}%`,
                        transition: "right 0.7s ease-out, bottom 0.7s ease-out",
                    }}
                />

                {/* Floating particles */}
                <FloatingParticle delay={0} duration={6} size={8} left="10%" top="20%" />
                <FloatingParticle delay={1} duration={8} size={6} left="80%" top="30%" />
                <FloatingParticle delay={2} duration={7} size={10} left="60%" top="60%" />
                <FloatingParticle delay={0.5} duration={9} size={4} left="25%" top="70%" />
                <FloatingParticle delay={1.5} duration={6} size={7} left="90%" top="80%" />
                <FloatingParticle delay={3} duration={8} size={5} left="40%" top="15%" />
            </div>

            {/* Hero Section */}
            <motion.section
                id="hero"
                ref={heroRef}
                style={{ opacity, scale }}
                className="relative min-h-screen flex items-center px-6 pt-32 pb-24"
            >
                {/* Zen circles in background */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <ZenCircle size={200} delay={0} />
                    <ZenCircle size={200} delay={1} />
                    <ZenCircle size={200} delay={2} />
                    <ZenCircle size={200} delay={3} />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto w-full">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                        {/* Left column - Text content */}
                        <div className="text-center lg:text-left">
                            {/* Main heading */}
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                            >
                                <span style={{ color: colors.text.primary }}>Tvůj </span>
                                <span
                                    className="bg-clip-text text-transparent animate-gradient"
                                    style={{
                                        backgroundImage: `linear-gradient(135deg, ${colors.accent.primary}, ${colors.accent.secondary}, ${colors.accent.primary})`,
                                        backgroundSize: "200% 200%",
                                    }}
                                >
                                    externí mozek
                                </span>
                                <br />
                                <span style={{ color: colors.text.primary }}>pro přežití školy</span>
                            </motion.h1>

                            {/* Subtitle */}
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-xl md:text-2xl mb-10 leading-relaxed"
                                style={{ color: colors.text.secondary }}
                            >
                                Zapomeň na chaos v Teams, ztracené zápisky a noční úzkosti před písemkou.
                                <br className="hidden md:block" />
                                StudyBuddy je{" "}
                                <span style={{ color: colors.text.accent }}>inteligentní AI vrstva</span>{" "}
                                mezi tebou a školním systémem.
                            </motion.p>

                            {/* CTA buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
                            >
                                <motion.a
                                    href="#download"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-2 shadow-2xl"
                                    style={{
                                        background: `linear-gradient(135deg, ${colors.accent.primary}, ${colors.accent.secondary})`,
                                        color: colors.text.primary,
                                        boxShadow: `0 20px 40px ${colors.accent.primary}40`,
                                    }}
                                >
                                    <span>Začít zdarma</span>
                                    <span>→</span>
                                </motion.a>
                                <motion.a
                                    href="#features"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-8 py-4 rounded-2xl font-semibold text-lg"
                                    style={{
                                        background: "transparent",
                                        color: colors.text.secondary,
                                        border: `2px solid ${colors.border.secondary}`,
                                    }}
                                >
                                    Jak to funguje?
                                </motion.a>
                            </motion.div>
                        </div>

                        {/* Right column - Mobile mockup preview */}
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                            className="relative flex justify-center lg:justify-end"
                        >
                            {/* Glow effect behind phone */}
                            <div
                                className="absolute w-[300px] h-[500px] rounded-[50px] blur-[80px] opacity-50"
                                style={{
                                    background: `linear-gradient(180deg, ${colors.accent.primary}60, ${colors.accent.secondary}40, transparent)`,
                                    top: "10%",
                                }}
                            />

                            {/* Phone frame with mockup */}
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="relative"
                            >
                                {/* Phone bezel */}
                                <div
                                    className="relative rounded-[40px] p-2 shadow-2xl"
                                    style={{
                                        background: `linear-gradient(145deg, ${colors.background.elevated}, ${colors.background.card})`,
                                        boxShadow: `0 40px 100px ${colors.accent.primary}30, 0 10px 40px rgba(0,0,0,0.5)`,
                                    }}
                                >
                                    {/* Screen area */}
                                    <div className="relative rounded-[32px] overflow-hidden">
                                        <img
                                            src="/images/studybuddy_mockup.png"
                                            alt="StudyBuddy App Preview"
                                            className="w-[280px] md:w-[320px] h-auto"
                                        />

                                        {/* Subtle screen reflection */}
                                        <div
                                            className="absolute inset-0 pointer-events-none"
                                            style={{
                                                background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, transparent 100%)",
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Floating UI elements around the phone */}
                                <motion.div
                                    animate={{
                                        y: [0, -5, 0],
                                        x: [0, 3, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.5,
                                    }}
                                    className="absolute -right-16 top-20 px-4 py-2 rounded-xl"
                                    style={{
                                        background: colors.background.card,
                                        border: `1px solid ${colors.border.primary}`,
                                        boxShadow: `0 10px 30px rgba(0,0,0,0.3)`,
                                    }}
                                >
                                    <span className="text-sm" style={{ color: colors.text.secondary }}>
                                        🧠 Deep Thinking...
                                    </span>
                                </motion.div>

                                <motion.div
                                    animate={{
                                        y: [0, 5, 0],
                                        x: [0, -3, 0],
                                    }}
                                    transition={{
                                        duration: 3.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1,
                                    }}
                                    className="absolute -left-12 bottom-32 px-4 py-2 rounded-xl"
                                    style={{
                                        background: colors.background.card,
                                        border: `1px solid ${colors.border.primary}`,
                                        boxShadow: `0 10px 30px rgba(0,0,0,0.3)`,
                                    }}
                                >
                                    <span className="text-sm" style={{ color: colors.status.success }}>
                                        ✓ Zen Mode
                                    </span>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Philosophy Section */}
            <section className="relative py-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2
                            className="text-3xl md:text-4xl font-bold mb-8"
                            style={{ color: colors.text.primary }}
                        >
                            Nejdeme cestou{" "}
                            <span style={{ color: colors.text.muted }}>&quot;hloupého chatbota&quot;</span>
                        </h2>
                        <p
                            className="text-xl leading-relaxed"
                            style={{ color: colors.text.secondary }}
                        >
                            Postavili jsme architekturu, která{" "}
                            <span style={{ color: colors.accent.secondary }}>chápe kontext</span>,{" "}
                            <span style={{ color: colors.status.success }}>šetří tvé peníze</span> a{" "}
                            <span style={{ color: colors.status.info }}>hlídá tvé duševní zdraví</span>.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="relative py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2
                            className="text-4xl md:text-5xl font-bold mb-6"
                            style={{ color: colors.text.primary }}
                        >
                            Co dělá StudyBuddy jiným? 🚀
                        </h2>
                        <p
                            className="text-xl max-w-2xl mx-auto"
                            style={{ color: colors.text.secondary }}
                        >
                            Maximální IQ přesně tam, kde ho potřebuješ
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, idx) => (
                            <FeatureCard
                                key={idx}
                                {...feature}
                                delay={idx * 0.1}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Anti-Stress Section */}
            <section id="mental-health" className="relative py-32 px-6">
                <div
                    className="max-w-5xl mx-auto rounded-[40px] p-12 md:p-16 relative overflow-hidden"
                    style={{
                        background: `linear-gradient(135deg, ${colors.background.card}, ${colors.background.secondary})`,
                        border: `1px solid ${colors.border.primary}`,
                    }}
                >
                    {/* Decorative elements */}
                    <div
                        className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-30"
                        style={{ background: colors.status.success }}
                    />
                    <div
                        className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-[80px] opacity-20"
                        style={{ background: colors.accent.secondary }}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-4xl">🛡️</span>
                            <h2
                                className="text-3xl md:text-4xl font-bold"
                                style={{ color: colors.text.primary }}
                            >
                                Duševní zdraví first
                            </h2>
                        </div>
                        <p
                            className="text-xl mb-10 max-w-2xl"
                            style={{ color: colors.text.secondary }}
                        >
                            Velké projekty způsobují paralýzu. My jsme navrhli nástroje, které ti
                            pomůžou zůstat v klidu a soustředěný.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="space-y-4">
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                                    style={{ background: `${colors.status.success}20` }}
                                >
                                    🧘
                                </div>
                                <h3
                                    className="text-xl font-semibold"
                                    style={{ color: colors.text.primary }}
                                >
                                    Zen Mode
                                </h3>
                                <p style={{ color: colors.text.secondary }}>
                                    Jedním kliknutím zmizí celý svět. Jen ty a tvůj úkol.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                                    style={{ background: `${colors.accent.secondary}20` }}
                                >
                                    🔪
                                </div>
                                <h3
                                    className="text-xl font-semibold"
                                    style={{ color: colors.text.primary }}
                                >
                                    The Slicer
                                </h3>
                                <p style={{ color: colors.text.secondary }}>
                                    Rozseká ročníkovku na 15minutové kousky. Zvládnutelně.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                                    style={{ background: `${colors.status.error}20` }}
                                >
                                    🚨
                                </div>
                                <h3
                                    className="text-xl font-semibold"
                                    style={{ color: colors.text.primary }}
                                >
                                    Panic Button
                                </h3>
                                <p style={{ color: colors.text.secondary }}>
                                    Krizový mód. Prioritizuje a dá ti rychlý plán záchrany.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="relative py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2
                            className="text-4xl md:text-5xl font-bold mb-6"
                            style={{ color: colors.text.primary }}
                        >
                            Fair pricing 💎
                        </h2>
                        <p
                            className="text-xl"
                            style={{ color: colors.text.secondary }}
                        >
                            Víme, že jsi student, ne milionář.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <PricingCard
                            emoji="🌱"
                            title="FREE"
                            price="Zdarma"
                            description="Pro začátek stačí"
                            features={[
                                "Neomezený rychlý mozek",
                                "3× denně Deep Dive zdarma",
                                "Koukni na reklamu = další řešení",
                            ]}
                            delay={0}
                        />
                        <PricingCard
                            emoji="🔥"
                            title="PRO"
                            price="Cena kafe"
                            description="Pro náročné studenty"
                            features={[
                                "Neomezený Deep Thinking",
                                "Větší paměť (celý rok)",
                                "Žádné reklamy",
                                "Priority support",
                            ]}
                            highlighted
                            delay={0.1}
                        />
                        <PricingCard
                            emoji="⚡"
                            title="24h Pass"
                            price="Krizovka"
                            description="Na zítřejší Soudný den"
                            features={[
                                "24 hodin unlimited",
                                "Když nemáš předplatné",
                                "Zachraň si známku",
                            ]}
                            delay={0.2}
                        />
                    </div>
                </div>
            </section>

            {/* Download Section */}
            <section id="download" className="relative py-24 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-8"
                        style={{ color: colors.text.primary }}
                    >
                        Připraven na{" "}
                        <span
                            className="bg-clip-text text-transparent"
                            style={{
                                backgroundImage: `linear-gradient(135deg, ${colors.accent.primary}, ${colors.accent.secondary})`,
                            }}
                        >
                            zen studium
                        </span>
                        ?
                    </h2>
                    <p
                        className="text-xl mb-12"
                        style={{ color: colors.text.secondary }}
                    >
                        Dostupné pro iOS a Android. Začni učit chytřeji už dnes.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        {/* App Store button */}
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-3 px-6 py-4 rounded-2xl transition-all"
                            style={{
                                background: colors.background.card,
                                border: `1px solid ${colors.border.primary}`,
                            }}
                        >
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill={colors.text.primary}>
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>
                            <div className="text-left">
                                <div className="text-xs" style={{ color: colors.text.muted }}>Stáhnout z</div>
                                <div className="text-lg font-semibold" style={{ color: colors.text.primary }}>App Store</div>
                            </div>
                        </motion.a>

                        {/* Google Play button */}
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-3 px-6 py-4 rounded-2xl transition-all"
                            style={{
                                background: colors.background.card,
                                border: `1px solid ${colors.border.primary}`,
                            }}
                        >
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill={colors.text.primary}>
                                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                            </svg>
                            <div className="text-left">
                                <div className="text-xs" style={{ color: colors.text.muted }}>Stáhnout z</div>
                                <div className="text-lg font-semibold" style={{ color: colors.text.primary }}>Google Play</div>
                            </div>
                        </motion.a>
                    </div>

                    <p
                        className="mt-8 text-sm"
                        style={{ color: colors.text.muted }}
                    >
                        Brzy k dispozici. Přihlaš se k odběru pro notifikaci o spuštění.
                    </p>
                </motion.div>
            </section>

            {/* Footer */}
            <footer
                className="relative py-12 px-6 border-t"
                style={{ borderColor: colors.border.primary }}
            >
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                        <span className="text-2xl">🎓</span>
                        <span
                            className="text-xl font-bold"
                            style={{ color: colors.text.primary }}
                        >
                            StudyBuddy
                        </span>
                    </div>
                    <p style={{ color: colors.text.muted }}>
                        © 2025 StudyBuddy. Soutěžní projekt.
                    </p>
                    <div className="flex items-center gap-6">
                        <a
                            href="#"
                            className="transition-colors hover:opacity-80"
                            style={{ color: colors.text.secondary }}
                        >
                            Podmínky
                        </a>
                        <a
                            href="#"
                            className="transition-colors hover:opacity-80"
                            style={{ color: colors.text.secondary }}
                        >
                            Soukromí
                        </a>
                        <a
                            href="#"
                            className="transition-colors hover:opacity-80"
                            style={{ color: colors.text.secondary }}
                        >
                            Kontakt
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
