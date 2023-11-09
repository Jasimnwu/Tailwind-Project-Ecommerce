/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'sm': '320px',
      'md': '768px',
      'lg': '992px',
      'xl': '1320px'
    },
    container: {
      center: true,
      padding:'1rem'
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif;"
      },
      colors: {
        'primary':'#FD3D57'
      }
    },
  },
  plugins: [],
}

