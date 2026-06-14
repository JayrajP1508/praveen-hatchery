/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7ff',
          100: '#bae7ff',
          200: '#91d5ff',
          300: '#69c0ff',
          400: '#40a9ff',
          500: '#1890ff',
          600: '#0c5a8a',
          700: '#094771',
          800: '#063558',
          900: '#032340',
        },
        aqua: {
          50: '#e6fffb',
          100: '#b5f5ec',
          200: '#87e8de',
          300: '#5cdbd3',
          400: '#36cfc9',
          500: '#13c2c2',
          600: '#08979c',
          700: '#006d75',
          800: '#00474f',
          900: '#002329',
        },
      },
    },
  },
  plugins: [],
}
