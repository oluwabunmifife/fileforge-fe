import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 20px 50px rgba(15, 23, 42, 0.08)",
        soft: "0 12px 40px rgba(15, 23, 42, 0.12)"
      },
      colors: {
        ink: "#09111f",
        mist: "#f4f7fb",
        line: "rgba(15, 23, 42, 0.08)",
        accent: "#2f6fed",
        accentSoft: "#dce7ff"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        pulseLine: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(300%)" }
        }
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        pulseLine: "pulseLine 1.6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
