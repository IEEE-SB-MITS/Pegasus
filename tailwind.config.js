/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        BrunoAce: ['BrunoAce', 'sans-serif'], 
        ProductSans: ['ProductSans', 'sans-serif'],
        Dirtyline: ['Dirtyline','sans-serif'],
        ITCMedium: ['ITCMedium', 'sans-serif'],
        AvantM: ['AvantM', 'sans-serif'],
        RobotoSlab: ['RobotoSlab', 'sans-serif'],
        Orbitron: ['Orbitron', 'sans-serif']
      },
      keyframes: {
        fog: {
          "0%": { transform: "translateX(0) translateY(0)" },
          "50%": { transform: "translateX(-10%) translateY(-5%)" },
          "100%": { transform: "translateX(0) translateY(0)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        cloudSlow: "cloudSlow 60s linear infinite",
        cloudReverse: "cloudReverse 90s linear infinite",
        pulseSlow: "pulseSlow 6s ease-in-out infinite",
      },
      keyframes: {
        cloudSlow: {
          "0%": { transform: "translate(0,0)" },
          "100%": { transform: "translate(300px,150px)" },
        },
        cloudReverse: {
          "0%": { transform: "translate(0,0)" },
          "100%": { transform: "translate(-300px,-150px)" },
        },
        pulseSlow: {
          "0%,100%": { opacity: "0.35" },
          "50%": { opacity: "0.6" },
        },
      },
    },
  },
  plugins: [],
};
