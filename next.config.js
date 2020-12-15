const withPreact = require('next-plugin-preact');

const config = {
  experimental: {
    modern: true,
  },

  webpack: (config, { dev, isServer }) => {
    config.resolve.extensions.push('.ttf');
    config.module.rules.push({
      test: /\.ttf/,
      loader: 'url-loader',
    });

    return config;
  },
};

module.exports = withPreact(config);
