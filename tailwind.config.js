import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#f6f7ee',
          100: '#eaedda',
          200: '#d6dcba',
          300: '#bbc591',
          400: '#a1ae6d',
          500: '#84934f',
          600: '#606c38',
          700: '#4f5a31',
          800: '#41492b',
          900: '#383f28',
          950: '#1d2112',
        },
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
}