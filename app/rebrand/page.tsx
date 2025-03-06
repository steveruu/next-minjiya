"use client";

import { useEffect, useState } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Enhanced AnalogClock component
function AnalogClock() {
    const [time, setTime] = useState(new Date());
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const seconds = time.getSeconds();
        setRotation((prev) => {
            const expected = Math.floor(prev / 360) * 360 + seconds * 6;
            if (prev - expected > 180) {
                return expected + 360;
            }
            return expected;
        });
    }, [time]);

    const minutes = time.getMinutes();
    const hours = time.getHours() % 12;

    const minuteDegrees = ((minutes + time.getSeconds() / 60) / 60) * 360;
    const hourDegrees = ((hours + minutes / 60) / 12) * 360;

    return (
        <div className="relative flex flex-col items-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-card/80 to-card/40 border border-border/20 shadow-xl backdrop-blur-sm">
                {/* Clock markers */}
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-full h-full"
                        style={{
                            transform: `rotate(${i * 30}deg)`,
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 10 }}
                            transition={{ delay: i * 0.05, duration: 0.5 }}
                            className="absolute left-1/2 -ml-[1px] w-1 bg-foreground/30"
                            style={{ top: "4px" }}
                        ></motion.div>
                    </div>
                ))}

                {/* Minute markers */}
                {[...Array(60)].map(
                    (_, i) =>
                        i % 5 !== 0 && (
                            <div
                                key={i}
                                className="absolute w-full h-full"
                                style={{
                                    transform: `rotate(${i * 6}deg)`,
                                }}
                            >
                                <div
                                    className="absolute left-1/2 -ml-[0.5px] w-[1px] h-1.5 bg-foreground/10"
                                    style={{ top: "2px" }}
                                ></div>
                            </div>
                        )
                )}

                {/* Clock center */}
                <div className="absolute w-8 h-8 bg-background/80 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 border border-border/30 shadow-md"></div>
                <div className="absolute w-4 h-4 bg-gradient-to-br from-primary to-primary/80 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 shadow-[0_0_10px_rgba(var(--primary)/0.3)]"></div>

                {/* Hour hand */}
                <motion.div
                    className="absolute w-2.5 h-14 bg-gradient-to-t from-foreground/90 to-foreground/60 origin-bottom left-1/2 -ml-[1.25px] bottom-1/2 rounded-full shadow-sm"
                    style={{
                        transform: `rotate(${hourDegrees}deg)`,
                    }}
                    animate={{ rotate: hourDegrees }}
                    transition={{ type: "spring", stiffness: 50, damping: 15 }}
                />

                {/* Minute hand */}
                <motion.div
                    className="absolute w-2 h-20 bg-gradient-to-t from-foreground/80 to-foreground/50 origin-bottom left-1/2 -ml-1 bottom-1/2 rounded-full shadow-sm"
                    style={{
                        transform: `rotate(${minuteDegrees}deg)`,
                    }}
                    animate={{ rotate: minuteDegrees }}
                    transition={{ type: "spring", stiffness: 50, damping: 15 }}
                />

                {/* Second hand */}
                <motion.div
                    className="absolute w-1 h-24 bg-gradient-to-t from-primary to-primary/80 origin-bottom left-1/2 -ml-[0.5px] bottom-1/2 rounded-full shadow-[0_0_5px_rgba(var(--primary)/0.2)]"
                    style={{
                        transform: `rotate(${rotation}deg)`,
                    }}
                    animate={{ rotate: rotation }}
                    transition={{
                        type: "tween",
                        duration: 0.3,
                        ease: "linear",
                    }}
                />

                {/* Outer ring glow */}
                <div className="absolute inset-0 rounded-full border border-primary/10 shadow-[0_0_30px_rgba(var(--primary)/0.1)]"></div>
            </div>
        </div>
    );
}

// Animated gradient text component
function GradientText({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <span
            className={`bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-purple-500 animate-gradient ${className}`}
        >
            {children}
        </span>
    );
}

