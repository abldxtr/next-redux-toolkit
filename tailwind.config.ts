import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          from: { transform: "translateX(320px)", opacity: "0" },
          to: { transform: "none", opacity: "1" },
        },
        "fade-out": {
          from: { transform: "translateX(0px)", opacity: "1" },
          to: { transform: "translateX(320px)", opacity: "0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-in-out",
        "fade-out": "fade-out 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
