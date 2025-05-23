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
        PtahBg: '#EFEFEF',
        aqua100: "#0195A9",
        aqua26: "#bde4e9",
        orange100: "#F67102",
        orange86: "#FB9637",

        orange50: "#FFC08A",
        purple100: "#551BB3",
        darkGray: "#2F2E30",
        blackSecondary: "#5b5b5e",
        inputBorders : '#CBD2E0',

        optionCardBg: "#FAFAFA",
        activeBtn : '#959494',
        hoverBtn : '#595959',
      },

      fontSize: {
        'h1': ['66px', { lineHeight: '4.5rem' }],
        'h2': '10px',
        'body1': '24px',
        'body2': '24px',
        '36': '36px',
        '16': '16px',
      },

      boxShadow: {
        'std': '0 15px 30px 5px rgba(0, 0, 0, 0.30)',
      },

      fontWeight: { 
        bold: '600',
        thin: '200',
      },
    },
  },
  plugins: [],
}

