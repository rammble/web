import { ChakraTheme, extendBaseTheme, extendTheme } from '@chakra-ui/react'
import { Rubik, Urbanist } from 'next/font/google'
import { DEFAULT_DURATION, DEFAULT_EASING } from 'src/components/motion'
import { colors } from 'src/theme/colors'
import { components } from 'src/theme/components'
import { sizes } from 'src/theme/sizes'
import { spacing } from 'src/theme/spacing'

export const rubik = Rubik({ subsets: ['latin'] })
export const urbanist = Urbanist({ subsets: ['latin'] })

export const theme = extendTheme({
  config: {
    cssVarPrefix: 'ram',
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors,
  components,
  fonts: {
    heading: 'var(--font-urbanist)',
    body: 'var(--font-rubik)',
  },
  space: spacing,
  sizes: { ...spacing, ...sizes },
  transition: {
    easing: {
      normal: `cubic-bezier(${DEFAULT_EASING.join(', ')})`,
    },
    duration: {
      fast: `${DEFAULT_DURATION / 2}ms`,
      normal: `${DEFAULT_DURATION}ms`,
      slow: `${DEFAULT_DURATION * 2}ms`,
    },
    property: {
      all: 'all',
      common:
        'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
      colors: 'background-color, border-color, color, fill, stroke',
      opacity: 'opacity',
      shadow: 'box-shadow',
      transform: 'transform',
    },
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

export default theme
