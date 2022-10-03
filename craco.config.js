// craco.config.js
module.exports = {
  devServer: {
    port: 3000
  },
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
