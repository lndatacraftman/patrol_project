// /* eslint-disable indent */
// module.exports = {
//     publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
//     productionSourceMap: false,
//     assetsDir: 'static',
//     indexPath: 'index.html',
//     lintOnSave: false, // eslint-loader 是否在保存的时候检查
//     devServer: {
//         // port: 8080,
//         proxy: {
//             '/api': {
//                 target: 'http://localhost:8080',
//                 changeOrigin: true,
//                 ws: true,
//                 pathRewrite: {
//                     '^/api': ''
//                 }
//             }
//         }
//     },
//     configureWebpack: {
//         // 把原本需要写在webpack.config.js中的配置代码 写在这里 会自动合并
//         externals: {
//             BMap: 'BMap',
//             BMapLib: 'BMapLib'
//         }
//     }
//     // eslint-disable-next-line eol-last
// }

const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"));
  },
  devServer: {
    port: 8080, // 端口
  },
};
