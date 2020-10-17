import { NextPage } from 'next';
import { Stack } from '@chakra-ui/core';
import MainLayout from 'components/layouts';
import BlogPost from 'components/molecules/BlogPost';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import { frontMatter as blogPosts } from './blogs/*.mdx';

const Index: NextPage = () => {
  return (
    <MainLayout>
      <Stack spacing={4}>
        {blogPosts.map((post) => (
          <BlogPost post={post} key={post.title} />
        ))}
      </Stack>
    </MainLayout>
  );
};

export default Index;
