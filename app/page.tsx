import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex min-h-screen w-screen flex-col bg-[#161729]">
            <Header />
            <div className="flex flex-col xl:flex-row items-center">
                <div className="flex flex-col items-center mx-auto my-10 md:my-20 w-[50%] max-w-md md:py-8">
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
                <div className="w-[100%] md:w-[50%] flex justify-center">
                    <pre className="mx-4 overflow-y-auto md:overflow-visible md:flex-nowrap bg-neutral-950 py-2 px-4 rounded-xl">
                        <code className="md:block text-xs md:text-base text-white ">
                            <span style={{ color: "#569CD6" }}>import</span> React <span style={{ color: "#569CD6" }}>from</span> <span style={{ color: "#CE9178" }}>'react'</span>;
                            <br />
                            <span style={{ color: "#569CD6" }}>import</span> Head <span style={{ color: "#569CD6" }}>from</span> <span style={{ color: "#CE9178" }}>'next/head'</span>;
                            <br />
                            <br />
                            <span style={{ color: "#569CD6" }}>export default function</span> <span style={{ color: "#ffffff" }}>Home</span>() {"{"}
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#569CD6" }}>return</span> (
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#CC5656" }}>&lt;div&gt;</span>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#CC5656" }}>&lt;Head&gt;</span>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#CC5656" }}>&lt;title&gt;</span><span style={{ color: "#ffffff" }}>My Next.js App</span><span style={{ color: "#CC5656" }}>&lt;/title&gt;</span>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#CC5656" }}>&lt;/Head&gt;</span>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#CC5656" }}>&lt;main&gt;</span>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#CC5656" }}>&lt;h1&gt;</span><span style={{ color: "#ffffff" }}>Welcome to My Next.js App</span><span style={{ color: "#CC5656" }}>&lt;/h1&gt;</span>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#CC5656" }}>&lt;p&gt;</span><span style={{ color: "#ffffff" }}>This is a sample Next.js application.</span><span style={{ color: "#CC5656" }}>&lt;/p&gt;</span>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#CC5656" }}>&lt;/main&gt;</span>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#CC5656" }}>&lt;/div&gt;</span>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;);
                            <br />
                            {"}"}
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    )
}