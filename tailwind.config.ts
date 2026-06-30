import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        card: "#111111",
        line: "#1E1E1E",
        "text-primary": "#FFFFFF",
        "text-secondary": "#A1A1AA",
        accent: {
          DEFAULT: "#8B5CF6",
          hover: "#7C3AED",
        },
        cyan: "#06B6D4",
        success: "#22C55E",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)",
        "accent-gradient-soft":
          "linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(6,182,212,0.10) 100%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(139,92,246,0.25), 0 8px 30px -4px rgba(139,92,246,0.25)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
