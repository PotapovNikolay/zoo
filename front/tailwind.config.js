// tailwind.config.js
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "main-blue": "#4465de",
                "main-orange": "#f4a261",
                "main-gray": "#f1f7ff",
                "main-red": "#ff5463",
                "second-orange": "#ff6e45",
                "main-green": "#5dbc68",
            },
            fontFamily: {
                ninito: ["var(--font-nunito)", ...fontFamily.sans],
            },
            backgroundImage: {
                "bg-animals-fig1": "url('./src/images/fig1.png')",
            },
        },

        animation: {
            "slide-on": "slide-on 0.6s cubic-bezier(0.5, 1, 0.89, 1) 0.2s ",
            "slide-off": "slide-off 0.6s cubic-bezier(0.5, 1, 0.89, 1) ",
        },

        keyframes: {
            "slide-on": {
                "0%": {
                    opacity: "0",
                    transform: " translateY(-25%)",
                },
                "100%": {
                    opacity: "1",
                    transform: " translateY(0)",
                },
            },

            "slide-off": {
                "0%": {
                    opacity: "1",
                    transform: " translateY(0)",
                },

                "100%": {
                    opacity: " 0",
                    transform: " translateY(-25%)",
                },
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms")


    ],
};
