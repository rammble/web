import 'src/ptr.css'

import type { AppProps } from 'next/app'
import {
  ChakraBaseProvider,
  ChakraTheme,
  extendBaseTheme,
} from '@chakra-ui/react'
import { Rubik, Urbanist } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })
const urbanist = Urbanist({ subsets: ['latin'] })

const theme = extendBaseTheme({
  fonts: {
    heading: 'var(--font-urbanist)',
    body: 'var(--font-rubik)',
  },
  colors: {
    brand: '#49A0EE',
    bg: '#121217',
    ui: '#FFFFFF',
    'ui.40': '#FFFFFF66',
    'ui.60': '#FFFFFF99',
    'blurred-overlay': '#10101499',
  },
  styles: {
    global: {
      '*': {
        tapHighlightColor: 'transparent',
        '-webkit-tap-highlight-color': 'transparent',
      },
      html: {
        bg: 'bg',
      },
      body: {
        pt: '64px',
        bg: 'bg',
        color: 'ui',
        fontFamily: 'body',
      },
    },
  },
} satisfies Partial<ChakraTheme>)

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
