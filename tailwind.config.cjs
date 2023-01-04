/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#E16E2D",
      },
      fontFamily: {
        header: ["Merriweather"],
        description: ["Martel Sans"],
      },
    },
  },
  plugins: [],
};
