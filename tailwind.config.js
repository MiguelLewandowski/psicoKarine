/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B4513', // Marrom sienna (principal)
        secondary: '#D2B48C', // Marrom tan (secundário)
        accent: '#A0522D', // Marrom sienna escuro (destaque)
        warmGray: '#F5F5DC', // Bege claro (fundo)
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      }
    }
  },
  plugins: [],
}