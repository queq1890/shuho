import { NextSeoProps } from 'next-seo';

const title = 'shuho';
const description = "queq1890's blog";

const defaultSeoConfig: NextSeoProps = {
  title,
  description,
  canonical: 'https://shuho.queq1890.vercel.app', // TODO
  openGraph: {
    type: 'website',
    locale: 'ja_JP', // TODO: decide default locale
    url: 'https://shuho.queq1890.vercel.app',
    title,
    description,
    images: [
      {
        url: 'https://shuho.queq1890.vercel.app/static/images/og.jpg', // TODO: put og image to static folder
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: '@queq1890',
    site: '@queq1890',
    cardType: 'summary_large_image',
  },
};

export { defaultSeoConfig };
