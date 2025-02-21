import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

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
                sans: ["var(--font-schibsted)", "sans-serif"],
                mona: ["Mona Sans", "sans-serif"],
                rubik: ["Rubik", "sans-serif"],
                stick: ["Stick", "sans-serif"],
                spaceGrotesk: ["Space Grotesk", "sans-serif"],
                mono: ["Space Mono", "monospace"],
                satoshi: ["Satoshi", "monospace"],
            },
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-100%)" },
                },
                "gradient-xy": {
                    "0%, 100%": {
                        "background-size": "400% 400%",
                        "background-position": "left center",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "right center",
                    },
                },
            },
            animation: {
                marquee: "marquee 45s linear infinite",
                marquee2: "marquee 20s linear infinite",
            },
        },
    },
    plugins: [animate],
};
export default config;
