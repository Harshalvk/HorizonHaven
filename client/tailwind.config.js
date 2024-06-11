/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#0061E0',
        'secondary': '#0D263B',
        'state-gray': '#7C8893'
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}

