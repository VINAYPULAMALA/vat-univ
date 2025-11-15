const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kanit", "Helvetica", "sans-serif"],
      },
      colors: {
        // your existing overrides
        orange: colors.purple,
        red: colors.purple,
        amber: colors.purple,

        orange: {
          50:  "#e5f6fb",
          100: "#ccecf6",
          200: "#99d9ee",
          300: "#66c6e5",
          400: "#33b3dd",
          500: "#2596be", // main color
          600: "#1e799a",
          700: "#175b75",
          800: "#0f3d4f",
          900: "#081f2a",
        },
          purple: {
          50:  "#e5f6fb",
          100: "#ccecf6",
          200: "#99d9ee",
          300: "#66c6e5",
          400: "#33b3dd",
          500: "#2596be", // main color
          600: "#1e799a",
          700: "#175b75",
          800: "#0f3d4f",
          900: "#081f2a",
        },
        red: {
          50:  "#e5f6fb",
          100: "#ccecf6",
          200: "#99d9ee",
          300: "#66c6e5",
          400: "#33b3dd",
          500: "#2596be", // main color
          600: "#1e799a",
          700: "#175b75",
          800: "#0f3d4f",
          900: "#081f2a",
        },
        amber: {
          50:  "#e5f6fb",
          100: "#ccecf6",
          200: "#99d9ee",
          300: "#66c6e5",
          400: "#33b3dd",
          500: "#2596be", // main color
          600: "#1e799a",
          700: "#175b75",
          800: "#0f3d4f",
          900: "#081f2a",
        },
      },
    },
  },
  plugins: [],
};
