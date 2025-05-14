/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f9974', // Tom de verde médio
        secondary: '#E0F2E1', // Verde bem claro
        accent: '#FF9800', // Laranja/âmbar para contraste
        warmGray: '#F5FFF7', // Fundo verde muito claro
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      }
    }
  },
  plugins: [],
} 