/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        racing: ['"Racing Sans One"', "sans-serif"],
      },
      colors: {
        darkTone: "#57534e",
        lightTone: "#e5e7eb",
        midTone: "#1f2937",
        evenPageTone: "#d6d3d1",
        keyboardTone: "#eb6304",
      },
      spacing: {
        padY: "56px",
      },
      translate: {
        "full-vw": "100vw",
        "-full-vw": "-100vw",
      },
    },
  },
  plugins: [],
};
