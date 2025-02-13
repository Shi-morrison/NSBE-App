/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js, ts, jsx, tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f0ece4",
      },
    },
  },
  plugins: [],
};
