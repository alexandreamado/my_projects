/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        small: "14px",
        normal: "16px",
        medio: "24px",
        large: "48px",
      },
      colors: {
        primary: "#111821",
        secondary: "#434343",
        header: "#FAFAFA",
        main: "#FFFFFF"
      }
    },
  },
  plugins: [],
};
