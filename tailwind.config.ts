import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // Support for modular structure
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0d6efd",
        secondary: "#ffc107",
        background: "#000",
        text: "#fff",
        card: "#111",
        accent: "#e63946", // Optional: Accent color
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"], // Optional: Heading font
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Optional plugin
    require("@tailwindcss/typography"), // Optional plugin
  ],
};

export default config;
