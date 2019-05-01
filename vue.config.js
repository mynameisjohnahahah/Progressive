const path = require('path')
const { SkeletonPlugin } = require('page-skeleton-webpack-plugin');

module.exports = {
  publicPath: './',
  pwa: {
    name: 'test-pwa',
    themeColor: '#6476DB',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
    }
  },
  // configureWebpack: {
  //   plugins: [
  //     new SkeletonPlugin({
  //       pathname: path.resolve(__dirname, './shell'),
  //       staticDir: path.resolve(__dirname, './dist'),
  //       routes: ['/']
  //     })
  //   ]
  // },
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  }
}