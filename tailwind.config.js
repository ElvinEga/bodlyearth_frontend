/** @type {import('tailwindcss').Config} */
import prelinePlugin from "preline/plugin";
export default {
  content: [
    "node_modules/preline/dist/*.js",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js", // <--- Add this line
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        caveat: ["Work Sans, sans-serif"],
      },
    },
  },
  plugins: [prelinePlugin],
};
