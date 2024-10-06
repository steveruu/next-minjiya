import Header from "@/components/Header";
import CodePreview from "@/components/CodePreview";
import Technologies from "@/components/Technologies";
import Image from "next/image";
import QuoteCard from "@/components/QuoteCard";
import { FaArrowDown, FaEnvelope, FaGithub, FaInstagram } from "react-icons/fa6";
import Form from "@/components/Form";

export default function CzechHome() {
    return (
        <>
            <div className="flex min-h-screen flex-col bg-minjiya overflow-x-hidden">
                <Header czech={true} />
                <div className="flex flex-col gap-10 xl:flex-row xl:gap-0 mx-auto mt-[6rem] xl:mt-[12rem] xl:mb-[10rem] w-full max-w-[1700px]">
                    <div className="flex flex-col items-center justify-center xl:w-[50%] ">
                        <Image
                            src="mt.svg"
                            className="inline hover:animate-spin"
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
                    Tvoříme <span className="text-purpur">budoucnost</span>
                </h3>
                <div className="flex justify-center mt-5">
                    <a href="#technologies" className="p-5">
                        <FaArrowDown className="text-3xl text-white animate-bounce" />
                    </a>
                </div>
            </div>
            <div className="min-h-screen flex flex-col justify-around mt-10 gap-10 items-center overflow-x-hidden" id="technologies" >
                <div>
                    <p
                        className="text-center text-xl sm:text-3xl font-semibold font-rubik"
                    >
                        pomocí{" "}
                        <span className="text-purpur">
                            cutting-edge technologií.
                        </span>
                    </p>
                    <Technologies />
                </div>
                <div className="w-full">
                    <p
                        id="references"
                        className="pt-10 text-center text-3xl font-semibold font-rubik"
                    >
                        Naše reference
                    </p>
                    <div className="flex flex-row flex-wrap gap-4 mt-10 mb-10 justify-center items-center max-w-[80%] mx-auto">
                        <QuoteCard author="Dollar Prync" quote="Sleduj malá Minjiyo, sleduj teď" authorImage="https://eventigo.s3-central.vshosting.cloud/production/artist/dollar-prync-generace-rap-kopie-jpg-zjekmo.jpeg" />
                        <QuoteCard author="Sergei Barracuda" quote="Budu v enháčku jak Minjiya chcípat na bolesti zad" authorImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBur3Y-4p-Z407ixxZWIvXa6sh6cRSMKsDG47gYL_PnnEZukeo" />
                        <QuoteCard author="Dollar Prync" quote="Pojď sem baby, dělej tou Minjiyou teď a tady" authorImage="https://eventigo.s3-central.vshosting.cloud/production/artist/dollar-prync-generace-rap-kopie-jpg-zjekmo.jpeg" />
                    </div>
                </div>
            </div>
            <div className="min-h-screen bg-minjiya flex flex-col justify-around items-center" id="contact-us">
                <div>
                    <p className="text-4xl text-center font-rubik font-bold text-white">
                        Kontaktujte nás
                    </p>
                    <p className="text-xl mt-1 text-center text-neutral-400 font-rubik">
                        Máte otázku? Chcete s námi pracovat? Dejte nám vědět!
                    </p>
                    <div className="flex flex-row flex-wrap gap-4 mt-5 justify-center items-center font-rubik text-md">
                        <a
                            href="mailto:inquiries@minjiya.com" className="text-neutral-400 hover:text-white inline-flex items-center gap-1 transition-colors"
                        >
                            <FaEnvelope /> email
                        </a>
                        <a
                            href="https://instagram.com/minjiyalabs" className="text-neutral-400 hover:text-white inline-flex items-center gap-1 transition-colors"
                        >
                            <FaInstagram /> instagram
                        </a>
                        <a
                            href="https://github.com/minjiyalabs" className="text-neutral-400 hover:text-white inline-flex items-center gap-1 transition-colors"
                        >
                            <FaGithub /> github
                        </a>
                    </div>
                    <div>
                        <Form />
                    </div>
                </div>
            </div>
            <footer className="py-4 text-center text-neutral-400 bg-neutral-800">
                <p>
                    minjiya není žádným způsobem spojena s Tailwind CSS,
                    Next.js, React, Go, Prisma, Expo či jejich vývojáři.
                </p>
            </footer>
        </>
    );

}
