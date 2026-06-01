/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'karakoram': '#0A0F0F',
        'deep-slate': '#111818',
        'glacier-cream': '#F0EAE0',
        'summit-white': '#FAFAFA',
        'teal-accent': '#5EC2C2',
        'apricot': '#E8A96A',
        'gold-star': '#F5C842',
        'mouse-gray': '#888888',
        'teal-dark': '#0D4040',
        'teal-mid': '#1A6B6B',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'serif'],
      },
      letterSpacing: {
        'ultra': '0.3em',
        'wide-x': '0.2em',
      },
      backdropBlur: {
        'xl': '24px',
        '2xl': '40px',
      },
    },
  },
  plugins: [],
};
