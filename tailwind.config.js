/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'noto': ['Noto Sans KR', 'sans-serif']
      },
    },
  },
  plugins: [],
}

