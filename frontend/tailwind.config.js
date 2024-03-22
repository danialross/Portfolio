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
        keyboardTone: "#eb6304",
      },
      spacing: {
        padY: "32px",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(90deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        shake: "spin 0.3s ease-out infinite",
      },
    },
  },
  plugins: [],
};
