const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.minimizer.push(new TerserPlugin());
    }

    return config;
  },

  async headers() {
    return [
      {
        source: '/(.*)', // 此处的正则表达式可根据您的需要进行调整
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store',
          },
        ],
      },
    ];
  },
};
