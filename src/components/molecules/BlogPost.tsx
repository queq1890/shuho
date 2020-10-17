import { FC } from 'react';
import NextLink from 'next/link';
import { Frontmatter } from 'types/models/post';
import { Box, Heading, Link, Text } from '@chakra-ui/core';

type Props = {
  post: Frontmatter;
};

const BlogPost: FC<Props> = ({ post }) => {
  const slug = post.__resourcePath.replace('blogs/', '').replace('.mdx', '');

  return (
    <NextLink href={`blogs/${slug}`} passHref>
      <Link w="100%" href={`blogs/${slug}`}>
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
