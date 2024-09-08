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
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
