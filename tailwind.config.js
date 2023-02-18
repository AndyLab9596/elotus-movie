/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    gridTemplateColumns: {
      'auto-fill': 'repeat(auto-fill, minmax(200px, 1fr))'
    },
    extend: {
      height: {
        128: '40rem'
      },
      keyframes: {
        fadeIn: {
          '0%' : {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5 ease-in-out .75s'
      }
    },
  },
  plugins: [],
}
