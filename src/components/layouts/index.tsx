import { FC } from 'react';
import { Flex } from '@chakra-ui/core';

import Header from 'components/molecules/Header';
import BlogSeo from 'components/molecules/BlogSeo';
import { FrontMatter } from 'types/models/post';
import BlogPostTitle from 'components/molecules/BlogPostTitle';

type Props = {
  frontMatter: FrontMatter;
};

const MainLayout: FC<Props> = ({ children, frontMatter }) => {
  const slug = frontMatter.__resourcePath
    .replace('blog/', '')
    .replace('.mdx', '');

  return (
    <>
      <Header />
      <BlogSeo
        url={`https://shuho.queq1890.vercel.app/blog/${slug}`}
        title={frontMatter.title}
        summary={frontMatter.summary}
        publishedAt={frontMatter.publishedAt}
        image={frontMatter.image}
      />
      <Flex direction="column" as="main" justifyContent="center" px={[4, 8]}>
        <Flex
          as="article"
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
          w="100%"
        >
          <BlogPostTitle
            title={frontMatter.title}
            publishedAt={frontMatter.publishedAt}
          />
          {children}
        </Flex>
      </Flex>
    </>
  );
};

export default MainLayout;
