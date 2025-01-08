/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    container : {
      center : true,
      padding : '16px'
    },
    extend: {
      colors:{
        primary: '#7300FF',
        secunder: '#FFA500',
        tersier: '#0f172a',
        samar: '#64748b',
      },
      screens: {
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}

