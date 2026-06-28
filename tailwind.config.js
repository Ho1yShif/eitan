/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f6ede0',
        ink: '#211611',
        'ink-soft': '#4a3a30',
        curtain: '#4a1216',
        'curtain-deep': '#2c0a0d',
        'curtain-soft': '#5e1b1f',
        brass: '#cf9b46',
        'brass-light': '#e8c98a',
        rouge: '#c4492e',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Archivo', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        marquee: '0.28em',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '45%': { opacity: '1' },
          '50%': { opacity: '0.78' },
          '55%': { opacity: '1' },
        },
        shine: {
          '0%': { transform: 'translateX(-160%) skewX(-12deg)' },
          '100%': { transform: 'translateX(260%) skewX(-12deg)' },
        },
      },
      animation: {
        flicker: 'flicker 4s ease-in-out infinite',
        shine: 'shine 1.7s cubic-bezier(0.4,0,0.2,1) 0.6s 1 forwards',
      },
    },
  },
  plugins: [],
}
