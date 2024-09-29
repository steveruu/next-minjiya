import Header from "@/components/Header";
import CodePreview from "@/components/CodePreview";
import Technologies from "@/components/Technologies";
import Image from "next/image";
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
                <h3 className="m-10 xl:m-0 text-3xl font-rubik font-medium tracking-wider text-center text-neutral-100">shaping the <span className="text-purpur">future</span></h3>
                <div className="flex justify-center mt-5">
                    <a href="#technologies" className="p-5"><FaArrowDown className="text-3xl text-white animate-bounce" /></a>
                </div>
            </div>
            <div className="min-h-screen mt-10">
                <p id="technologies" className="pt-10 text-center text-3xl font-bold font-rubik">using <span className="text-purpur">cutting edge technologies.</span></p>
                <Technologies />
            </div>
            <footer className="py-4 text-center text-neutral-400">
                <p>minjiya is not in any way affiliated with Tailwind CSS, Next.js, React, Go, Prisma or its creators.</p>
            </footer>
        </>
    )
}