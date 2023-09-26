/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': 'rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px'
      },
      fontFamily: {
        audiowide: ['Audiowide', 'sans-serif'],
        spacegrotesk: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        redbase: '#E04E4E',
        graybase: '#E0E0E0',
        navbarBase: '#090b13',
        blueLogin: '#0063e5'
      }
    },
  },
  plugins: [],
}