import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          forest: "#1F5F4A",
          forestDark: "#1A523F",
          mint: "#CFF5D2",
          mintLight: "#EEF8F0",
          surface: "#F7F9F8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px -4px rgba(31, 95, 74, 0.08)",
        cardHover: "0 12px 32px -8px rgba(31, 95, 74, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
