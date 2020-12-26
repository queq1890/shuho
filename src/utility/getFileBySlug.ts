/* eslint-disable global-require */
import fs from 'fs';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import path from 'path';
import { format } from 'date-fns';
import renderToString from 'next-mdx-remote/render-to-string';
import MDXComponents from 'components/molecules/MDXComponents';

const root = process.cwd();

export async function getFileBySlug(slug) {
  const source = fs.readFileSync(
    path.join(root, 'contents', `${slug}.mdx`),
    'utf8'
  );

  const { data, content } = matter(source);
  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        require('remark-autolink-headings'),
        require('remark-slug'),
        require('remark-code-titles'),
      ],
      rehypePlugins: [mdxPrism],
    },
  });

  return {
    mdxSource,
    frontMatter: {
      ...data,
      slug,
      publishedAt: format(data.publishedAt, 'MMMM dd yyyy'),
    },
  };
}
