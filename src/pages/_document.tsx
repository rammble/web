import { Html, Head, Main, NextScript } from 'next/document'
import { FC } from 'react'
import { ColorModeScript } from '@chakra-ui/color-mode'
import { current } from 'src/theme'

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
      <ColorModeScript initialColorMode={current.config.initialColorMode} />
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
