/* eslint-disable react/no-invalid-html-attribute */
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <title>Dev Finder</title>

          <link
            rel="alternate icon"
            type="image/png"
            href="https://github.githubassets.com/favicons/favicon.png"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            href="https://github.githubassets.com/favicons/favicon.svg"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
