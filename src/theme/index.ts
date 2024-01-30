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
        bg: 'panel.background',
        height: '100%',
        width: '100%',
      },
      body: {
        bg: 'panel.background',
        color: 'text',
        fontFamily: 'body',
      },
    },
  },
} as const

export const theme = themeRaw

export const current = extendBaseTheme(themeRaw)
