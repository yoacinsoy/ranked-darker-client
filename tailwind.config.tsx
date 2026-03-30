const colors = require('tailwindcss/colors')
import { type Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                parchment: "#f5eedc",
                fire: "#f97316",
                gold: "#fbbf24",
            },
            dropShadow: {
                "glow-fire": "0 0 8px rgba(249,115,22,0.6)",
                "glow-text": "0 0 5px rgba(249,115,22,0.4)",
            },
            spacing: {
                6.5: "1.625rem",
            },
        },
    },
    plugins: [],
};

export default config;
