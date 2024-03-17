/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        racing: ['"Racing Sans One"', "sans-serif"],
      },
      colors: {
        darkTone: "#4a5568",
        hoverDarkTone: "#a0aec0",
        lightTone: "#edf2f7",
      },
    },
  },
  plugins: [],
};
