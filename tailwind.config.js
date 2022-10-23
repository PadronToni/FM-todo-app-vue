/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      'current-color': 'currentColor',
      inherit: 'inherit',
      primary: {
        "blue": 'hsl(220, 98%, 61%)',
        "cyan": 'hsl(192, 100%, 67%)',
        "fuchsia": 'hsl(280, 87%, 65%)'
      },
      'neutral-light': {
        50: 'hsl(0, 0%, 98%)',
        100: 'hsl(236, 33%, 92%)',
        200: 'hsl(233, 11%, 84%)',
        300: 'hsl(236, 9%, 61%)',
        600: 'hsl(235, 19%, 35%)'
      },
      'neutral-dark': {
        50: 'hsl(236, 33%, 92%)',
        100: 'hsl(234, 39%, 85%)',
        300: 'hsl(234, 11%, 52%)',
        400: 'hsl(233, 14%, 35%)',
        500: 'hsl(237, 14%, 26%)',
        700: 'hsl(235, 24%, 19%)',
        900: 'hsl(235, 21%, 11%)'
      }
    },
    extend: {
      fontFamily: {
        sans: [
          'Josefin Sans',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif'
        ]
      }
    }
  },
  plugins: [],
}
