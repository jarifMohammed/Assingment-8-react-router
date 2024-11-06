import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myColor: 'rgba(149, 56, 226, 1)', // Custom color name
      },
    },
  },
  plugins: [daisyui],
}