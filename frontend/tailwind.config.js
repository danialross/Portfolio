/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        racing: ['"Racing Sans One"', "sans-serif"],
      },
      colors: {
        darkTone: "#4a5568", // Assuming 'stone-600' is '#4a5568'
        hoverDarkTone: "#a0aec0", // Assuming 'stone-400' is '#a0aec0'
        lightTone: "#edf2f7", // Assuming 'gray-200' is '#edf2f7'
      },
    },
  },
  plugins: [],
};
