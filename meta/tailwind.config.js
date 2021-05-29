module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'eyo': "url('./assets/eyo-pathed.svg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
