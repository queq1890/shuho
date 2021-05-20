import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Stack from 'components/atoms/Stack';
import getPosts from 'utility/getPosts';
import { FrontMatter } from 'types/models/post';
import MainLayout from 'components/molecules/MainLayout';
import BlogPost from 'components/molecules/BlogPost';
import AvatarWithName from 'components/molecules/AvatarWithName';
import { defaultSeoConfig } from 'constants/seo';

type Props = {
  posts: FrontMatter[];
};

const Index: NextPage<Props> = ({ posts }) => {
  const sortedBlogPosts = posts.sort((a: FrontMatter, b: FrontMatter) => {
    return (
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  });

  return (
    <>
      <NextSeo {...defaultSeoConfig} />
      <MainLayout>
        <div className="p-5 max-w-full">
          <AvatarWithName />

          <div className="mt-4">
            <p>ベトナム・ハノイ在住のWebアプリケーションエンジニアです。</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold">
          <div className="p-5">ブログ記事</div>
        </h2>
        <Stack spacing={4}>
          {sortedBlogPosts.map((post: FrontMatter) => (
            <BlogPost post={post} key={post.title} />
          ))}
        </Stack>
      </MainLayout>
    </>
  );
};

export const getStaticProps = () => {
  const posts = getPosts();

  return {
    props: { posts },
  };
};

export default Index;
