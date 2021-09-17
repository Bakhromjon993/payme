module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'animation-own': 'spin 0.5s linear'
      },
    },
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
        400: '#313131',
        500: '#2C2C2C'
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
    },
    boxShadow: {
      sm: '0px 38.5185px 25.4815px rgba(49, 49, 49, 0.0607407), 0px 20px 13px rgba(49, 49, 49, 0.05), 0px 1.85185px 3.14815px rgba(49, 49, 49, 0.0240741);',
      md: '0px 20px 95px rgba(201, 203, 204, 0.3)'
    },

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
