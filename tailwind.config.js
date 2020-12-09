module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e1ebff',
          100: '#b1c2ff',
          200: '#7e99ff',
          300: '#4c71ff',
          400: '#1a48ff',
          500: '#002ee6',
          600: '#0024b4',
          700: '#001a82',
          800: '#000e51',
          900: '#000521',
        },
        secondary: {
          secondary: {
            50: '#ffe1f2',
            100: '#ffb1d2',
            200: '#ff7eb2',
            300: '#ff4c93',
            400: '#ff1a74',
            500: '#e6005b',
            600: '#b40047',
            700: '#820032',
            800: '#50001e',
            900: '#20000b',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
