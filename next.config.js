const config = {
  future: {
    webpack5: true,
  },

  experimental: {
    modern: true,
  },

  webpack: (config, { dev, isServer }) => {
    config.resolve.extensions.push('.ttf');
    config.module.rules.push({
      test: /\.ttf/,
      loader: 'url-loader',
    });

    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }

    return config;
  },
};

module.exports = config;
