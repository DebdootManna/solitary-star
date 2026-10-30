/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F5F0E8',
        parchment: '#EAE1D5',
        charcoal: '#25232B',
        plum: '#292237',
        lavender: '#8A78C6',
        rose: '#C78F91',
        accent: '#675497',
        'warm-gray': '#686260',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Instrument Serif', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      letterSpacing: {
        label: '0.16em',
        wordmark: '0.18em',
      },
      maxWidth: {
        shell: '1440px',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
