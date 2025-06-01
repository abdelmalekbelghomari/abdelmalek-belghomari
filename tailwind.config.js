/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    'text-white', 'text-yellow-500', 'text-blue-500',
    'w-6', 'h-6', 'w-8', 'h-8', 'w-10', 'h-10', 'w-12', 'h-12'
  ],
  theme: {
    extend: {
      colors: {
        beige: "#F6F0EA",
        darkBlue: "#1C1F27",
      },
      fontFamily: {
        signatra: ['Signatra', 'cursive'],
      },
    },
  },
  plugins: [],
}

