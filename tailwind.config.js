/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': {
          'DEFAULT': '#0c4a6e',
          'light': '#075985',
          'dark': '#082f49',
        },
        'brand-accent': {
          'DEFAULT': '#f97316',
          'light': '#fb923c',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
