/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container' : '1144px'
      },
      fontFamily: {
        'inter' : ["Inter", 'sans-serif']
      }
    },
  },
  plugins: [],
}