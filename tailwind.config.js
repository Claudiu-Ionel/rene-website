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
    extend: {},
  },
  plugins: [],
};
