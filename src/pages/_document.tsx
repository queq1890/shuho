import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
        </Head>
        <body>
          <script>0</script>
          {/* hack: 
          - <script>0</script> is to prevent FOUC
          - https://github.com/vercel/next.js/issues/15642#issuecomment-710747889 */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
