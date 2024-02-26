import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system'

const baseStyle = defineStyle(({ colorScheme: scheme }) => {
  return {
    border: '1px solid',
    color: 'contrast.white',
    borderColor: 'transparent',
    transitionProperty: 'common',
    transitionDuration: 'fast',
    boxShadow: '0 0 2px 4px transparent, 0 0 4px 8px transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    _focus: {
      boxShadow: `0 0 0 2px var(--ram-colors-${scheme}-3), 0 0 0 4px var(--ram-colors-${scheme}-8a)`,
    },
    fontWeight: 'medium',
  } as const
})

const solidVariant = defineStyle(({ colorScheme: scheme }) => {
  return {
    bg: `${scheme}.9`,
    _hover: {
      bg: `${scheme}.10`,
    },
    _active: {
      opacity: 0.92,
    },
    _disabled: {
      bg: `${scheme}.3a`,
      color: `${scheme}.8a`,
      cursor: 'not-allowed',
    },
  } as const
})

const softVariant = defineStyle(({ colorScheme: scheme }) => {
  return {
    bg: `${scheme}.3a`,
    color: `${scheme}.11a`,
    _hover: {
      bg: `${scheme}.4a`,
    },
    _active: {
      bg: `${scheme}.5a`,
    },
    _disabled: {
      bg: `${scheme}.3a`,
      color: `${scheme}.8a`,
      cursor: 'not-allowed',
    },
  } as const
})

const outlineVariant = defineStyle(({ colorScheme: scheme }) => {
  return {
    bg: 'transparent',
    borderColor: `${scheme}.8a`,
    color: `${scheme}.11`,
    _hover: {
      bg: `${scheme}.2a`,
    },
    _active: {
      bg: `${scheme}.3a`,
    },
    _disabled: {
      bg: 'transparent',
      borderColor: `${scheme}.7a`,
      color: `${scheme}.8a`,
      cursor: 'not-allowed',
    },
  } as const
})

const ghostVariant = defineStyle(({ colorScheme: scheme }) => {
  return {
    bg: 'transparent',
    color: `${scheme}.11`,
    _hover: {
      bg: `${scheme}.3a`,
    },
    _active: {
      bg: `${scheme}.4a`,
    },
    _disabled: {
      bg: 'transparent',
      color: `${scheme}.8a`,
      cursor: 'not-allowed',
    },
    fontWeight: 'regular',
  } as const
})

const variants = {
  solid: solidVariant,
  soft: softVariant,
  outline: outlineVariant,
  ghost: ghostVariant,
  unstyled: defineStyle({}),
} as const

// Small
const size1 = defineStyle({
  px: '7px',
  minW: '24px',
  rounded: '3px',
  textStyle: '1',
  h: 5,
} as const)

// Medium
const size2 = defineStyle({
  px: '11px',
  minW: '32px',
  rounded: '4px',
  textStyle: '2',
  h: 6,
} as const)

// Large
const size3 = defineStyle({
  px: '15px',
  minW: '40px',
  rounded: '6px',
  textStyle: '3',
  h: 7,
} as const)

// XLarge
const size4 = defineStyle({
  px: '23px',
  minW: '48px',
  rounded: '8px',
  textStyle: '4',
  h: 8,
} as const)

const sizes = {
  '1': size1,
  '2': size2,
  '3': size3,
  '4': size4,
  unstyled: defineStyle({}),
} as const

export const buttonTheme = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: 'solid',
    size: '2',
    colorScheme: 'neutral',
  },
} as const)
