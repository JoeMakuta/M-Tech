/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%": { transform: "translate(100%)" },
          "100%": { transform: "translate(0px)" },
        },
        wiggle1: {
          "0%": { transform: "translate(-100%)" },
          "100%": { transform: "translate(0px)" },
        },
      },
      animation: {
        wiggle: "wiggle 0.2s ease-in-out",
        wiggle1: "wiggle1 0.2s ease-in-out",
      },
      fontFamily: {
        MainFont: ["Manrope"],
      },
      backgroundImage: {
        login_background: "url('/src/assets/img/bg_m_tech.webp')",
      },
    },
  },
  plugins: [],
};
