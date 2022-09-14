module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      "lato": ["Lato", "Arial", "sans-serif"],
      "roboto": ["Roboto", "Arial", "sans-serif"],
    },
    screens: {
      mobile: "460px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1260px",
      "desktop-xl": "1920px",
    },
    colors: {
      "lightergray": "#959494",
      "white": "#ffffff",
      "darkergray": "#454545",
      "mediumgray": "#a4a4a4",
      "playergray": "#e5e5e5",
      "headingColor": "#333232",
      "scarlet": "rgba(255, 121, 79, 0.05)",
      "footerColor": "#AFAFAF",
    },
    extend: {},
  },
  plugins: [],
}