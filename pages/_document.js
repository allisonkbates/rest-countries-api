import Document, { Html, Head, NextScript, Main } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="en">
        <Head><script src="https://kit.fontawesome.com/7e70566245.js" crossOrigin="anonymous"></script><link rel="icon" href="/favicon.ico" /></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}