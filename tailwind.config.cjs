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
        '30': '7.5rem',
        '88': '21rem'
      },
      height: {
        '30': '7.5rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
