import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-[#161729]">
            <Header />
            <div className="flex flex-col md:flex-row">
                <div className="mx-auto my-12">
                    <Image
                        src="mt.svg"
                        className="inline"
                        alt="minjiya"
                        width={275}
                        height={148}
                    />
                    <h1 className="text-3xl mt-8 mb-2 leading-[1.1] font-[Mona Sans] font-bold text-white">
                        minjiya
                    </h1>
                    <code className="text-2xl tracking-widest text-neutral-400">
                        shaping the future
                    </code>
                </div>
                <div>
                    <pre>

                    </pre>
                </div>
            </div>
        </div>
    )
}