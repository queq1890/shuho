import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { Stack } from '@chakra-ui/core';
import { FrontMatter } from 'types/models/post';
import MainLayout from 'components/molecules/MainLayout';
import BlogPost from 'components/molecules/BlogPost';
import { defaultSeoConfig } from 'constants/seo';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import { frontMatter as blogPosts } from './blog/*.mdx';

const Index: NextPage = () => {
  const sortedBlogPosts = blogPosts.sort((a: FrontMatter, b: FrontMatter) => {
    return (
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  });

  return (
    <>
      <NextSeo {...defaultSeoConfig} />
      <MainLayout>
        <Stack spacing={4}>
          {sortedBlogPosts.map((post: FrontMatter) => (
            <BlogPost post={post} key={post.title} />
          ))}
        </Stack>
      </MainLayout>
    </>
  );
};

export default Index;
