import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#14212b",
        panel: "#f6f7f8",
        line: "#d8dde3",
        signal: "#0f766e",
        action: "#b42318",
        amber: "#b7791f"
      },
      boxShadow: {
        modal: "0 24px 80px rgba(15, 23, 42, 0.28)"
      }
    }
  },
  plugins: []
};

export default config;
