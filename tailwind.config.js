/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'], // Define "Poppins" como fuente principal
      },

      minWidth: {
        '4/5': '80%', 
      },

      colors: { 
        PtahBg: '#D9D9D9',
        inputBorders : '#CBD2E0',

        activeBtn : '#959494',
        hoverBtn : '#595959'
      },

      fontSize: {
        '36': '36px',
        '16': '16px',
      },

      fontWeight: {
        thin: '100',
      },
    },
  },
  plugins: [],
}

