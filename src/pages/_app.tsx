import 'src/styles/loading.style.css'

import type { AppProps } from 'next/app'
import {
  ChakraBaseProvider,
  ChakraTheme,
  extendBaseTheme,
} from '@chakra-ui/react'
import { Rubik, Urbanist } from 'next/font/google'
import { rubik, theme, urbanist } from 'src/theme'

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
        <Component {...pageProps} />
      </ChakraBaseProvider>
    </>
  )
}
