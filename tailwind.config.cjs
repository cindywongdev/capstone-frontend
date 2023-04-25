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
        '26': '6.5rem',
        '30': '7.5rem',
        '88': '21rem'
      },
      height: {
        '30': '7.5rem',
        '140': '30rem',
        '160': '40rem'
      },
      inset: {
        '46': '11.5rem',
        '49': '12.25rem',
        '68': '17rem',
        '76': '19rem',
        '82': '20.5rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
