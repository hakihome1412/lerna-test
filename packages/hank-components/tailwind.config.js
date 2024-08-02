/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      border: "rgba(255, 255, 255, 0.1)",
      white40: "rgba(255, 255, 255, 0.4)",
      gray: "#1B1B1B",
      yellow: "#1DFF21",
      yellow40: "rgba(255, 255, 0, 4)",
      primary: "#1DFF21",
      "gray-1": "#FFFFFF1A",
      "gray-2": "#FFFFFF33",
    },
    extend: {},
  },
  plugins: [],
};
