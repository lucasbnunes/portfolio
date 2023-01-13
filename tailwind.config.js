/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#fffeff',
        phantom: {
          50: '#f6f7f7',
          100: '#e2e5e4',
          200: '#c5cac9',
          300: '#a1a7a6',
          400: '#7c8585',
          500: '#626a6a',
          600: '#4d5453',
          700: '#404545',
          800: '#363939',
          900: '#313434',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
