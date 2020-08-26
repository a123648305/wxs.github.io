const merge = require("webpack-merge");
const tsImportPluginFactory = require("ts-import-plugin");

module.exports = {
  parallel: false,
  outputDir: "../dist",
  publicPath: process.env.NODE_ENV === "production" ? "/cat-movie/" : "/",
  chainWebpack: config => {
    config.module
      .rule("ts")
      .use("ts-loader")
      .tap(options => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: "vant",
                libraryDirectory: "es",
                style: true
              })
            ]
          }),
          compilerOptions: {
            module: "es2015"
          }
        });
        return options;
      });
  },
  // 代理设置
  devServer: {
    port: 8099,
    proxy: {
      "/api": {
        target: "http://m.maoyan.com", // "http://piaofang.maoyan.com/",
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
    // 开启https 访问时使用https://172.31.120.61:8081
    // https://localhost:8081 也可以访问，不过自带info请求会报错 不清楚具体原因
    // https: false
  }
};
