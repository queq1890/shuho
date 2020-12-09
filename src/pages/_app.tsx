import Head from 'next/head';
import { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import { Global, css } from '@emotion/react';
import MDXComponents from 'components/molecules/MDXComponents';
import 'tailwindcss/tailwind.css';
import 'utility/prism.css';

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

      <Global
        styles={css`
          @font-face {
            font-family: 'Rubik';
            src: url('/fonts/Rubik-Regular.ttf');
            font-display: swap;
          }

          html {
            min-width: 300px;
            scroll-behavior: smooth;
          }

          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: white;
          }
        `}
      />
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  );
};

export default MyApp;
