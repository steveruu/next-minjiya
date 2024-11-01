"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Technologies() {
    const initialLogos = [
        { src: "/react.svg", alt: "React", height: 100, width: 100 },
        { src: "/tailwindcss.svg", alt: "Tailwind CSS", height: 300, width: 300 },
        { src: "/next.svg", alt: "Next.js", height: 150, width: 150 },
        { src: "/prisma.svg", alt: "Prisma.io", height: 150, width: 150 },
        { src: "/typescript.svg", alt: "TypeScript", height: 80, width: 80 },
        { src: "/expo.svg", alt: "Expo", height: 150, width: 150 },
        { src: "/go.svg", alt: "The Go Programming Language", height: 150, width: 150 },
    ];

    return (
        <div className="flex flex-row mt-8 gap-10 md:gap-16 mx-auto w-fit mb-20 max-w-[1800px]">
            <Marquee autoFill gradient gradientWidth={200} gradientColor="#fff" speed={50}>
                {initialLogos.map((logo, index) => (
                    <Image
                        key={index}
                        src={logo.src}
                        alt={logo.alt}
                        height={logo.height}
                        width={logo.width}
                        draggable={false}
                        className="mr-[5rem]"
                    />
                ))}
            </Marquee>
        </div>
    );
}
