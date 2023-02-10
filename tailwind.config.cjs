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
        upperIn: {
          "0%": { transform: "translateY(50px)", opacity:"0" },
          "100%": { transform: "translateY(0px)", opacity:"100"  },
        },
      },
      animation: {
        leftIn: "leftIn 0.2s ease-in-out",
        rightIn: "rightIn 0.2s ease-in-out",
        upperIn: "upperIn 0.2s ease-in-out",
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
