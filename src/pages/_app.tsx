import { useEffect } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import { Global, css } from '@emotion/core';
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import MDXComponents from 'components/molecules/MDXComponents';

import theme from 'utility/theme';
import { prismLightTheme } from 'utility/prismTheme';

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

      <ThemeProvider theme={theme}>
        <ColorModeProvider value="light">
          <CSSReset />
          <Global
            styles={css`
              @font-face {
                font-family: 'Rubik';
                src: url('/fonts/Rubik-Regular.ttf');
              }

              /* TODO: Dark mode */
              ${prismLightTheme}

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
          <MDXProvider components={MDXComponents}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <Component {...pageProps} />
          </MDXProvider>
        </ColorModeProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
