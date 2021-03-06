var path = require('path')
var version = require('../package').version

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../www/index.html'),
    assetsRoot: path.resolve(__dirname, '../www'),
    assetsSubDirectory: 'static',
    // assetsPublicPath: 'https://assets-cdn.cheanjia.com/dos/merchant/'+ version
    // +'/',
    assetsPublicPath: 'https://assets-cdn.cheanjia.com/dos/merchant/common/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as Surge or Netlify
    // already gzip all static assets for you. Before setting to `true`, make sure
    // to: npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: [
      'js', 'css'
    ],
    // Run the build command with an extra argument to View the bundle analyzer
    // report after build finishes: `npm run build --report` Set to `true` or
    // `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report,
    replaceList: [
      {
        pattern: 'replacing_api',
        replaceWith: '/api/v1'
      }, {
        pattern: 'replacing_auth',
        replaceWith: '/auth/weixin'
      }, {
        pattern: 'replacing_env',
        replaceWith: 'production'
      }, {
        pattern: 'replacing_version',
        replaceWith: version
      }, {
        pattern: 'replacing_cdn_common',
        replaceWith: 'https://cheanjia-assets.oss-cn-shanghai.aliyuncs.com/common'
      }
    ]
  },
  test: {
    env: require('./test.env'),
    index: path.resolve(__dirname, '../www/index.html'),
    assetsRoot: path.resolve(__dirname, '../www'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as Surge or Netlify
    // already gzip all static assets for you. Before setting to `true`, make sure
    // to: npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: [
      'js', 'css'
    ],
    // Run the build command with an extra argument to View the bundle analyzer
    // report after build finishes: `npm run build --report` Set to `true` or
    // `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report,
    replaceList: [
      {
        pattern: 'replacing_api',
        replaceWith: '/api/v1'
      }, {
        pattern: 'replacing_auth',
        replaceWith: '/auth/weixin'
      }, {
        pattern: 'replacing_env',
        replaceWith: 'test'
      }, {
        pattern: 'replacing_version',
        replaceWith: version
      }, {
        pattern: 'replacing_cdn_common',
        replaceWith: 'https://cheanjia-assets.oss-cn-shanghai.aliyuncs.com/common'
      }
    ]
  },
  dev: {
    env: require('./dev.env'),
    port: 8000,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      // '/api': {   path: '/api',   target:'https://xx.cheanjia.com/',
      // changeOrigin: true,   ssl: false,   headers:{     cookie:'',     host:
      // 'xx.cheanjia.com',     Referer: 'https://xx.cheanjia.com/',     Origin:
      // 'https://xx.cheanjia.com/'   } }, '/auth': {   path: '/auth',   target:
      // 'https://xx.cheanjia.com/',   changeOrigin: true,   ssl: false,   headers:{
      //   cookie:'',     host: 'xx.cheanjia.com',     Referer:
      // 'https://xx.cheanjia.com/',     Origin: 'https://xx.cheanjia.com/'   } }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy" with this
    // option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps) In our experience, they
    // generally work as expected, just be aware of this issue when enabling this
    // option.
    cssSourceMap: true,
    replaceList: [
      {
        pattern: 'replacing_api',
        replaceWith: '/api/v1'
      }, {
        pattern: 'replacing_auth',
        replaceWith: '/auth/weixin'
      }, {
        pattern: '\\/\\/\\s*replacing_debug',
        replaceWith: 'import \'./debug\''
      }, {
        pattern: 'replacing_cdn_common',
        replaceWith: 'https://cheanjia-assets.oss-cn-shanghai.aliyuncs.com/common'
      }
    ]
  }
}
