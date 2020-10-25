import { NextSeoProps } from 'next-seo';

const title = 'shuho';
const description = "queq1890's blog";

const defaultSeoConfig: NextSeoProps = {
  title,
  description,
  canonical: 'https://queq1890.info',
  openGraph: {
    type: 'website',
    locale: 'ja_JP', // TODO: decide default locale
    url: 'https://queq1890.info',
    title,
    description,
    images: [
      {
        url: 'https://queq1890.info/static/images/android-chrome-192x192.png', // TODO: put og image to static folder
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
