const compression = require("compression-webpack-plugin");
module.exports = {
  publicPath:'./',
  lintOnSave:false ,
  configureWebpack: {
    plugins: [
      new compression({
        test: /\.(js|css)(\?.*)?$/i, // 需要压缩的文件正则
        threshold: 10240, // 文件大于这个值使用压缩
        deleteOriginalAssets: false // 压缩后保留源文件
      }),
    ],
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto",
        },
      ] 
    },
  },
  transpileDependencies: ["vuetify"],
  devServer: {
    port: 8080,
    proxy: {
      "/api": {
        target: "http://info-api.marlon1475.top/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      },
    },
    disableHostCheck: true
  },
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false
  }
};
