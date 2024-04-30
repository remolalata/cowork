import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        "neue-regrade": ["var(--font-neue-regrade)"],
        "general-sans": ["var(--font-general-sans)"]
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-title-pattern": "url('../public/images/hero-title-pattern.svg')",
        "feature-pattern": "url('../public/images/feature-pattern.png')",
        "virtual-tour-pattern": "url('../public/images/virtual-tour-pattern.png')",
        "cta-pattern": "url('../public/images/cta-pattern.png')",
        "blogs-pattern": "url('../public/images/blogs-pattern.png')",
      },
      colors: {
        "humble-black": "#1D1E1C",
        "powerless-gray": "#F1F1F1"
      }
    },
  },
  plugins: [],
};
export default config;
