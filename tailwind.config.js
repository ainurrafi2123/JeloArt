/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"], // jadi default
      },
      colors: {
        brand: {
        },
        yellow: '#ffcf07',
        orange: '#fe5a1d',
      },
      borderImage: {
        'gradient-yellow-orange': 'linear-gradient(to right, #ffcf07 33%, #fe5a1d 33%) 1',
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes
    }),
    function ({ addUtilities }) {
      addUtilities({
        '.border-image-gradient': {
          'border-image': 'linear-gradient(to top right, #ffcf07, #fe5a1d) 1',
        },
      });
    },
  ],
};
