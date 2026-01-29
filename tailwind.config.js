module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: {
          400: '#2dd4bf', // Teal 400
          500: '#64ffda', // Teal accent
          600: '#0ea5e9', // Blue fallback
        },
        dark: {
          900: '#0a192f', // Deep Navy
          800: '#112240', // Lighter Navy
          700: '#233554', // Lightest Navy
        },
        slate: {
          100: '#ccd6f6', // Lightest text
          300: '#a8b2d1', // Secondary text
          500: '#8892b0', // Muted text
        }
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
      }
    },
  },
  plugins: [],
}
