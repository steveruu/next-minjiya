import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto">
      <picture>
        <source srcSet="/mt-day.svg" type="image/svg+xml" media="(prefers-color-scheme: light)" />
        <img src="mt.svg" className="inline" alt="minjiya" />
      </picture>
      <h1 className="text-5xl my-8 font-[Stick] leading-[1.1]">みんじや</h1>
      <code className="text-2xl tracking-widest text-[#999]">
        shaping the future
      </code>
    </main>
  );
}
