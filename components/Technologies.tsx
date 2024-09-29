import Image from "next/image";

export default function Technologies() {
    return (
        <div className="flex flex-row mt-8 gap-10 mx-auto w-fit mb-20">
            <Image src="/react.svg" alt="React" height={100} width={100} />
            <Image
                src="/tailwindcss.svg"
                alt="Next.js"
                height={300}
                width={300}
            />
            <Image src="/next.svg" alt="Next.js" height={150} width={150} />
            <Image src="/prisma.svg" alt="prisma.io" height={150} width={150} />
            <Image
                src="/typescript.svg"
                alt="TypeScript"
                height={80}
                width={80}
            />
            <Image
                src="/go.svg"
                alt="The Go Programming Language"
                height={150}
                width={150}
            />
            <Image src="/asp.svg" alt="ASP.NET" height={150} width={150} />
        </div>
    );
}
