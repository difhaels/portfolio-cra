/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "32px",
    },
    extend: {
      colors: {
        backgroundColor: "#C147E9",
        hoverColor1: "#E5B8F4",
        hoverColor2: "#810CA8",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
