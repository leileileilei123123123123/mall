module.exports = {
  lintOnSave: false,

  //起别名
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views",

      }
    }
  }
}