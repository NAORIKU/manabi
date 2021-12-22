module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{ts,tsx}"],
  darkMode: "media",
  theme: {
    screens: {
      'mobile-portrait': { max: '479px' },
      'mobile-landscape': { max: '767px' },
      'tablet': { max: '991px' }
    },
    fontSize: {
      'sm': ['16px', { lineHeight: '30px' }],
      'base': ['18px', { lineHeight: '36px' }]
    },
    extend: {
    },
  },
  variants: {},
  plugins: [],
};
