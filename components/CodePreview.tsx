'use client';

import { useEffect, useState } from 'react';

export default function CodePreview() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Simple pre-rendered version for initial load
    if (!isClient) {
        return (
            <div className="w-[calc(100vw-2rem)] max-w-screen min-[552px]:w-fit min-[552px]:mx-auto relative">
                <div className="bg-zinc-950 rounded-xl shadow-xl p-4">
                    <div className="h-[248px] md:h-[300px] w-full md:w-[600px] flex items-center justify-center">
                        <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-[calc(100vw-2rem)] max-w-screen min-[552px]:w-fit min-[552px]:mx-auto relative group scale-100">
            {/* Background glow effect - only apply on client */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-sm opacity-50" />

            {/* Main container */}
            <div className="relative">
                {/* Tab bar */}
                <div className="flex items-center bg-zinc-950/90 rounded-t-xl px-4 py-2">
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
                <pre className="overflow-x-auto bg-zinc-950 backdrop-blur-md bg-zinc-950/60 rounded-b-xl shadow-xl">
                    <code className="block text-[13px] md:text-sm leading-tight text-white py-2 md:py-4 px-2 md:px-4 font-mono">
                        <span className="text-cyan-400">import</span>{" "}
                        <span className="text-purple-200">Header</span>{" "}
                        <span className="text-cyan-400">from</span>{" "}
                        <span className="text-amber-200">
                            &quot;@/components/Header&quot;
                        </span>
                        ;
                        <br />
                        <br />
                        <span className="text-cyan-400">
                            export default function
                        </span>{" "}
                        <span className="text-purple-200">Home</span>() {"{"}
                        <br />
                        <span className="text-pink-300">return</span> ( <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-orange-300">&lt;div</span>{" "}
                        <span className="text-amber-300">className</span>=
                        <span className="text-emerald-300">
                            &quot;min-h-screen flex flex-col justify-center
                            items-center&quot;
                        </span>
                        <span className="text-orange-300">&gt;</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-orange-300">&lt;Header /&gt;</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-orange-300">&lt;main</span>{" "}
                        <span className="text-amber-300">className</span>=
                        <span className="text-emerald-300">
                            &quot;text-center px-4&quot;
                        </span>
                        <span className="text-orange-300">&gt;</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-orange-300">&lt;h1</span>{" "}
                        <span className="text-amber-300">className</span>=
                        <span className="text-emerald-300">
                            &quot;text-5xl font-bold text-gray-800 mb-4&quot;
                        </span>
                        <span className="text-orange-300">&gt;</span>
                        <span className="text-white">minjiya</span>
                        <span className="text-orange-300">&lt;/h1&gt;</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-orange-300">&lt;p</span>{" "}
                        <span className="text-amber-300">className</span>=
                        <span className="text-emerald-300">&quot;text-xl&quot;</span>
                        <span className="text-orange-300">&gt;</span>
                        <span className="text-white">
                            shaping the future with Next.js & React
                        </span>
                        <span className="text-orange-300">&lt;/p&gt;</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-orange-300">&lt;/main&gt;</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-orange-300">&lt;/div&gt;</span>
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
