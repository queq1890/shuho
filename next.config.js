const withMdxEnhanced = require('next-mdx-enhanced');

module.exports = withMdxEnhanced({
  layoutPath: 'src/components/layouts',
  defaultLayout: true,
})({
  webpack: (config, options) => {
    config.resolve.extensions.push('.ttf');
    config.module.rules.push({
      test: /\.ttf/,
      loader: 'url-loader',
    });

    return config;
  },
});
