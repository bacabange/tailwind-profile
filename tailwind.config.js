module.exports = {
  purge: {
    enabled: false,
    content: ['./**/*.html',]
  },
  darkMode: 'class', // or 'media' or 'class'
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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
      }
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
