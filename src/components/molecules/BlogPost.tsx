import { FC } from 'react';
import NextLink from 'next/link';
import { FrontMatter } from 'types/models/post';

type Props = {
  post: FrontMatter;
};

const BlogPost: FC<Props> = ({ post }) => {
  const { slug } = post;

  return (
    <NextLink href={`blog/${slug}`} passHref>
      <a className="w-full">
        <div className="p-5">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="mt-4 text-gray-700">{post.summary}</p>
        </div>
      </a>
    </NextLink>
  );
};

export default BlogPost;
