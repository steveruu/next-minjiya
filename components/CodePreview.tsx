export default function CodePreview() {
    return (
        <div className="w-[100%] xl:w-[50%] flex justify-center">
            <pre className="mx-4 overflow-y-auto md:overflow-visible md:flex-nowrap bg-zinc-950 rounded-xl">
                <span className="block text-center font-rubik text-zinc-200 text-sm bg-zinc-800 w-full rounded-tl-xl rounded-tr-xl py-2" >page.tsx</span>
                <code className="md:block text-xs md:text-base text-white py-3 pl-4 pr-6 max-w-[700px] overflow-x-hidden">
                    <span className="text-white">"use server";</span>
                    <br />
                    <span className="text-[#569CD6]">import</span> <span className="text-white">Header</span> <span className="text-[#569CD6]">from</span> <span className="text-white">"@/components/Header"</span>;
                    <br /><br />
                    <span className="text-[#569CD6]">export default function</span> <span className="text-white">Home</span>() {"{"}
                    <br />
                    <span className="text-purple-300">return</span> ( <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#CC5656]">&lt;div</span> <span className="text-yellow-400">className</span>=<span className="text-green-300">"min-h-screen flex flex-col justify-center items-center"</span><span className="text-[#CC5656]">&gt;</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#CC5656]">&lt;Header /&gt;</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#CC5656]">&lt;main</span> <span className="text-yellow-400">className</span>=<span className="text-green-300">"text-center px-4"</span><span className="text-[#CC5656]">&gt;</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#CC5656]">&lt;h1</span> <span className="text-yellow-400">className</span>=<span className="text-green-300">"text-5xl font-bold text-gray-800 mb-4"</span><span className="text-[#CC5656]">&gt;</span><span className="text-white">Minjiya</span><span className="text-[#CC5656]">&lt;/h1&gt;</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#CC5656]">&lt;p</span> <span className="text-yellow-400">className</span>=<span className="text-green-300">"text-xl"</span><span className="text-[#CC5656]">&gt;</span><span className="text-white">Shaping the Future with Next.js & React</span><span className="text-[#CC5656]">&lt;/p&gt;</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#CC5656]">&lt;/main&gt;</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#CC5656]">&lt;/div&gt;</span>
                    <br />
                    &nbsp;&nbsp;);
                    <br />
                    {"}"}
                </code>
            </pre>
        </div >
    );
}
