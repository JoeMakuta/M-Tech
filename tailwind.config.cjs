/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'MainFont': ['Manrope'],
      },
      backgroundImage: {
        'login_background': "url('/src/assets/img/bg_m_tech.webp')",
      }

    },
  },
  plugins: [],
}
