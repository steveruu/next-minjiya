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
        <div className="relative max-w-[1800px] py-12">
            {/* Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

            {/* Marquee content */}
            <Marquee
                autoFill
                speed={40}
                className="py-8"
            >
                {initialLogos.map((logo, index) => (
                    <div key={index} className="mx-12 group">
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            height={logo.height}
                            width={logo.width}
                            draggable={false}
                            className="transition-all duration-300 filter grayscale hover:grayscale-0"
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
