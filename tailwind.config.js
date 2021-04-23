module.exports = {
  purge: {
    enabled: true,
    content: ['./**/*.html',]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#FE3254',
        'secondary': '#3396FF',
        'orange': '#FF6851',
      },
      fontFamily: {
        sans: ['Montserrat', 'Roboto', 'sans-serif']
      },
      // screens: {
      //   'mediano': {
      //     min: '860px', max: '870px'
      //   },
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
