/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(26, 100%, 55%)',
        'primary-pale': 'hsl(25, 100%, 94%)',
      },
    },
  },
}
