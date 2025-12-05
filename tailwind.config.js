/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ← Dark Mode এর জন্য CLASS method
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
