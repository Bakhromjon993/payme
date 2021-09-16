module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontSize: {
      sm: ['1px', '20px'],
      base: ['16px', '24px'],
      lg: ['18px', '22px'],
      xl: ['22px', '27px'],
      '2xl': ['100px','100%'],
    },
    colors: {
      grey: {
        400: '#F8F8F8',
        450: '#D8D8D8',
        500: '#7E7E7E'
      },
      white: {
        400: '#ffffff'
      },
      blue: {
        200: '#D7FCFF',
        400: '#25A4AD'
      },
      black: {
        400: '#313131'
      },
      yellow: {
        400: '#FFC229'
      },
      brown: {
        300: '#DEBBAF'
      },
      green: {
        300: '#45EC9C'
      }
    }
  },
  corePlugins: {
    container: false
  },
  variants: {
    extend: {},
  },
  plugins: [
    function({addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          margin: 'auto',
          '@screen sm': {
            maxWidth: '600px',
          },
          '@screen md': {
            maxWidth: '700px',
          },
          '@screen lg': {
            maxWidth: '800px',
          },
          '@screen xl': {
            maxWidth: '1170px',
          },
        }
      })
    }
  ],
}
