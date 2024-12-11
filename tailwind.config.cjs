module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial': 'radial-gradient(125% 125% at 50% 10%, #000 40%, #16a34a 100%)',
      }
    },
  },
  plugins: [require('daisyui')],
};
