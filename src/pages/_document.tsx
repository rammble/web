import { Html, Head, Main, NextScript } from 'next/document'
import { FC } from 'react'

const Document: FC = () => (
  <Html lang="en">
    <Head>
      <script
        src="https://unpkg.com/twemoji@latest/dist/twemoji.min.js"
        crossOrigin="anonymous"
      ></script>
      <meta charSet="utf-8" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
