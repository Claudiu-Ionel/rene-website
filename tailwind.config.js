/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      backgroundColor: "rgb(194 194 194)",
      footerColor: "#3a3a3a",
      white: "#FFF",
      red: "#FF0000",
    },
    screens: {
      slider: { min: "820px" },
      "3xl": { max: "3000px" },

      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      ipadAir: { max: "820px" },
      md: { max: "768px" },
      sm: { max: "639px" },
      fold: { max: "280px" },
    },

    extend: {
      fontFamily: {
        primary: ["Libre Bodoni", "serif"],
        secondary: ["Playfair Display", "serif"],
      },
      width: {
        nav: "calc(100% - 80px)",
      },
      backgroundImage: {
        "hero-image": "url(/Julius-Rene-hero_image.png)",
      },
      transitionDuration: {
        500: "500ms",
        1000: "1000ms",
        1500: "1500ms",
        2000: "2000ms",
        2500: "2500ms",
        3000: "3000ms",
      },
    },
  },
  plugins: [],
};
