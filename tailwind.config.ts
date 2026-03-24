import type { Config } from "tailwind-config"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "rgb(var(--primary))",
        accent: "rgb(var(--accent))",
        neutral: "rgb(var(--neutral))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        navy: {
          50: "#e8edf5",
          100: "#c5d0e6",
          200: "#9eb3d5",
          300: "#7796c4",
          400: "#5a81b8",
          500: "#143f7a",
          600: "#103363",
          700: "#0c274c",
          800: "#081b35",
          900: "#040f1e",
        },
        gold: {
          50: "#fdf6e3",
          100: "#faeabb",
          200: "#f5d580",
          300: "#efc044",
          400: "#eab530",
          500: "#d4a020",
          600: "#b58718",
          700: "#8c6812",
          800: "#634a0d",
          900: "#3a2b08",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
