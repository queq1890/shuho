import { NextPage } from 'next';
import { MDXRemote } from 'next-mdx-remote';

import { FrontMatter } from 'types/models/post';
import { getFiles } from 'utility/getFiles';
import Layout from 'components/layouts';
import MDXComponents from 'components/molecules/MDXComponents';
import { getFileBySlug } from 'utility/getFileBySlug';

type Props = { mdxSource; frontMatter: FrontMatter };

const Blog: NextPage<Props> = ({ mdxSource, frontMatter }) => {
  return (
    <Layout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const posts = await getFiles();

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const props = await getFileBySlug(slug);

  return {
    props,
  };
};

export default Blog;
