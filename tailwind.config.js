/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(95,0,144,1) 0%, rgba(187,96,235,1) 50%, rgba(97,0,148,1) 100%)',
      },
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
      'rammetto': ['Rammetto One', 'sans-serif'],
    },
  },
  plugins: [],
}