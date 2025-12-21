/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#030014', // Preto profundo com tom azulado
        primary: '#7000ff',    // Roxo elétrico
        secondary: '#00f0ff',  // Ciano neon
        surface: '#0f0c29',    // Superfície escura
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Recomendo importar Inter ou Plus Jakarta Sans no CSS
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'border-beam': 'border-beam 4s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'border-beam': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}