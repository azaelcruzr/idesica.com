// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#004BFF", // Azul RYB
        "brand-dark": "#172672", // Cielo nocturno
        "brand-dreams": "#212121", // Sueños
        "brand-gray": "#606060", // Gris
        "brand-berry": "#4A7AFF", // Arándano
        "brand-white": "#FFFFFF", // Blanco
      },
    },
  },
  plugins: [],
};
