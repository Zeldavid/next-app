import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        primary: "#3B3B3B",
        secondary: "#FFFFFF",
        tertiary: "#585660",
      },
      fontFamily: {
        archivo: "var(--font-archivo)",
        inter: "var(--font-inter)",
      },
      colors: {
        colorPrimary: "#FFFFFF",
        colorSecondary: "#404040",
        colorTertiary: "#3B3B3B",
        colorSurface: "#EEEEEE",
        colorStroke: "#8F8F8F",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
