import Image from "next/image";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <meta name="robots" content="all" />
            </Head>
            <main className="mx-auto">
                <Image
                    src="mt.svg"
                    className="inline"
                    alt="minjiya"
                    width={275}
                    height={148}
                />
                <h1 className="text-5xl my-8 font-[Stick] leading-[1.1] text-white">
                    みんじや
                </h1>
                <code className="text-2xl tracking-widest text-[#999]">
                    shaping the future
                </code>
            </main>
        </>
    );
}
