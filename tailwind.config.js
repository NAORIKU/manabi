module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{ts,tsx}"],
  darkMode: "media",
  theme: {
    screens: {
      // Need to sort in order of size
      tablet: { max: "991px" },
      "mobile-landscape": { max: "767px" },
      "mobile-portrait": { max: "479px" },
    },
    fontSize: {
      xs: ["12px", { lineHeight: "18px" }],
      sm: ["16px", { lineHeight: "30px" }],
      base: ["18px", { lineHeight: "36px" }],
      lg: ["22px", { lineHeight: "36px" }],
      xl: ["26px", { lineHeight: "36px" }],
      "2xl": ["32px", { lineHeight: "48px" }],
    },
    extend: {
      // Default Styling: https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
      typography: {
        DEFAULT: {
          css: {
            fontSize: "18px",
            lineHeight: "36px",
            h1: {
              fontSize: "32px",
              lineHeight: "48px",
            },
            h2: {
              fontSize: "26px",
            },
            h3: {
              fontSize: "22px",
            },
            ul: {
              marginTop: "10px",
              marginBottom: "25px",
            },
            ol: {
              marginTop: "10px",
              marginBottom: "25px",
            },
            li: {
              marginTop: 0,
              marginBottom: 0,
            },
            code: {
              borderRadius: "6px",
              paddingTop: "2.72px",
              paddingLeft: "5.44px",
              paddingBottom: "2.72px",
              paddingRight: "5.44px",
              backgroundColor: "rgba(175, 184, 193, 0.2)",
              fontSize: "85%",
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
          },
        },
        sm: {
          css: {
            fontSize: "16px",
            lineHeight: "30px",
            h1: {
              fontSize: "24px",
              lineHeight: "36px",
            },
            h2: {
              fontSize: "20px",
            },
            h3: {
              fontSize: "18px",
            },
          },
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
