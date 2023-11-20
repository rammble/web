import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system'

const baseStyle = defineStyle({})

const solidVariant = defineStyle({})

const variants = {
  solid: solidVariant,
  unstyled: defineStyle({}),
}

const smallSize = defineStyle({})

const largeSize = defineStyle({})

const sizes = {
  large: largeSize,
  small: smallSize,
  unstyled: defineStyle({}),
}

export const buttonTheme = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: 'solid',
    size: 'small',
  },
})
