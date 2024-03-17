/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily :{
      'happySchool': ['happy_schoolregular',],
      'designer': ['designer'],
      'roboto': ['roboto']
    },
    extend: {},
  },
  plugins: [],
}

