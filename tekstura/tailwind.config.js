const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      gray: colors.coolGray,
      yellow: colors.amber,
      white: colors.white,
      black: colors.black,
      gold: {
        light: '#edb955',
        DEFAULT: '#e2b04f',
        dark: '#d3a241',
      },
      dark: {
        DEFAULT: '#1d1c19',
      },
    },
    fontFamily: {
      heading: ['Playfair Display', 'system-ui'],
      serif: ['Merriweather', 'system-ui'],
    },
    extend: {
      screens: {
        print: { raw: 'print' },
      },
      spacing: {
        search: '22.8rem',
      },
    },
  },
  variants: {
    extend: {
      scale: ['group-hover'],
    },
  },
  plugins: [],
}
