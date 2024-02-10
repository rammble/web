import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system'
import { cssVar } from '@chakra-ui/theme-tools'

const $bg = cssVar('tooltip-bg')
const $fg = cssVar('tooltip-fg')
const $arrowBg = cssVar('popper-arrow-bg')

const baseStyle = defineStyle(({ colorScheme: scheme }) => {
  return {
    bg: $bg.reference,
    color: $fg.reference,
    [$bg.variable]: 'colors.neutral.12',
    [$fg.variable]: 'colors.neutral.1',
    [$arrowBg.variable]: $bg.reference,
    px: '1',
    py: '2px',
    borderRadius: '3px',
    fontWeight: 'medium',
    fontSize: 'sm',
    boxShadow: 'md',
    maxW: 'xs',
    zIndex: 'tooltip',
  }
})

export const tooltipTheme = defineStyleConfig({
  baseStyle,
})
