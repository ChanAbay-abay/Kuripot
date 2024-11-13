/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", "sans-serif"], //default font
      },
    },
  },
  plugins: [require("daisyui")],
};
