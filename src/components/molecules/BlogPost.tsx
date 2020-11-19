import { FC } from 'react';
import NextLink from 'next/link';
import { FrontMatter } from 'types/models/post';
import { Box, Heading, Link, Text } from '@chakra-ui/react';

type Props = {
  post: FrontMatter;
};

const BlogPost: FC<Props> = ({ post }) => {
  const slug = post.__resourcePath.replace('blog/', '').replace('.mdx', '');

  return (
    <NextLink href={`blog/${slug}`} passHref>
      <Link w="100%" href={`blog/${slug}`}>
        <Box p={5}>
          <Heading fontSize="xl">{post.title}</Heading>
          <Text mt={4} color="gray.700">
            {post.summary}
          </Text>
        </Box>
      </Link>
    </NextLink>
  );
};

export default BlogPost;
