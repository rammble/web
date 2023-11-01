import 'src/styles/loading.style.css'

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
    'ui.faded': '#515E6A',
    'ui.3': '#FFFFFF0D',
    'ui.5': '#FFFFFF1F',
    'ui.10': '#FFFFFF33',
    'ui.20': '#FFFFFF4D',
    'ui.30': '#FFFFFF66',
    'ui.40': '#FFFFFF66',
    'ui.50': '#FFFFFF80',
    'ui.60': '#FFFFFF99',
    'ui.70': '#FFFFFFB3',
    'ui.80': '#FFFFFFCC',
    'ui.90': '#FFFFFFE6',
    'ui.100': '#FFFFFFFF',
    'blurred-overlay': '#10101499',
  },
  styles: {
    global: {
      '*': {
        tapHighlightColor: 'transparent',
        WebkitTapHighlightColor: 'transparent',
      },
      html: {
        bg: 'bg',
      },
      body: {
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
