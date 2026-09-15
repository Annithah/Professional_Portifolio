/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        green: "#1F3D2E",
        greenDeep: "#16301F",
        gold: "#F2A93A",
        goldDeep: "#E09B2D",
        cream: "var(--cream)",
        card: "var(--card)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        line: "var(--line)",
        surface: "var(--surface)",
        greenFg: "var(--green-fg)",
      },
      fontFamily: {
        display: ["'Poppins'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        accent: ["'Playfair Display'", "serif"],
        script: ["'Caveat'", "cursive"],
      },
      keyframes: {
        rise: {
          "0%": { opacity: 0, transform: "translateY(14px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        rise: "rise 0.6s ease-out both",
        marquee: "marquee 22s linear infinite",
      },
    },
  },
  plugins: [],
}
