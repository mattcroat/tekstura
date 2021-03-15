const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      gray: colors.coolGray,
      yellow: colors.amber,
      white: colors.white,
    },
    fontFamily: {
      heading: ['Playfair Display', 'system-ui'],
      serif: ['Merriweather', 'system-ui'],
    },
    extend: {
      spacing: {
        search: '22.6rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
