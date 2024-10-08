/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
      },
      screens:{
        '3xl': '1600px', 
        '4xl': '1920px',
      }
    },
  },
  plugins: [],
};
