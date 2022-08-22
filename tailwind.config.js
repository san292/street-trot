/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '769px',
      lg: '976px',
      xl: '1440px'
    },

    extend: {
      colors: {
        secondary: 'rgb(71 85 105)',
        hoverButton: 'rgb(124,131,144)',
        secondaryHover: 'rgb(137,144,157)',
        primary: 'rgb(17,24,39)',
        button: 'rgb(212 212 216)',
        background: 'rgb(156 163 175)'
      }
    }
  },
  plugins: []
};
