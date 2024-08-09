/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fade: {
          '0% , 100%': { opacity: 0 },
          '50%': { opacity: 1 }
        },
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        },
      },
      animation: {
        fade: 'fade 2s infinite',
        slide: 'slide 30s linear infinite',
      }
    },
  },
  plugins: [],
}