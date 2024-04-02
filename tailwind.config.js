/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'Hero': "url('src/hero.webp')",
        'HeroMobile': "url('src/assets/hero-mobile.webp')",
        'Feactures': "url('src/assets/feactures.webp')"
      }
    },
  },
  plugins: [],
}