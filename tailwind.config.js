/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        herobg: "url('./assets/heroBg.png')",
        faqbg: "url('./assets/faqsection.png')",
        download: "url('./assets/download.png')",
        aboutbg: "url('./assets/heroes-bg.png')",
        bannerbg: "url('./assets/book-banner.png')",
      },
      boxShadow: {
        "3xl": "0 0 10px rgba(0,0,0,.2)",
      },
      colors: {
        orange: "#f74a2f",
        gray: "#706f7b",
      },
    },
    fontFamily: {
      rubik: "rubik",
      poppins: "Poppins",
    },
  },
  plugins: [],
};
