import { NextPage } from 'next';
import { NextSeo, ArticleJsonLd } from 'next-seo';

type Props = {
  title: string;
  summary: string;
  publishedAt: Date;
  url: string;
  image: string;
};

const BlogSeo: NextPage<Props> = ({
  title,
  summary,
  publishedAt,
  url,
  image,
}) => {
  const date = new Date(publishedAt).toISOString();
  const imageUrl = `https://queq1890.info${image}`;
  const featuredImage = {
    url: imageUrl,
    alt: title,
  };

  return (
    <>
      <NextSeo
        title={`${title} – shuho`}
        description={summary}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: date,
          },
          url,
          title,
          description: summary,
          images: [featuredImage],
        }}
      />
      <ArticleJsonLd
        authorName="Yuji Matsumoto"
        dateModified={date}
        datePublished={date}
        description={summary}
        images={[imageUrl]}
        publisherLogo="/static/favicons/android-chrome-512x512.png"
        publisherName="Yuji Matsumoto"
        title={title}
        url={url}
      />
    </>
  );
};

export default BlogSeo;
