/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#F5F0E6',   // warm cream (default page bg)
          secondary: '#EFE9DC', // slightly deeper for sections
          surface: '#FBF7EF',   // lightest surface for cards
          ink: '#161311',       // for footer / dark accent blocks
        },
        ink: {
          DEFAULT: '#14110D',
          soft: '#3C342A',
          muted: '#6B6157',
          faint: '#9A9081',
        },
        cream: {
          DEFAULT: '#F5F0E6',
          light: '#FBF7EF',
          warm: '#EFE9DC',
        },
        ivory: '#FBF7EF',
        gold: {
          DEFAULT: '#A8842A',
          light: '#D5AE49',
          dark: '#74591A',
          warm: '#C9A24E',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Satoshi', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseSoft: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
