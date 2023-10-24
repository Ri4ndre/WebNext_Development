/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#FFFFFF',
      'backg-dark': '#0E0F10',
      'backg-dark2': '#141516',
      'backg-light1': '#E8E8E8',
      'black': '#000000',
      'content': '#303844',
      'accent': '#0075FF',
      'accent2': '#00C2FF',
      'accent3': '#00FFD8',
      'accent4': '#00FF8C',
      'stroke1': '#404040',
      'stroke2': '#C8C8C8',
    },
    fontFamily: {
      'sans-serif': ["Cabin", "Poppins", "Ubuntu", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
        '13/16': '81.25%',
        '19/24': '79.1666667%',
      },
    }
  }
}
