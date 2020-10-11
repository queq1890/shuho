import { useEffect } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MDXProvider } from '@mdx-js/react';
import { Global, css } from '@emotion/core';
import MDXComponents from 'components/molecules/MDXComponents';
import theme from '../utility/theme';

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Global
        styles={css`
          body {
            height: 100vh;
          }
          #__next {
            display: flex;
            flex-direction: column;
            height: 100%;
            background: 'white';
          }
        `}
      />
      <ThemeProvider theme={theme}>
        <MDXProvider components={MDXComponents}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </MDXProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
