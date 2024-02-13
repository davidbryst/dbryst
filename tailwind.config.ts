import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily:{
      "p": ["palatino", "sans-serif"],
      "pl": ["palatino-linotype", "sans-serif"],
      "pl-bold": ["palatino-linotype-bold", "sans-serif"],
      "pl-italic": ["palatino-linotype-italic", "sans-serif"],
      "pl-bold-italic": ["palatino-linotype-bold-italic", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
