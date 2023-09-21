import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                bg: "#eeeded",
                text: "#030203",
                primary: "#7b7477",
                secondary: "#e1e0e0",
                accent: "#2f2d2d",
                bgDark: "#030203",
                textDark: "#eeeded",
                primaryDark: "#7b7477",
                secondaryDark: "#151414",
                accentDark: "#7d7878",
            },
        },
    },
    plugins: [],
    darkMode: "class",
};
export default config;
