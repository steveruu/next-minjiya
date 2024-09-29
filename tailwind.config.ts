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
        },
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
