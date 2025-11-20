/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        medical: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          900: '#0F172A', // Deep Medical Blue
        },
        heritage: {
          gold: '#F59E0B', // Amber 500
        },
        innovation: {
          teal: '#14B8A6', // Teal 500
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};
