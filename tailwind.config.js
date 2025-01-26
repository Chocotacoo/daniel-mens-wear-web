/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1400px",
    },
    extend: {},
    fontFamily: {
      titleNameStyle: ["Bebas Neue", "serif"],
      paraTextStyle: ["Playwrite IN", "serif"],
      headingTextStyle: ["Bebas Neue", "serif"],
    }
  },
  plugins: [],
};
