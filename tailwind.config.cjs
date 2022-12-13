'use strict';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkblue: '#0A4E7A',
        lightblue: '#92bedf',
        lightgray: '#EAEBED',
      },
      fontFamily: {
        Archivo: ['Archivo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
