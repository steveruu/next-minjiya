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
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

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
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full bg-card border border-border/20 shadow-xl">
                {[...Array(60)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-full h-full"
                        style={{
                            transform: `rotate(${i * 6}deg)`,
                        }}
                    >
                        <div
                            className={`absolute left-1/2 -ml-[0.5px] bg-foreground/10 ${
                                i % 5 === 0 ? "w-1 h-3" : "w-[1px] h-1.5"
                            }`}
                            style={{ top: "2px" }}
                        ></div>
                    </div>
                ))}

                <div className="absolute w-6 h-6 bg-background rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 border border-border/30 shadow-sm"></div>
                <div className="absolute w-3 h-3 bg-primary rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"></div>

                <motion.div
                    className="absolute w-2 h-14 bg-foreground/60 origin-bottom left-1/2 -ml-1 bottom-1/2 rounded-full shadow-sm"
                    style={{
                        transform: `rotate(${hourDegrees}deg)`,
                    }}
                    animate={{ rotate: hourDegrees }}
                    transition={{ type: "spring", stiffness: 50, damping: 15 }}
                />
                <motion.div
                    className="absolute w-1.5 h-20 bg-foreground/70 origin-bottom left-1/2 -ml-[0.75px] bottom-1/2 rounded-full shadow-sm"
                    style={{
                        transform: `rotate(${minuteDegrees}deg)`,
                    }}
                    animate={{ rotate: minuteDegrees }}
                    transition={{ type: "spring", stiffness: 50, damping: 15 }}
                />
                <motion.div
                    className="absolute w-1 h-24 bg-primary origin-bottom left-1/2 -ml-[0.5px] bottom-1/2 rounded-full shadow-sm"
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
}

export default function Rebrand() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container max-w-5xl mx-auto px-4 py-16 md:py-24 flex flex-col items-center justify-center min-h-screen">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="absolute top-8 left-8 md:top-12 md:left-12"
                >
                    <Badge
                        variant="outline"
                        className="px-3 py-1 text-xs tracking-normal font-medium"
                    >
                        minjiya
                    </Badge>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.2,
                    }}
                    className="w-full max-w-4xl mx-auto text-center space-y-16"
                >
                    <div className="space-y-6">
                        <Badge
                            variant="secondary"
                            className="px-4 py-1.5 text-sm bg-secondary/30 hover:bg-secondary/30 font-light border border-border/30"
                        >
                            coming soon
                        </Badge>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                            čas na rebrand?
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            snažíme se držet krok s nejnovějšími designovými
                            trendy. <br />
                        </p>
                    </div>

                    <Card className="bg-card/50 backdrop-blur-sm border-border/30 shadow-2xl overflow-hidden">
                        <CardHeader className="text-center pb-2">
                            <CardTitle className="flex items-center justify-center gap-2 text-2xl font-medium">
                                <Clock className="h-5 w-5 text-primary" />
                                čas běží
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
                        <Separator className="opacity-20" />
                        <CardContent className="pt-8 pb-6 flex justify-center">
                            <AnalogClock />
                        </CardContent>
                    </Card>

                    <div className="pt-8 text-center text-sm text-muted-foreground">
                        <p>© 2024 minjiya. všechna práva vyhrazena.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
