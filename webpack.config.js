const webpack = require('webpack');

module.exports = {
  // Webpack配置选项
  // ...
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        comparisons: false,
      },
      output: {
        comments: false,
        ascii_only: true,
      },
    }),
    // 其他插件
  ],
};
