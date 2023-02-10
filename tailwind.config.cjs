/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        leftIn: {
          "0%": { transform: "translate(100%)" },
          "100%": { transform: "translate(0px)" },
        },
        rightIn: {
          "0%": { transform: "translate(-100%)" },
          "100%": { transform: "translate(0px)" },
        },
        
      },
      animation: {
        leftIn: "leftIn 0.2s ease-in-out",
        rightIn: "rightIn 0.2s ease-in-out",
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
