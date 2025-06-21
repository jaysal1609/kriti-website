/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /**
       * Semantic aliases
       */
      colors: {
        gold: '#F2BD4D',
        black: '#181818',
        'off-white': '#F7FAFC',
        navy: '#1A365D',
        primary: '#F2BD4D', // intentionally matches 'gold'
        'dark-gray': '#2D3748',
        background: '#181818', // same as black for maintainability
        surface: '#232323',
        cta: '#FF5722',
        muted: '#2D3748', // same as 'dark-gray' (intentionally matches for semantic alias)
      },
    },
  },
  plugins: [],
}