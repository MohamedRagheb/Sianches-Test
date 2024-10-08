import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gary: {
          50: "var(--gray-color)",
        },
        black: {
          500: "var(--black-color)",
        },
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
