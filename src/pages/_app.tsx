import 'src/styles/loading.style.css'

import type { AppProps } from 'next/app'
import {
  ChakraBaseProvider,
} from '@chakra-ui/react'
import { rubik, theme, urbanist } from 'src/theme'
import {Layout} from "../layouts/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-rubik: ${rubik.style.fontFamily};
            --font-urbanist: ${urbanist.style.fontFamily};
          }
        `}
      </style>
      <ChakraBaseProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraBaseProvider>
    </>
  )
}
