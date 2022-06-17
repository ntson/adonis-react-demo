/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/views/**/*.edge',
    './resources/js/**/*.{tsx,js,jsx,ts}',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
