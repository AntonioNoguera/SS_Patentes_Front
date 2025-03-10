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
        aqua100: "#0195A9",
        aqua26: "#BCE3E8",
        orange100: "#F67102",
        orange86: "#FB9637",

        orange50: "#FFC08A",
        purple100: "#551BB3",
        darkGray: "#2F2E30",
        inputBorders : '#CBD2E0',

        optionCardBg: "#FAFAFA",
        activeBtn : '#959494',
        hoverBtn : '#595959',
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

