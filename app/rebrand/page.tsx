"use client";

import { useEffect, useState, memo } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion, useReducedMotion } from "framer-motion";
import { Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Enhanced AnalogClock component with performance optimizations
const AnalogClock = memo(function AnalogClock() {
    const [time, setTime] = useState(new Date());
    const [rotation, setRotation] = useState(0);
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        // Use a more efficient timer with a reasonable update interval
        const timer = setInterval(
            () => {
                setTime(new Date());
            },
            prefersReducedMotion ? 5000 : 1000
        ); // Less frequent updates if reduced motion is preferred

        return () => clearInterval(timer);
    }, [prefersReducedMotion]);

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

    // Pre-calculate these values to avoid recalculation during render
    const minuteDegrees = ((minutes + time.getSeconds() / 60) / 60) * 360;
    const hourDegrees = ((hours + minutes / 60) / 12) * 360;

    // Use will-change for elements that will animate
    return (
        <div className="relative flex flex-col items-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-none bg-minjiya border border-white/5 shadow-xl">
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
                            className="absolute left-1/2 -ml-[1px] w-1 bg-white/30"
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
                                    className="absolute left-1/2 -ml-[0.5px] w-[1px] h-1.5 bg-white/10"
                                    style={{ top: "2px" }}
                                ></div>
                            </div>
                        )
                )}

                {/* Clock center */}
                <div className="absolute w-4 h-4 bg-white/80 rounded-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"></div>

                {/* Hour hand */}
                <motion.div
                    className="absolute w-2 h-14 bg-white origin-bottom left-1/2 -ml-1 bottom-1/2 rounded-none"
                    style={{
                        transform: `rotate(${hourDegrees}deg)`,
                    }}
                    animate={{ rotate: hourDegrees }}
                    transition={{ type: "spring", stiffness: 50, damping: 15 }}
                />

                {/* Minute hand */}
                <motion.div
                    className="absolute w-1.5 h-20 bg-white/80 origin-bottom left-1/2 -ml-[0.75px] bottom-1/2 rounded-none"
                    style={{
                        transform: `rotate(${minuteDegrees}deg)`,
                    }}
                    animate={{ rotate: minuteDegrees }}
                    transition={{ type: "spring", stiffness: 50, damping: 15 }}
                />

                {/* Second hand */}
                <motion.div
                    className="absolute w-[1px] h-24 bg-white origin-bottom left-1/2 -ml-[0.5px] bottom-1/2"
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
            </div>
        </div>
    );
});

// Text component for consistency
const GradientText = memo(function GradientText({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <span
            className={`text-white font-bold ${className}`}
        >
            {children}
        </span>
    );
});

// Lazy load the AnalogClock component since it's heavy
const LazyAnalogClock = dynamic(() => Promise.resolve(AnalogClock), {
    ssr: false,
    loading: () => (
        <div className="w-72 h-72 md:w-80 md:h-80 rounded-none bg-minjiya/50 animate-pulse" />
    ),
});

// Optimized background component
const OptimizedBackground = memo(function OptimizedBackground() {
    return (
        <>
            {/* Grid pattern is handled by the bg-grid-pattern class */}

            {/* Subtle highlight */}
            <div className="absolute top-[-5%] right-[-5%] w-[40%] h-[40%] bg-white/[0.01] rounded-none blur-[100px]" />
            <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-white/[0.01] rounded-none blur-[100px]" />
        </>
    );
});

// Wrap the main component with memo for performance
export default memo(function Rebrand() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-minjiya">
            {/* Enhanced background with animated elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <OptimizedBackground />
            </div>

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
                            className="group px-4 py-1.5 text-xs uppercase tracking-widest font-medium bg-minjiya/80 border-white/5 hover:bg-minjiya/90 transition-all duration-300 flex items-center rounded-none"
                        >
                            <ArrowLeft className="w-3.5 h-3.5 mr-1.5 text-white transition-transform group-hover:-translate-x-0.5" />
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
                                className="px-5 py-1.5 text-xs uppercase tracking-widest bg-white/5 hover:bg-white/10 font-medium border-none backdrop-blur-sm shadow-lg transition-all duration-300 rounded-none"
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
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
                            >
                                čas na{" "}
                                <span className="relative inline-block">
                                    <GradientText>rebrand</GradientText>
                                    {/* Simple underline */}
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ duration: 0.8, delay: 0.9 }}
                                        className="absolute -bottom-1 left-0 w-full h-[2px] bg-white/40"
                                        style={{ transformOrigin: "left" }}
                                    />
                                </span>
                                ?
                            </motion.h1>
                        </div>

                        {/* Subtitle with animated typing effect */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
                        >
                            snažíme se držet krok s nejnovějšími designovými
                            trendy a{" "}
                            <GradientText className="font-medium">
                                inovacemi
                            </GradientText>
                            .
                        </motion.p>
                    </div>

                    {/* Enhanced card with minimal design */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <Card className="bg-[#171717] border-white/5 shadow-md overflow-hidden rounded-none">
                            <CardHeader className="text-center pb-2">
                                <CardTitle className="flex items-center justify-center gap-2 text-2xl font-medium tracking-tight">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{
                                            duration: 20,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                    >
                                        <Clock className="h-5 w-5 text-white" />
                                    </motion.div>
                                    <span className="tracking-tight text-white">
                                        čas běží
                                    </span>
                                </CardTitle>
                                <CardDescription className="text-base flex items-center justify-center gap-1 uppercase tracking-wider text-xs">
                                    <span className="text-white/50">
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
                                                className="text-white font-medium text-lg"
                                            >
                                                .
                                            </motion.span>
                                        ))}
                                    </div>
                                </CardDescription>
                            </CardHeader>
                            <Separator className="opacity-10" />
                            <CardContent className="pt-8 pb-6 flex justify-center">
                                <LazyAnalogClock />
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Enhanced footer with animation */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="pt-8 text-center"
                    >
                        <p className="text-sm uppercase tracking-wider text-white/40 flex flex-col sm:flex-row items-center justify-center gap-2">
                            <span>© 2024 minjiya.</span>
                            <span className="hidden sm:inline">•</span>
                            <span>všechna práva vyhrazena.</span>
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
});
