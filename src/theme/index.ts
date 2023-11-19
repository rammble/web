import { Rubik, Urbanist } from 'next/font/google'
import { ChakraTheme, extendBaseTheme } from '@chakra-ui/react'
import { colors } from 'src/theme/colors'

export const rubik = Rubik({ subsets: ['latin'] })
export const urbanist = Urbanist({ subsets: ['latin'] })

export const theme = extendBaseTheme({
  colors,
  components: {

  },
  fonts: {
    heading: 'var(--font-urbanist)',
    body: 'var(--font-rubik)',
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
  }
} satisfies Partial<ChakraTheme>)

export default theme
