import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        toast: "toast-animation linear 0.5s 0.1s normal forwards"
      },
      keyframes: {
        "toast-animation": {
          "0%": {
            opacity: "0",
            right: "-100%",
          },
          "100%": {
            opacity: "1",
            right: "0"
          }
        }
      }
    },
  },
  plugins: [],
};
export default config;
