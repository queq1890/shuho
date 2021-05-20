/* eslint-disable global-require */
import fs from 'fs';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import path from 'path';
import { format } from 'date-fns';
import { serialize } from 'next-mdx-remote/serialize';

const root = process.cwd();

export async function getFileBySlug(slug) {
  const source = fs.readFileSync(
    path.join(root, 'contents', `${slug}.mdx`),
    'utf8'
  );

  const { data, content } = matter(source);
  const mdxSource = await serialize(content, {
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
