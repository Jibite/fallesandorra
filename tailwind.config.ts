/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    "{srcDir}/components/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "{srcDir}/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "{srcDir}/pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "{srcDir}/plugins/**/*.{js,ts,mjs}",
    "{srcDir}/composables/**/*.{js,ts,mjs}",
    "{srcDir}/utils/**/*.{js,ts,mjs}",
    "{srcDir}/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}",
    "{srcDir}/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}",
    "{srcDir}/app.config.{js,ts,mjs}",
    "{srcDir}/app/spa-loading-template.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F8F6EC',
        primaryOverlay: 'rgba(248, 246, 236, 0.75)',
        secondary: '#42413C',
        secondaryRgb: 'rgb(66, 65, 60)',
        green: '#779E66',
        greenRgb: 'rgb(119, 158, 102)',
        greenOverlay: 'rgba(119, 158, 102, 0.8)',
        yellow: '#FDCC65',
        yellowRgb: 'rgb(253, 204, 101)',
        orange: '#F0824E',
        orangeRgb: 'rgb(240, 130, 78)',
        grey: '#B2B2B2',
        bg: '#050508',
        bgSecondary: '#0d2538',
        bgOverlay: 'rgba(5, 5, 8, 0.35)',
      },
      fontFamily: {
        primary: ['Fjalla One', 'sans-serif'],
        secondary: ['Noto Sans', 'sans-serif']
      },
      textShadow: {
        sm: '0 1px 2px #050508',
        DEFAULT: '0 2px 4px #050508',
        lg: '0 4px 8px #050508',
        xl: '0 8px 16px #050508',
      },
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-shadow"),
  ],
}

