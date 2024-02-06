/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit", // This enables the just-in-time mode
  theme: {
    extend: {
      colors: {},
      backgroundImage: {
        main: "url('/src/assets/trees-bg.webp')",
      },
    },
  },
  plugins: [],
};
