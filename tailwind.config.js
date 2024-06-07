/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*html'],
  theme: {
    container: {
      center: true,
    padding: '16px',
    },
    extend: {
      colors: {
        burgundy: '#88145D',
      },
      fontFamily: {
        poppins: ['Poppins']
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

