"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Technologies() {
    const initialLogos = [
        { src: "/react.svg", alt: "React", height: 100, width: 100 },
        { src: "/tailwindcss.svg", alt: "Tailwind CSS", height: 300, width: 300 },
        { src: "/next.svg", alt: "Next.js", height: 150, width: 150 },
        { src: "/prisma.svg", alt: "Prisma.io", height: 150, width: 150 },
        { src: "/typescript.svg", alt: "TypeScript", height: 80, width: 80 },
        { src: "/expo.svg", alt: "Expo", height: 150, width: 150 },
        { src: "/go.svg", alt: "The Go Programming Language", height: 150, width: 150 },
        { src: "/react.svg", alt: "React", height: 100, width: 100 },
        { src: "/tailwindcss.svg", alt: "Tailwind CSS", height: 300, width: 300 },
        { src: "/next.svg", alt: "Next.js", height: 150, width: 150 },
        { src: "/prisma.svg", alt: "Prisma.io", height: 150, width: 150 },
        { src: "/typescript.svg", alt: "TypeScript", height: 80, width: 80 },
        { src: "/expo.svg", alt: "Expo", height: 150, width: 150 },
        { src: "/go.svg", alt: "The Go Programming Language", height: 150, width: 150 },
    ];

    const [logos, setLogos] = useState(initialLogos);

    useEffect(() => {
        const interval = setInterval(() => {
            setLogos((prevLogos) => {
                const newLogos = [...prevLogos, ...initialLogos];
                if (newLogos.length > initialLogos.length * 2) {
                    return newLogos.slice(initialLogos.length);
                }
                return newLogos;
            });
        }, 1000); // Adjust the interval time as needed

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-row mt-8 gap-10 mx-auto w-fit mb-20 animate-marquee">
            {logos.map((logo, index) => (
                <Image
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    height={logo.height}
                    width={logo.width}
                />
            ))}
        </div>
    );
}
