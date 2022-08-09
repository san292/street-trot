/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },

    extend: {
      colors: {
        promary: 'rgb(233 213 255)',
        secondary: 'rgb(192 132 252)',
        button: 'rgb(156 163 175)'
      }
    }
  },
  plugins: []
};
