import { FC } from 'react';

import Header from 'components/molecules/Header';
import BlogSeo from 'components/molecules/BlogSeo';
import { FrontMatter } from 'types/models/post';
import BlogPostTitle from 'components/molecules/BlogPostTitle';

type Props = {
  frontMatter: FrontMatter;
};

const MainLayout: FC<Props> = ({ children, frontMatter }) => {
  const { slug } = frontMatter;

  return (
    <>
      <Header />
      <BlogSeo
        url={`https://queq1890.info/blog/${slug}`}
        title={frontMatter.title}
        summary={frontMatter.summary}
        publishedAt={frontMatter.publishedAt}
        image={frontMatter.image}
      />
      <main className="flex flex-col justify-center md:px-8 px-4 pb-8">
        <article className="flex flex-col justify-center items-start mx-auto w-full max-w-screen-md">
          <BlogPostTitle
            title={frontMatter.title}
            publishedAt={frontMatter.publishedAt}
          />
          <div className="prose dark:prose-dark flex flex-col justify-center items-start mx-auto w-full max-w-screen-md">
            {children}
          </div>
        </article>
      </main>
    </>
  );
};

export default MainLayout;
