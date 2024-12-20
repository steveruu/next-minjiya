export default function CodePreview() {
    return (
        <div className="w-full min-[552px]:w-fit min-[552px]:mx-auto relative group">
            {/* Background glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-300" />

            {/* Main container */}
            <div className="relative">
                {/* Tab bar */}
                <div className="flex items-center bg-zinc-800/95 rounded-t-xl px-4 py-2">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="ml-4 text-sm font-mono text-zinc-400">
                        page.tsx
                    </span>
                </div>

                {/* Code content */}
                <pre className="overflow-x-auto bg-zinc-950 rounded-b-xl shadow-xl">
                    <code className="block text-[13px] md:text-sm leading-relaxed text-white p-4 font-mono">
                        <span className="text-[#569CD6]">import</span>{" "}
                        <span className="text-white">Header</span>{" "}
                        <span className="text-[#569CD6]">from</span>{" "}
                        <span className="text-white">
                            &quot;@/components/Header&quot;
                        </span>
                        ;
                        <br />
                        <br />
                        <span className="text-[#569CD6]">
                            export default function
                        </span>{" "}
                        <span className="text-white">Home</span>() {"{"}
                        <br />
                        <span className="text-purple-300">return</span> ( <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-[#CC5656]">&lt;div</span>{" "}
                        <span className="text-yellow-400">className</span>=
                        <span className="text-green-300">
                            &quot;min-h-screen flex flex-col justify-center
                            items-center&quot;
                        </span>
                        <span className="text-[#CC5656]">&gt;</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-[#CC5656]">&lt;Header /&gt;</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-[#CC5656]">&lt;main</span>{" "}
                        <span className="text-yellow-400">className</span>=
                        <span className="text-green-300">
                            &quot;text-center px-4&quot;
                        </span>
                        <span className="text-[#CC5656]">&gt;</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-[#CC5656]">&lt;h1</span>{" "}
                        <span className="text-yellow-400">className</span>=
                        <span className="text-green-300">
                            &quot;text-5xl font-bold text-gray-800 mb-4&quot;
                        </span>
                        <span className="text-[#CC5656]">&gt;</span>
                        <span className="text-white">minjiya</span>
                        <span className="text-[#CC5656]">&lt;/h1&gt;</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-[#CC5656]">&lt;p</span>{" "}
                        <span className="text-yellow-400">className</span>=
                        <span className="text-green-300">&quot;text-xl&quot;</span>
                        <span className="text-[#CC5656]">&gt;</span>
                        <span className="text-white">
                            shaping the future with Next.js & React
                        </span>
                        <span className="text-[#CC5656]">&lt;/p&gt;</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-[#CC5656]">&lt;/main&gt;</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-[#CC5656]">&lt;/div&gt;</span>
                        <br />
                        &nbsp;&nbsp;);
                        <br />
                        {"}"}
                    </code>
                </pre>
            </div>
        </div>
    );
}
