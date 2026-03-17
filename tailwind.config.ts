import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0E0D0B",
        surface: "#1C1A16",
        "surface-2": "#252219",
        gold: "#D4A853",
        "gold-light": "#E8C87A",
        cream: "#E8E0D0",
        "cream-dim": "#B8B0A0",
        lime: "#C5FF3E",
      },
      fontFamily: {
        display: ["Bebas Neue", "sans-serif"],
        editorial: ["Cormorant Garamond", "serif"],
        sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
