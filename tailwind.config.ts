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
        sans: ["var(--font-body)", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
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
