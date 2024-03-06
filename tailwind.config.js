/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: "300px",
        xs: "480px", // Extra small screens (phones)
        sm: "640px", // Small screens (tablets)
        md: "800px", // Medium screens (small laptops)
        lg: "1024px", // Large screens (desktops)
        xl: "1280px", // Extra large screens (large desktops)
        xxl: "1400px",
      },
    },
  },
  plugins: [],
};
