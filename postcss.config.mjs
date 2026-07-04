/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    autoprefixer: {},
    // Design values are authored in px; this converts them to rem at build
    // time so the site still scales with the user's root font size.
    "postcss-pxtorem": {
      rootValue: 16,
      propList: ["*"],
      minPixelValue: 2, // keep 1px hairlines as real pixels
      mediaQuery: false,
    },
  },
};

export default config;
