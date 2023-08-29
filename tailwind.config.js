/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      backgroundColor: "#9d9d9d",
      footerColor: "#3a3a3a",
      white: "#FFF",
    },
    screens: {
      "2xl": { 'max': "1535px" },
      'xl': { 'max': "1279px" },
      'lg': { 'max': "1023px" },
      'md': { 'max': "768px" },
      'sm': { 'max': "639px" },
    },

    extend: {
      fontFamily: {
        primary: ["Libre Bodoni", "serif"],
        secondary: ["Nanum Gothic", "sans-serif"],
      },
      width: {
        nav: "calc(100% - 80px)",
      },
      backgroundImage: {
        "hero-image": "url(/Julius.jpg)",
      },
    },
  },
  plugins: [],
};
