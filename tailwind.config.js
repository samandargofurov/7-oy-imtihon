import daisyui from 'daisyui';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: ['Manrope', 'sans-serif']
    },
    backgroundColor: {
      body: ['#141414']
    },
    extend: {},
  },
  plugins: [daisyui],
}