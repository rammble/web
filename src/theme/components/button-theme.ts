import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system'

const baseStyle = defineStyle({})

const solidVariant = defineStyle({})

const variants = {
  solid: solidVariant,
  unstyled: defineStyle({}),
}

const smallSize = defineStyle({})

const largeSize = defineStyle({
  px: 10,
  py: 3,
  fontSize: 'md',
  fontWeight: '500',
  borderRadius: '3xl',
})

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
