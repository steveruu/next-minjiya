import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                purpur: "#8F50DC",
                minjiya: "#161729",
            },
            fontFamily: {
                mona: ["Mona Sans", "sans-serif"],
                rubik: ["Rubik", "sans-serif"],
                stick: ["Stick", "sans-serif"],
            },
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-100%)" },
                },
            },
            animation: {
                marquee: "marquee 45s linear infinite",
                marquee2: "marquee 20s linear infinite",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
