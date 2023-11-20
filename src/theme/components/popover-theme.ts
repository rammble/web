import { popoverAnatomy as parts } from '@chakra-ui/anatomy'
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system'
import { cssVar } from '@chakra-ui/theme-tools'
import { getAsCSSVar } from 'src/theme/utils'

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const $popperBg = cssVar('popper-bg')
const $arrowBg = cssVar('popper-arrow-bg')
const $arrowShadowColor = cssVar('popper-arrow-shadow-color')

const baseStylePopper = defineStyle({ zIndex: 10 })

const baseStyleContent = defineStyle({
  [$popperBg.variable]: getAsCSSVar('colors', 'blurp.darker'),
  bg: $popperBg.reference,
  [$arrowBg.variable]: $popperBg.reference,
  [$arrowShadowColor.variable]: 'blurp.darker',
  _dark: {
    [$popperBg.variable]: 'blurp.darker',
    [$arrowShadowColor.variable]: 'blurp.darker',
  },
  rounded: 16,
  zIndex: 'inherit',
  _focusVisible: {
    outline: 0,
    boxShadow: 'outline',
  },
})

const baseStyleHeader = defineStyle({})

const baseStyleBody = defineStyle({})

const baseStyleFooter = defineStyle({})

const baseStyleCloseButton = defineStyle({})

const baseStyle = definePartsStyle({
  popper: baseStylePopper,
  content: baseStyleContent,
  header: baseStyleHeader,
  body: baseStyleBody,
  footer: baseStyleFooter,
  closeButton: baseStyleCloseButton,
})

export const popoverTheme = defineMultiStyleConfig({
  baseStyle,
})
