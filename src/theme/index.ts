import { ChakraTheme, extendBaseTheme, extendTheme } from '@chakra-ui/react'
import { Rubik, Urbanist } from 'next/font/google'
import { DEFAULT_DURATION, DEFAULT_EASING } from 'src/components/motion'
import { colors } from 'src/theme/colors'
import { components } from 'src/theme/components'
import { sizes } from 'src/theme/sizes'
import { spacing } from 'src/theme/spacing'
import { layerStyles } from 'src/theme/layer-styles'

export const rubik = Rubik({ subsets: ['latin'] })
export const urbanist = Urbanist({ subsets: ['latin'] })

export const theme = extendTheme({
  config: {
    cssVarPrefix: 'ram',
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  layerStyles,
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
        height: '100%',
        width: '100%',
        '::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
        '::-webkit-scrollbar-track': {
          bg: 'transparent',
        },
        '::-webkit-scrollbar-thumb': {
          bg: 'ui.5',
          borderRadius: 'full',
        },
        '::-webkit-scrollbar-thumb:hover': {
          bg: 'brand',
        },
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
