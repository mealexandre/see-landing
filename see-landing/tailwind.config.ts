import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          500: "#0f172a",
        },
        primary: {
          200: "#7DD6CD",
          300: "#47BDB2",
          400: "#2FA399",
          500: "#22988E",
          600: "#177B72",
        },
      },
    },
  },
  plugins: [],
};
export default config;