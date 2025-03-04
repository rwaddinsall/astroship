/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
      extend: {
        colors: {
          site: {
            background: '#fef6e4',
            headline: '#001858',
            paragraph: '#172c66',
            accent: '#f582ae',
          }
        },
      },
    },
    plugins: [require("@tailwindcss/typography")],
  };