// Floating decoration component
function FloatingElement({
    children,
    delay = 0,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay }}
            className={className}
        >
            <motion.div
                animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random(),
                }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
}

export default function Rebrand() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Enhanced background with animated elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(var(--primary)/0.1),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.1),transparent_50%)]"></div>

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

                {/* Animated gradient orbs */}
                <motion.div
                    animate={{
                        x: [0, 10, 0],
                        y: [0, -10, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-full blur-[120px]"
                />

                <motion.div
                    animate={{
                        x: [0, -15, 0],
                        y: [0, 15, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                    className="absolute bottom-[-20%] left-[-10%] w-[70%] h-[70%] bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-full blur-[150px]"
                />

                <motion.div
                    animate={{
                        x: [0, 20, 0],
                        y: [0, 20, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                    className="absolute top-[30%] left-[20%] w-[40%] h-[40%] bg-gradient-to-bl from-purple-500/5 to-pink-500/5 rounded-full blur-[100px]"
                />
            </div>

            {/* Floating decorative elements */}
            <FloatingElement
                delay={0.5}
                className="absolute top-[15%] right-[15%] text-foreground/10 w-16 h-16 hidden md:block"
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    <path d="M2 12h20" />
                </svg>
            </FloatingElement>

            <FloatingElement
                delay={0.8}
                className="absolute bottom-[20%] left-[10%] text-foreground/10 w-12 h-12 hidden md:block"
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
            </FloatingElement>

            <FloatingElement
                delay={1.2}
                className="absolute top-[40%] left-[5%] text-foreground/10 w-10 h-10 hidden md:block"
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                </svg>
            </FloatingElement>

            <FloatingElement
                delay={1.5}
                className="absolute top-[60%] right-[8%] text-foreground/10 w-14 h-14 hidden md:block"
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
            </FloatingElement>

            <div className="container max-w-5xl mx-auto px-4 py-16 md:py-24 flex flex-col items-center justify-center min-h-screen">
                {/* Logo badge with animation */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute top-8 left-8 md:top-12 md:left-12 z-10"
                >
                    <Link href="/">
                        <Badge
                            variant="outline"
                            className="group px-4 py-1.5 text-sm tracking-wide font-medium backdrop-blur-md bg-background/40 border-primary/20 shadow-[0_0_15px_rgba(var(--primary)/0.2)] hover:bg-background/50 transition-all duration-300 flex items-center"
                        >
                            <ArrowLeft className="w-3.5 h-3.5 mr-1.5 text-primary transition-transform group-hover:-translate-x-0.5" />
                            minjiya
                        </Badge>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-4xl mx-auto text-center space-y-16"
                >
                    <div className="space-y-8">
                        {/* Animated badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <Badge
                                variant="secondary"
                                className="px-5 py-2 text-sm bg-secondary/30 hover:bg-secondary/40 font-medium border border-border/30 backdrop-blur-sm shadow-lg transition-all duration-300"
                            >
                                <motion.span
                                    animate={{ opacity: [0.7, 1, 0.7] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                >
                                    coming soon
                                </motion.span>
                            </Badge>
                        </motion.div>

                        {/* Main heading with staggered animation */}
                        <div className="overflow-hidden relative">
                            <motion.h1
                                initial={{ y: 100 }}
                                animate={{ y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.22, 1, 0.36, 1],
                                    delay: 0.3,
                                }}
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight"
                            >
                                čas na{" "}
                                <span className="relative inline-block">
                                    <GradientText>rebrand</GradientText>
                                    {/* Repositioned decorative squiggle as pen/pencil underline */}
                                    <motion.div
                                        initial={{ opacity: 0, scaleX: 0 }}
                                        animate={{ opacity: 1, scaleX: 1 }}
                                        transition={{ duration: 1, delay: 0.9 }}
                                        className="absolute -bottom-1 left-0 w-full h-3"
                                        style={{ transformOrigin: "left" }}
                                    >
                                        <svg
                                            className="w-full h-full"
                                            viewBox="0 0 100 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            preserveAspectRatio="none"
                                        >
                                            <motion.path
                                                initial={{ pathLength: 0 }}
                                                animate={{ pathLength: 1 }}
                                                transition={{
                                                    duration: 1.8,
                                                    delay: 1,
                                                    ease: "easeInOut",
                                                }}
                                                d="M0 7C10 3.5 15 9 25 7.5C35 6 40 2 50 4C60 6 65 9 75 7C85 5 90 3 100 5"
                                                stroke="url(#pen-underline-gradient)"
                                                strokeWidth="3"
                                                strokeLinecap="butt"
                                                fill="none"
                                            />
                                            <defs>
                                                <linearGradient
                                                    id="pen-underline-gradient"
                                                    x1="0"
                                                    y1="0"
                                                    x2="100"
                                                    y2="0"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stopColor="#3B82F6" />
                                                    <stop
                                                        offset="0.5"
                                                        stopColor="#8B5CF6"
                                                    />
                                                    <stop
                                                        offset="1"
                                                        stopColor="#EC4899"
                                                    />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </motion.div>
                                </span>
                                ?
                            </motion.h1>
                        </div>

                        {/* Subtitle with animated typing effect */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                        >
                            snažíme se držet krok s nejnovějšími designovými
                            trendy a{" "}
                            <GradientText className="font-medium">
                                inovacemi
                            </GradientText>
                            .
                        </motion.p>
                    </div>

                    {/* Enhanced card with glass morphism effect */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <Card className="bg-card/30 backdrop-blur-xl border-border/20 shadow-[0_10px_50px_rgba(0,0,0,0.1)] overflow-hidden rounded-2xl hover:shadow-[0_20px_80px_rgba(0,0,0,0.15)] transition-all duration-500">
                            <CardHeader className="text-center pb-2">
                                <CardTitle className="flex items-center justify-center gap-2 text-2xl font-medium">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{
                                            duration: 20,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                    >
                                        <Clock className="h-5 w-5 text-primary" />
                                    </motion.div>
                                    <span className="font-serif tracking-wide text-white/80">
                                        čas běží
                                    </span>
                                </CardTitle>
                                <CardDescription className="text-base flex items-center justify-center gap-1">
                                    <span className="text-muted-foreground/80">
                                        náš nový design se připravuje
                                    </span>
                                    <div className="flex items-center justify-center">
                                        {[0, 1, 2].map((i) => (
                                            <motion.span
                                                key={i}
                                                initial={{ opacity: 0.3, y: 0 }}
                                                animate={{
                                                    opacity: [0.3, 1, 0.3],
                                                    y: [-1, 1, -1],
                                                }}
                                                transition={{
                                                    duration: 1.2,
                                                    repeat: Infinity,
                                                    delay: i * 0.2,
                                                    ease: "easeInOut",
                                                }}
                                                className="text-primary font-medium text-lg"
                                            >
                                                .
                                            </motion.span>
                                        ))}
                                    </div>
                                </CardDescription>
                            </CardHeader>
                            <Separator className="opacity-10" />
                            <CardContent className="pt-8 pb-6 flex justify-center">
                                <AnalogClock />
                            </CardContent>

                            {/* Added call-to-action button */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.5, duration: 0.8 }}
                                className="pb-8 flex justify-center"
                            ></motion.div>
                        </Card>
                    </motion.div>

                    {/* Enhanced footer with animation */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="pt-8 text-center"
                    >
                        <p className="text-sm text-muted-foreground/70 flex flex-col sm:flex-row items-center justify-center gap-2">
                            <span>© 2024 minjiya.</span>
                            <span className="hidden sm:inline">•</span>
                            <span>všechna práva vyhrazena.</span>
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
