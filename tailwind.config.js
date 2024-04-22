/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        grey: '#F4F4F4',
        black: '#000',
        'dark-medium': '#353535',
        white: '#fff',
        'light-black': '#232323',
        purple: '#5D47E9',
        mint: '#E4F6FF',
        green: '#D3FF24',
      },
      fontFamily: {
        'jakarta': ['"Plus Jakarta Sans"', 'sans-serif']
      }
    },
  },
  plugins: [],
}

