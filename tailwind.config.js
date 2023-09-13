/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        'heading': ['Montserrat', 'sans-serif'],
      },
      colors: {
        
        dark_blue: {
          1: '#314363',
        },
        subHeading: {
          1:'#263857'
        },
        inputbg: '#F8FBFF',
        inputtext: '#7E98BA',
        darkButton: '#142A51',
        lightButton: '#E3E3E3',
        borderColor: '#D5D5D5',
        employeeSelectContainer : '#142A51',
        employee: '#DAE2EF',
        search:'#1C3663'
      }
    },
  },
  plugins: [],
}

