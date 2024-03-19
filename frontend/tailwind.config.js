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
        hoverDarkTone: "#a8a29e",
        lightTone: "#e5e7eb",
        midTone: "#1f2937",
      },
    },
  },
  plugins: [],
};
