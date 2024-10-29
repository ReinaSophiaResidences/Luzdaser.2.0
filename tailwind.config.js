/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#313a45',
        secondary: '#F5831F',
        accent: '#B22A2E',
      },
      fontFamily: {
        sans: ['Gideon Roman', 'sans-serif'],
        serif: ['Raleway', 'serif'],
      },
    },
  },
  plugins: [],
}
