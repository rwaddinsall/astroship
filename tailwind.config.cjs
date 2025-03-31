/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
      extend: {
        colors: {
          site: {
            background: '#F0ECE4',
            headline: '#42403A',

          }
        },
      },
    },
    plugins: [require("@tailwindcss/typography")],
  };
