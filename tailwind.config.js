/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.teal,
      },
    },
    container: {
      center: true,
      padding: "1rem"
    },
  },
  plugins: [],
};
