/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',
        secondary: '#FBBF24',
        accent: '#10B981',
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
        serif: ['Raleway', 'serif'],
      },
    },
  },
  plugins: [],
}
