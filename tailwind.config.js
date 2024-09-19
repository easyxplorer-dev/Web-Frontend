/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DarkBlueGray: "#1e222b",
        SlateGray: "#2b2f38",
        CharcoalGray: "#3b3e47",
        GoldenOrange: "#f5a402",
        GoldenYellow: "#f5b400",
        MaizeYellow: "#ffd154",
      },
    },
    animation: {
      meteor: "meteor 5s linear infinite",
      "text-gradient": "text-gradient 1.5s linear infinite",
    },
    keyframes: {
      "text-gradient": {
        to: {
          backgroundPosition: "200% center",
        },
      },
      meteor: {
        "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
        "70%": { opacity: 1 },
        "100%": {
          transform: "rotate(215deg) translateX(-500px)",
          opacity: 0,
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
