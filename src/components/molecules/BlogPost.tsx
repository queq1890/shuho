import { FC } from 'react';
import NextLink from 'next/link';
import { FrontMatter } from 'types/models/post';
import { Link } from '@chakra-ui/react';

type Props = {
  post: FrontMatter;
};

const BlogPost: FC<Props> = ({ post }) => {
  const slug = post.__resourcePath.replace('blog/', '').replace('.mdx', '');

  return (
    <NextLink href={`blog/${slug}`} passHref>
      <Link w="100%" href={`blog/${slug}`}>
        <div className="p-5">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="mt-4 text-gray-700">{post.summary}</p>
        </div>
      </Link>
    </NextLink>
  );
};

export default BlogPost;
