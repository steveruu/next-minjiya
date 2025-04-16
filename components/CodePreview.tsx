export default function CodePreview() {
    return (
        <div className="w-[calc(100vw-2rem)] max-w-screen min-[552px]:w-fit min-[552px]:mx-auto relative group scale-100 border border-[#8b5cf6]/30">
            {/* Background glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8b5cf6]/30 via-[#a78bfa]/20 to-[#ec4899]/30 rounded-none blur-sm opacity-40" />

            {/* Main container */}
            <div className="relative">
                {/* Tab bar */}
                <div className="flex items-center bg-gradient-to-r from-[#1a1a1a] via-[#1c1c1c] to-[#161616] rounded-none px-4 py-2">
                    <div className="flex space-x-2">
                        <div className="w-2.5 h-2.5 rounded-none bg-[#ec4899]/60" />
                        <div className="w-2.5 h-2.5 rounded-none bg-[#a78bfa]/60" />
                        <div className="w-2.5 h-2.5 rounded-none bg-[#8b5cf6]/60" />
                    </div>
                    <span className="ml-4 text-xs uppercase tracking-wider text-white/70 font-bricolage">
                        page.tsx
                    </span>
                </div>

                {/* Code content */}
                <pre className="overflow-x-auto bg-[#161616] backdrop-blur-md rounded-none shadow-md border-[#8b5cf6]/20">
                    <code className="block text-[13px] md:text-sm leading-tight text-white py-2 md:py-4 px-2 md:px-4 font-mono">
                        <span className="text-[#8b5cf6]/90">import</span>{" "}
                        <span className="text-white">Header</span>{" "}
                        <span className="text-[#8b5cf6]/90">from</span>{" "}
                        <span className="text-[#ec4899]/80">
                            &quot;@/components/Header&quot;
                        </span>
                        ;
                        <br />
                        <br />
                        <span className="text-[#8b5cf6]/90">
                            export default function
                        </span>{" "}
                        <span className="text-[#a78bfa]">Home</span>() {"{"}
                        <br />
                        <span className="text-[#8b5cf6]">return</span> ( <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-[#a78bfa]/90">&lt;div</span>{" "}
                        <span className="text-[#ec4899]/80">className</span>=
                        <span className="text-[#ec4899]/80">
                            &quot;min-h-screen flex flex-col justify-center
                            items-center&quot;
                        </span>
                        <span className="text-[#a78bfa]/90">&gt;</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-[#a78bfa]/90">&lt;Header /&gt;</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-[#a78bfa]/90">&lt;main</span>{" "}
                        <span className="text-[#ec4899]/80">className</span>=
                        <span className="text-[#ec4899]/80">
                            &quot;text-center px-4&quot;
                        </span>
                        <span className="text-[#a78bfa]/90">&gt;</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-[#a78bfa]/90">&lt;h1</span>{" "}
                        <span className="text-[#ec4899]/80">className</span>=
                        <span className="text-[#ec4899]/80">
                            &quot;text-5xl font-bold text-white mb-4&quot;
                        </span>
                        <span className="text-[#a78bfa]/90">&gt;</span>
                        <span className="text-white bg-clip-text text-transparent bg-gradient-to-r from-[#8b5cf6] via-[#a78bfa] to-[#ec4899]">minjiya</span>
                        <span className="text-[#a78bfa]/90">&lt;/h1&gt;</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-[#a78bfa]/90">&lt;p</span>{" "}
                        <span className="text-[#ec4899]/80">className</span>=
                        <span className="text-[#ec4899]/80">&quot;text-xl&quot;</span>
                        <span className="text-[#a78bfa]/90">&gt;</span>
                        <span className="text-white">
                            shaping the future with Next.js & React
                        </span>
                        <span className="text-[#a78bfa]/90">&lt;/p&gt;</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-[#a78bfa]/90">&lt;/main&gt;</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-[#a78bfa]/90">&lt;/div&gt;</span>
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
