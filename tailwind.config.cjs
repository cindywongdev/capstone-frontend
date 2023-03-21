/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-green': '#ddedaa',
        'dark-green': '#2b4141'
      },
      width: {
        '88': '21rem'
      },
      fontFamily: {
        'quicksand': ['Quicksand']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
