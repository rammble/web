import {
  colors,
  semanticTokens as colorsSemanticTokens,
} from 'src/theme/colors'
import { components } from 'src/theme/components'
import { sizes } from 'src/theme/sizes'
import { spacing } from 'src/theme/spacing'
import { layerStyles } from 'src/theme/layer-styles'
import { borders } from 'src/theme/borders'
import {
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  textStyles,
} from 'src/theme/fonts'
import { transition } from 'src/theme/transition'
import { extendBaseTheme } from '@chakra-ui/react'

export const themeRaw = {
  config: {
    cssVarPrefix: 'ram',
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  layerStyles,
  colors,
  components,
  space: spacing,
  borders: { ...borders },
  sizes: { ...spacing, ...sizes },
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  textStyles,
  transition,
  radii: {
    none: '0px',
    1: '3px',
    2: '4px',
    3: '6px',
    4: '8px',
    5: '12px',
    6: '16px',
    max: '9999px',
  },
  semanticTokens: {
    colors: colorsSemanticTokens.colors,
  },
  styles: {
    global: {
      ':root': {
        // '--rammble-font': montserrat.style,
      },
      '*': {
        tapHighlightColor: 'transparent',
        WebkitTapHighlightColor: 'transparent',
      },
      html: {
        minH: 'full',
        h: 'full',
        w: 'full',
        bg: 'panel.background',
        p: 0,
        m: 0,
      },
      body: {
        bg: 'panel.background',
        color: 'text',
        fontFamily: 'body',
        minH: 'full',
        h: 'full',
        p: 0,
        m: 0,
      },
      '#__next': {
        minH: 'full',
        h: 'full',
        w: 'full',
        p: 0,
        m: 0,
      },
    },
  },
} as const

export const theme = themeRaw

export const current = extendBaseTheme(themeRaw)
