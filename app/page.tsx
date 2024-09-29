import Header from "@/components/Header";
import CodePreview from "@/components/CodePreview";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa6";

export default function Home() {
    return (
        <div className="flex min-h-screen w-screen flex-col bg-[#161729] ">
            <Header />
            <div className="flex flex-col gap-10 xl:flex-row xl:gap-0 mx-auto my-10 xl:my-[8rem] w-full max-w-[1700px]">
                <div className="flex flex-col items-center justify-center xl:w-[50%] ">
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
                    <h3 className="md:text-2xl tracking-wider text-neutral-400 font-[Rubik]">
                        shaping the future
                    </h3>
                </div>
                <CodePreview />
            </div>
            <h4 className="mt-6 text-3xl font-[Rubik] font-medium tracking-wider text-center text-neutral-200">Creating websites using tools of the future</h4>
            <div className="flex justify-center mt-5">
                <a href="#technologies" className="p-5"><FaArrowDown className="text-3xl text-neutral-200 animate-bounce" /></a>
            </div>
        </div >
    )
}