module.exports = {
    plugins: [
      require("postcss-import"),
      require("autoprefixer"),
      // require('tailwindcss'),
      require("@tailwindcss/jit"),
      require("cssnano")({
        preset: "default",
      }),
      // require("@fullhuman/postcss-purgecss")({
        // content: [
        //   "index.html",
        // ],
      //   css: ['css/base/base.css']
      //   defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      // }),
    ],
  };
  