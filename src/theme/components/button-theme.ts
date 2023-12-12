import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system'

const baseStyle = defineStyle({})

const solidVariant = defineStyle({})

const SelfPromo = defineStyle({
  width: 'Hug (159px)',
  height: 'Hug (40px)',
  borderRadius: '999px',
  padding: '8px 32px',
  gap: '10px',
  fontWeight: '500',
})

const variants = {
  solid: solidVariant,
  selfpromo: SelfPromo,
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
