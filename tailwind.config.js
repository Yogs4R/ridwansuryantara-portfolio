/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#fbbf24",
        "primary-dark": "#f59e0b",
        "background-light": "#f6f7f8",
        "background-dark": "#101922",
        "surface-dark": "#1c2b39",
        "border-dark": "#2a4055",
        "card-dark": "#192633",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.5s ease-out forwards",
        "slide-down": "slideDown 0.8s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
