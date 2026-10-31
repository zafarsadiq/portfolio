import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#1e1f21",
        card: "#2a2b2e",
        line: "#3a3b3f",
        muted: "#b4b5b9",
        accent: "#ffd60a",
        ink: "#17181a",
      },
      fontFamily: {
        display: ["Oswald", "Arial Narrow", "Impact", "sans-serif"],
        sans: ["Poppins", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
