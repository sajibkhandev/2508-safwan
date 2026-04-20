/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "jost":["Jost", "sans-serif"],
        "vol":["Vollkorn", "serif"],
      }
      ,
      colors:{
        "primary":"#00413D",
        "secondary":"#E5745D"
      }
      ,
      maxWidth:{
        'container':"1170px"
      },
       backgroundImage: {
        'banner': "url('./src/assets/banner.jpg')",
      }
    },
  },
  plugins: [],
}




