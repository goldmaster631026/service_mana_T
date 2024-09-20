/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "280px",

      sm: "300px",

      miniSm: "400px",

      minSm: "450px",

      lsm: "600px",

      lssm: "500px",

      xlssm: "550px",

      xMiniTablet: "650px",

      miniTablet: "700px",

      md: "768px",

      gMd: "769px",

      lgMd: "800px",

      xLgMd: "900px",

      circleLg: "1000px",

      lg: "1024px",

      xlarge: "1240px",
      xl: "1280px",

      miniLarge: "1227px",

      lXl: "1281px",

      mini2xl: "1300px",

      max2xl: "1350px",

      "2xl": "1536px",
    },
    extend: {
      keyframes: {
        navHide: {
          from: {
            height: "8rem",
            opacity: "1",
          },

          to: {
            height: 0,
          },
        },
        navDisplay: {
          from: {
            height: 0,
          },
          to: { height: "8rem" },
        },
        navDisplayAnimate: { from: { height: "10rem" }, to: { height: 0 } },
        spinBlur: {
          from: {
            transform: "rotateZ(0deg) scale(1)",
          },
          to: {
            transform: "rotateZ(45deg) scale(2)",
          },
        },
        pulse: {
          "40%": {
            opacity: 0.2,
          },
          "75%": {
            opacity: 1,
            borderTop: "4px dotted #FF3C78",
            borderRight: "4px dotted #FF3C78",
          },
        },
      },
      gridTemplateColumns: {
        footer: "20% 70%",
        promoBadges: "40% 60%",
        promoBadge1: "35% 65%",
      },
      gridTemplateRows: {
        footer: "65% 30%",
        aboutTop: "5rem 10rem 13rem 20rem",
        aboutTopResponsive: "5rem 13rem 18rem 20rem",
        aboutTopMd: "8rem 18rem",
        aboutTopLarge: "8rem 30rem",
        promoTopMd: "20rem 35rem",
        promoTopLsm: "14rem 35rem",
        promoTop: "14rem 30rem",
        catalogue: "10rem 20rem 20rem 10rem",
        catalogueXlsm: "15rem 25rem 25rem 15rem",
        catalogueMd: "repeat(2, 15rem)",
        catalogueLarge: "repeat(2, 20rem)",
        catalogueMLarge: "repeat(2, 22rem)",
        catalogue2Xl: "repeat(2, minmax(0, 24rem))",
        cart: "5rem",
      },
      animation: {
        "nav-hide": "navHide .2s ease-in",
        "nav-display": "navDisplay .2s ease-in",
        "nav-display-hide": "navDisplayAnimate .2s ease-in",
      },
      gradientColorStops: {},
    },
    backgroundPosition: {
      "right-bottom": "3.5rem 7rem",
    },
  },
  plugins: [],
};
