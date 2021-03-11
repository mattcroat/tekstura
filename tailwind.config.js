const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      gray: colors.coolGray,
      yellow: colors.amber,
    },
    fontFamily: {
      heading: ['Playfair Display', 'system-ui'],
      serif: ['Merriweather', 'system-ui'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
