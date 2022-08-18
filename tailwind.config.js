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
        secondary: '	rgb(255,215,120)',
        secondaryHover: ' rgb(156 163 175)',
        primary: 'rgb(45,45,45)',
        button: 'rgb(212 212 216)',
        background: 'rgb(156 163 175)'
      }
    }
  },
  plugins: []
};
