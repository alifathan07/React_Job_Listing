/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
   
  ],
  theme: {
    extend: {
      fontFamily: {
        sans : ['Roboto', 'sans-serif'],
      },
      gridAutoColumns : {
        "70/30" : "70% 28%"
      }
    },
  },
  plugins: [],
}

