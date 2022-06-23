/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'test-pattern': "linear-gradient(to bottom, rgba(43, 59, 85, 0.7), rgba(15, 23, 42, 1)), url('../public/backgroundimg.jpg')",
      },
    },
  },
  plugins: [],
}
