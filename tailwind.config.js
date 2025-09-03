/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-cairo)", "sans-serif"],
      },
      colors: {
        // خيارات لمسة براند "تراكيب"
        primary: "#454",         // لون معنوي رئيسي
        accent: "#FBBF24",       // لو تحب لمسة مميزة
      },
    },
  },
  plugins: [],
};
