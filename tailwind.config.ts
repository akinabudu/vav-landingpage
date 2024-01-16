/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000',
      'main': '#C36D60',
      'text': '#1E255E',
      
    },
    container: {
      center: true,
      padding: "10rem",
    },
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
};
