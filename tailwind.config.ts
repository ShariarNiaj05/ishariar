import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: { spotlight: "spotlight 2s ease .75s 1 forwards" },
      keyframes: {},
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        text: "#f5eaec",
        primary: "#c2a7ae",
        secondary: "#287080",
        accent: "#287080",
      },
    },
  },
  plugins: [],
} satisfies Config;
