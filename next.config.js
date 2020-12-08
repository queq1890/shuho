const mdxPrism = require('mdx-prism');
const withMdxEnhanced = require('next-mdx-enhanced');
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

module.exports = withPreact(
  withMdxEnhanced({
    fileExtensions: ['mdx'],
    layoutPath: 'src/components/layouts',
    defaultLayout: true,
    remarkPlugins: [
      require('remark-autolink-headings'),
      require('remark-slug'),
      require('remark-code-titles'),
    ],
    rehypePlugins: [mdxPrism],
  })(config)
);
