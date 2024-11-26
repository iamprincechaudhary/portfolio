/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Keeps support for class-based dark mode
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#121212',
          card: '#1E1E1E',
          text: '#E4E4E7',
          border: '#2E2E2E',
          highlight: '#BB86FC',
        },
        light: {
          bg: '#FFFFFF',
          card: '#F9FAFB',
          text: '#1F2937',
          border: '#E5E7EB',
          highlight: '#6366F1',
        },
        primary: {
          DEFAULT: '#6366F1', // Primary color
          light: '#A5B4FC',
          dark: '#4F46E5',
        },
        secondary: {
          DEFAULT: '#F59E0B',
          light: '#FDE68A',
          dark: '#D97706',
        },
      },
      spacing: {
        18: '4.5rem', // Adds custom spacing
        22: '5.5rem',
        30: '7.5rem',
        36: '9rem',
      },
      borderRadius: {
        'xl': '1rem', // Larger border radius
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'], // Custom font stack
        serif: ['Merriweather', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        spinSlow: 'spin 8s linear infinite', // Custom slow spin animation
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      screens: {
        '3xl': '1920px', // Adds a larger breakpoint
      },
      boxShadow: {
        light: '0 4px 6px rgba(0, 0, 0, 0.1)', // Custom shadows
        dark: '0 4px 6px rgba(0, 0, 0, 0.6)',
        highlight: '0 0 10px 2px rgba(99, 102, 241, 0.8)', // For highlighting elements
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Adds better form styles
    require('@tailwindcss/typography'), // Typography plugin for rich text
    require('@tailwindcss/line-clamp'), // Line clamping for text overflow
  ],
};
