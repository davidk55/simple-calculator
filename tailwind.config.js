/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'my-red': 'rgba(253, 8, 8, 0.59)',
        'my-purple': 'rgba(165, 59, 154, 0.8)',
      },
      fontFamily: {
        'my-font': ['Roboto'],
      },
    },
  },
  plugins: [],
};
