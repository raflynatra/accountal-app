import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color-100": "#DFD1FF",
        "primary-color-200": "#C1B5FF",
        "primary-color-300": "#A49AFF",
        "primary-color-400": "#8680FF",
        "primary-color-500": "#6867e4",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          layout: {
            radius: {
              small: "0.25rem",
              medium: "0.5rem",
              large: "0.75rem",
            },
          },
          colors: {
            focus: "#6366f1",
            primary: {
              50: "#312e81",
              100: "#3730a3",
              200: "#4338ca",
              300: "#4f46e5",
              400: "#6366f1",
              500: "#818cf8",
              600: "#a5b4fc",
              700: "#c7d2fe",
              800: "#e0e7ff",
              900: "#eef2ff",
              DEFAULT: "#6366f1",
            },
            secondary: {
              50: "#10367A",
              100: "#1A4D93",
              200: "#2A6EB7",
              300: "#3D92DB",
              400: "#54BAFF",
              500: "#7ED2FF",
              600: "#98E1FF",
              700: "#BAEFFF",
              800: "#DCF9FF",
              DEFAULT: "#54BAFF",
            },
          },
        },
      },
    }),
  ],
};
export default config;
