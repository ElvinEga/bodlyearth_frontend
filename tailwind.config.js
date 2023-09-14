/** @type {import('tailwindcss').Config} */
import prelinePlugin from "preline/plugin";
export default {
  content: [
    "node_modules/preline/dist/*.js",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [prelinePlugin],
};
