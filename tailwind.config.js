/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*{html,js}'],
  theme: {
    // container: {
    //   center: true,
    //   padding: '16px',
    // }
    extend: {
      colors: {
        primary: 'linear-gradient(270deg, #21A2DC 0%, #B221E3 100%, #B221E3 100%);',
      },
      // screens: {
      //   '2xl': '1320px',
      // }
    },
  },
  plugins: [],
}

