/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: `1rem`,
        screens: {
          lg: "1170px",
        },
      },
    },
  },
  plugins: [],
};
