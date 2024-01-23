/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsla(14, 45%, 36%, 1)',
        secondary: 'hsla(332, 51%, 32%, 1)',
        body: 'hsla(30, 11%, 34%, 1)',
        main: 'hsla(30, 54%, 90%, 1)',
        content: 'hsla(0, 0%, 100%, 1)',
        highlight: 'hsla(331, 100%, 98%, 1)',
        divider: 'hsla(30, 18%, 87%, 1)',
      },
      fontFamily: {
        display: [
          '"Young Serif"',
          'ui-system',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe-UI',
          'sans-serif',
        ],
        body: [
          'Outfit',
          'ui-system',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe-UI',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
