const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kanit", "Helvetica", "sans-serif"],
      },
      colors: {
        orange: colors.purple,
        red: colors.purple,
        amber: colors.purple, // maps all orange-* to red-*
      },
    },
  },
  plugins: [],
}
