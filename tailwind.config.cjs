/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-green': '#ddedaa'
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
