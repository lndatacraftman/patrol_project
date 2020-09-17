/* eslint-disable indent */
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import",
      {
        libraryName: "view-design",
        libraryDirectory: "src/components",
      },
    ],
  ],
  // eslint-disable-next-line eol-last
};
