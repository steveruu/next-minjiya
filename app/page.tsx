import Header from "@/components/Header";
import CodePreview from "@/components/CodePreview";
import Technologies from "@/components/Technologies";
import Image from "next/image";
import {
    FaArrowDown,
    FaEnvelope,
    FaGithub,
    FaInstagram,
} from "react-icons/fa6";
import Form from "@/components/Form";
import OurProjects from "@/components/OurProjects";

export default function CzechHome() {
    return (
        <>
            <div className="flex min-h-screen flex-col bg-minjiya overflow-x-hidden">
                <Header czech />
                <div className="flex flex-col gap-10 xl:flex-row xl:gap-0 mx-auto mt-[6rem] xl:mt-[12rem] xl:mb-[10rem] w-full max-w-[1700px]">
                    <div className="flex flex-col items-center justify-center xl:w-[50%] ">
                        <Image
                            src="mt.svg"
                            alt="minjiya"
                            width={275}
                            height={148}
                            draggable={false}
                            loading="eager"
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
                        <FaArrowDown className="text-3xl text-white animate-bounce mb-10 xl:mb-0" />
                    </a>
                </div>
            </div>
            <div
                className="min-h-screen flex flex-col justify-around mt-10 gap-10 items-center overflow-x-hidden"
                id="technologies"
            >
                <div>
                    <p className="text-center text-xl sm:text-3xl font-semibold font-rubik">
                        pomocí{" "}
                        <span className="text-purpur">
                            cutting-edge technologií.
                        </span>
                    </p>
                    <Technologies />
                </div>
                <OurProjects />
            </div>
            <div
                className="min-h-screen bg-minjiya flex flex-col justify-around items-center px-4"
                id="contact-us"
            >
                <div>
                    <p className="text-4xl text-center font-rubik font-bold text-white">
                        Kontaktujte nás
                    </p>
                    <p className="text-xl mt-1 text-center text-neutral-400 font-rubik">
                        Máte otázku? Chcete s námi pracovat? Dejte nám vědět!
                    </p>
                    <div className="flex flex-row flex-wrap gap-4 mt-5 justify-center items-center font-rubik text-md">
                        <a
                            href="mailto:inquiries@minjiya.com"
                            className="text-neutral-400 hover:text-white inline-flex items-center gap-1 transition-colors"
                            target="_blank"
                        >
                            <FaEnvelope /> email
                        </a>
                        <a
                            href="https://instagram.com/minjiyalabs"
                            className="text-neutral-400 hover:text-white inline-flex items-center gap-1 transition-colors"
                            target="_blank"
                        >
                            <FaInstagram /> instagram
                        </a>
                        <a
                            href="https://github.com/minjiyalabs"
                            className="text-neutral-400 hover:text-white inline-flex items-center gap-1 transition-colors"
                            target="_blank"
                        >
                            <FaGithub /> github
                        </a>
                    </div>
                    <div>
                        <Form czech />
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
