/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',

  ],
  theme: {
    container: {
      center: true,
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

