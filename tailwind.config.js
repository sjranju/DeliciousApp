/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      maxWidth: {
        '2xs': '200px',
        '3xs': '160px'
      },
      fontSize: {
        '2xs': '8px',
      },
      colors: {
        'slightBlack': '#282c3f'
      },
      keyframes: {
        moveRightToLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: '-translateX(30%)' }
        },
        moveLeftToRight: {
          '0%': { transform: '-translateX(30%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        moveBottomToTop: {
          '0%': { tranform: 'translateY(100%)' },
          '100%': { tranform: '-translateY(20%)' },
        },
        itemNotExistsMessage: {
          '0%': { tranform: 'translateY(100%)' },
          '100%': { tranform: 'translateY(10%)' }
        }
      },
      animation: {
        moveRightToLeft: 'moveRightToLeft 0.3s ease-out',
        moveLeftToRight: 'moveLeftToRight 0.2s ease-in',
        moveBottomToTop: 'moveBottomToTop 0.2s ease-in',
        itemNotExistsMessage: 'itemNotExistsMessage 0.2s ease-in'
      }
    },
  },
  plugins: [],
}

