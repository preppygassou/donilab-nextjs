import Document, { Html,Head, Main, NextScript } from 'next/document'
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
 
render() {
  return (
    <Html>
    <Head>
    <link
          href="https://fonts.googleapis.com/css?family=Montserrat+Alternates:300,400,500,600,700&amp;amp;subset=latin-ext"
          rel="stylesheet"
      />
      <link rel="apple-touch-icon" href="/static/logo192.png" />
      <link rel="manifest" href="/static/manifest.json" />
      <link rel="icon" href="/static/favicon.ico" />
      <link
          rel="preload"
          href="/static/fonts/CeraRoundPro-Bold.woff2"
          as="font" type="font/woff2"
      /> 

      <link
          rel="stylesheet"
          href="/static/fonts/font-awesome/css/all.min.css"
      />

      
      <link
          rel="stylesheet"
          type="text/css"
          href="/static/css/bootstrap.min.css"
      />
      <link
          rel="stylesheet"
          type="text/css"
          href="/static/css/slick.min.css"
      />
       {this.props.styleTags}
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
  );
}

static async getInitialProps(ctx) {
  const sheet = new ServerStyleSheet()
  const originalRenderPage = ctx.renderPage

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          sheet.collectStyles(<App {...props} />),
      })

    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    }
  } finally {
    sheet.seal()
  }
}
}


