/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'permanent-marker': ['Permanent Marker', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
        indie: ['Indie Flower', 'cursive'],
        comforta: ['Comfortaa', 'cursive'],
        bungee: ['Bungee Shade', 'cursive'],
        'montserrat-sub': ['Montserrat Subrayada', 'sans-serif'],
        amatic: ['Amatic SC', 'cursive'],
      },
    },
  },
  plugins: [],
}
