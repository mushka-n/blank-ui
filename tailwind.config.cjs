/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E6EB',
          300: '#D1D3DB',
          400: '#9CA1AF',
          500: '#6B7080',
          600: '#4B5263',
          700: '#373E51',
          800: '#1F2637',
          900: '#111627',
        },
        primary: {
          50: '#F6F8FF',
          100: '#DEE7FF',
          200: '#C3D3FF',
          300: '#9DB5FD',
          400: '#718FFA',
          500: '#5071F4',
          600: '#3B5BE8',
          700: '#304BD1',
          800: '#2B44A9',
          900: '#111627',
        },
        red: {
          50: '#FEF2F3',
          100: '#FEE2E4',
          200: '#FECACE',
          300: '#FCA5AC',
          400: '#F8717C',
          500: '#EF4452',
          600: '#DC2635',
          700: '#B91C29',
          800: '#991B26',
          900: '#7F1D25',
        },
        green: {
          50: '#ECFDF5',
          100: '#D1FAE4',
          200: '#A7F3CE',
          300: '#6EE7B5',
          400: '#34D391',
          500: '#10B97E',
          600: '#059661',
          700: '#047851',
          800: '#065F41',
          900: '#064E37',
        },
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: 0, transform: 'translateY(-2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: 'translateX(2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: 'translateY(2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: 'translateX(-2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        slideDownAndFade:
          'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade:
          'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade:
          'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
