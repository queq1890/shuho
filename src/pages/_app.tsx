import Head from 'next/head';
import { AppProps } from 'next/app';
import 'styles/tailwind.scss';
import 'styles/prism.scss';
import 'styles/global.scss';

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
