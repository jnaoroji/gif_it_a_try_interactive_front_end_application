/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 -3px -3px 7px rgba(246, 164, 191, 1), 0 3px 3px 5px rgba(94, 104, 121, 1)',
        '4xl': '0 -3px -3px 7px rgba(94, 104, 121, 1), 0 3px 3px 5px rgba(255, 255, 255, 1)'
      },
      colors: {
        'whitesmoke': '#F5F5F5'
      },
      fontFamily: {
        'mono': ['"Courier New"', 'Courier', 'monospace']

      }
  },
  plugins: [],
}
}
