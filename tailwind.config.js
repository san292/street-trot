/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '390px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },

    extend: {
      colors: {
        secondary: '	rgb(255,215,120)',
        seconadaryHover: 'rgb(255,215,50)',
        primary: 'rgb(45,45,45)',
        button: 'rgb(156 163 175)',
        hoover: 'gray'
      }
    }
  },
  plugins: []
};
