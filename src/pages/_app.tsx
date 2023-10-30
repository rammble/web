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
    bg: '#121217',
    ui: '#FFFFFF',
    'blurred-overlay': '#10101499',
  },
  styles: {
    global: {
      html: {
        bg: 'bg',
      },
      body: {
        bg: 'bg',
        color: 'ui',
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
