export default function CodePreview() {
    return (
        <div className="w-[100%] xl:w-[50%] flex justify-center">
            <pre className="mx-4 overflow-y-auto md:overflow-visible md:flex-nowrap bg-neutral-950 py-2 pl-4 pr-6 rounded-xl">
                <code className="md:block text-xs md:text-base text-white ">
                    <span className="text-[#569CD6]">import</span> React <span className="text-[#569CD6]">from</span> <span className="text-[#CE9178]">'react'</span>;
                    <br />
                    <br />
                    <span className="text-[#569CD6]">export default function</span> <span className="text-white">Home</span>() {"{"}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">return</span> (
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#CC5656]">&lt;div&gt;</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#CC5656]">&lt;main&gt;</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#CC5656]">&lt;h1&gt;</span><span className="text-white">minjiya</span><span className="text-[#CC5656]">&lt;/h1&gt;</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#CC5656]">&lt;p&gt;</span><span className="text-white">shaping the future with Next.js & React</span><span className="text-[#CC5656]">&lt;/p&gt;</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#CC5656]">&lt;/main&gt;</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#CC5656]">&lt;/div&gt;</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;);
                    <br />
                    {"}"}
                </code>
            </pre>
        </div>
    );
}