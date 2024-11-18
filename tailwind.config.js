/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // make sure Vite knows to check the HTML files
    "./src/**/*.{js,ts,jsx,tsx}", // specify where your JS/TS files are
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
