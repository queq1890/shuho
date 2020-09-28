import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { Frontmatter, MdxSource } from 'types/models/mdx';

const root = process.cwd();

type Props = {
  mdxSource?: MdxSource;
  frontMatter: Frontmatter;
};

const Mdx: NextPage<Props> = ({ mdxSource, frontMatter }) => {
  const hydrated = hydrate(mdxSource);

  return (
    <div>
      <span>{frontMatter.title}</span>
      {hydrated}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join(root, 'src/contents'));
  const paths = files.map((fileName) => ({
    params: { slug: path.parse(fileName).name },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params;
  const source = fs.readFileSync(
    path.join(root, 'src/contents', `${slug}.mdx`),
    'utf8'
  );
  const { data, content } = matter(source);
  const mdxSource = await renderToString(content);

  return { props: { mdxSource, frontMatter: data } };
};

export default Mdx;
