/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        BrunoAce: ['BrunoAce', 'sans-serif'], 
        ProductSans: ['ProductSans', 'sans-serif'],
        Dirtyline: ['Dirtyline','sans-serif']
      },
      spacing: {
        'screen-minus-80': 'calc(100vh - 70px)', // Custom spacing value
      },
    },
  },
  plugins: [],
}

