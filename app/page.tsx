import Header from "@/components/Header";
import CodePreview from "@/components/CodePreview";
import Technologies from "@/components/Technologies";
import Image from "next/image";
import QuoteCard from "@/components/QuoteCard";
import { FaArrowDown } from "react-icons/fa6";

export default function Home() {
    return (
        <>
            <div className="flex min-h-screen flex-col bg-minjiya overflow-x-hidden">
                <Header />
                <div className="flex flex-col gap-10 xl:flex-row xl:gap-0 mx-auto mt-10 xl:mt-[12rem] xl:mb-[10rem] w-full max-w-[1700px]">
                    <div className="flex flex-col items-center justify-center xl:w-[50%] ">
                        <Image
                            src="mt.svg"
                            className="inline"
                            alt="minjiya"
                            width={275}
                            height={148}
                        />
                        <h1 className="text-3xl mt-8 mb-2 leading-[1.1] font-rubik font-bold text-white">
                            minjiya
                        </h1>
                        <h2 className="md:text-xl tracking-wider font-stick text-neutral-400">
                            みんじや
                        </h2>
                    </div>
                    <CodePreview />
                </div>
                <h3 className="m-10 xl:m-0 text-3xl font-rubik font-medium tracking-wider text-center text-neutral-100">
                    shaping the <span className="text-purpur">future</span>
                </h3>
                <div className="flex justify-center mt-5">
                    <a href="#technologies" className="p-5">
                        <FaArrowDown className="text-3xl text-white animate-bounce" />
                    </a>
                </div>
            </div>
            <div className="min-h-screen mt-10 overflow-x-hidden" >
                <p
                    id="technologies"
                    className="pt-10 text-center text-3xl font-semibold font-rubik"
                >
                    using{" "}
                    <span className="text-purpur">
                        cutting edge technologies.
                    </span>
                </p>
                <Technologies />
                <p
                    id="references"
                    className="pt-10 text-center text-3xl font-semibold font-rubik"
                >
                    our references
                </p>
                <div className="flex flex-row flex-wrap gap-4 mt-10 justify-center items-center max-w-[80%] mx-auto">
                    <QuoteCard author="Dollar Prync" quote="Sleduj malá Minjiyo, sleduj teď" authorImage="https://eventigo.s3-central.vshosting.cloud/production/artist/dollar-prync-generace-rap-kopie-jpg-zjekmo.jpeg" />
                    <QuoteCard author="Sergei Barracuda" quote="Budu v NHčku jak Minjiya chcípat na bolesti zad" authorImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBur3Y-4p-Z407ixxZWIvXa6sh6cRSMKsDG47gYL_PnnEZukeo" />
                    <QuoteCard author="Dollar Prync" quote="Pojď sem baby, dělej tou Minjiyou teď a tady" authorImage="https://eventigo.s3-central.vshosting.cloud/production/artist/dollar-prync-generace-rap-kopie-jpg-zjekmo.jpeg" />
                </div>
            </div>
            <footer className="py-4 text-center text-neutral-400 bg-neutral-800">
                <p>
                    minjiya is not in any way affiliated with Tailwind CSS,
                    Next.js, React, Go, Prisma, Expo or its creators.
                </p>
            </footer>
        </>
    );
}
