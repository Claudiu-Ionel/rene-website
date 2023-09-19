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
      red: "#FF0000",
    },
    screens: {
      slider: { min: "820px" },
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      ipadAir: { max: "820px" },
      md: { max: "768px" },
      sm: { max: "639px" },
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
        300: "300ms",
        600: "600ms",
        900: "900ms",
        1200: "1200ms",
        1500: "1500ms",
        2000: "2000ms",
      },
    },
  },
  plugins: [],
};
