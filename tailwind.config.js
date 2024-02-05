/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit", // This enables the just-in-time mode
  theme: {
    extend: {
      colors: {
        brown: "#A8A77A",
        orange: "#EE8130",
        blue: "#6390F0",
        yellow: "#F7D02C",
        green: "#7AC74C",
        "light-blue": "#96D9D6",
        red: "#C22E28",
        purple: "#A33EA1",
        tan: "#E2BF65",
        "light-purple": "#A98FF3",
        pink: "#F95587",
        lime: "#A6B91A",
        "yellowish-brown": "#B6A136",
        "dark-purple": "#735797",
        "dark-blue": "#6F35FC",
        "dark-brown": "#705746",
        "light-gray": "#B7B7CE",
        "light-pink": "#D685AD",
      },
    },
  },
  plugins: [],
};
