/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        'default': ['Inter', 'sans-serif']
      },
      keyframes: {
        popupModal: {
          "0%": { opacity: "0", transform: "scale(0)" },
          "100%": { opacity: "100", transform: "scale(1)" },
        },
        fadeInUp:  {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      },
      animation: {
        popupModal: "popupModal .2s linear",
        fadeInUp: "fadeInUp .5s ease-in-out"
      },
      
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@fortawesome/fontawesome-free'),
    require('@fortawesome/fontawesome-svg-core'),
    require('@fortawesome/free-brands-svg-icons'),
    require('@fortawesome/free-solid-svg-icons'),
  ],
}