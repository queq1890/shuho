module.exports = {
  webpack: (config, options) => {
    config.resolve.extensions.push('.ttf');
    config.module.rules.push({
      test: /\.ttf/,
      loader: 'url-loader',
    });

    return config;
  },
};
