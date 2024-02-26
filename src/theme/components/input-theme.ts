import { inputAnatomy as parts } from '@chakra-ui/anatomy'
import {
  createMultiStyleConfigHelpers,
  cssVar,
  defineStyle,
} from '@chakra-ui/styled-system'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle(({ colorScheme: scheme }) => ({
  addon: {
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
  field: {
    bg: 'transparent',
    appearance: 'none',
    width: 'full',
    minWidth: 0,
    outline: 0,
    position: 'relative',
    transitionProperty: 'common',
    transitionDuration: 'fast',
    boxShadow: '0 0 2px 4px transparent, 0 0 4px 8px transparent',
    _focus: {
      boxShadow: `0 0 0 2px var(--ram-colors-${scheme}-3), 0 0 0 4px var(--ram-colors-${scheme}-8a)`,
    },
  },
  group: {
    display: 'flex',
    position: 'relative',
    isolation: 'isolate',
  },
}))

const sizes = {
  '1': definePartsStyle(({}) => {
    return {
      field: defineStyle({
        border: '1px solid',
        borderRadius: 2,
        textStyle: 1,
        px: 2,
        h: 5,
      }),
      element: defineStyle({
        p: 1,
      }),
    }
  }),
  '2': definePartsStyle({
    field: defineStyle({
      border: '1px solid',
      borderRadius: 2,
      textStyle: 2,
      py: 2,
      px: 2,
      h: 6,
    }),
    element: defineStyle({
      p: 1,
    }),
  }),
  '3': definePartsStyle({
    field: defineStyle({
      border: '1px solid',
      borderRadius: 3,
      textStyle: 3,
      py: 2,
      pr: 3,
      pl: 2,
      h: 7,
    }),
    element: defineStyle({
      pl: 1,
    }),
  }),
}

const outlineVariant = definePartsStyle(({ colorScheme: scheme }) => ({
  field: defineStyle({
    fontWeight: 'regular',
    borderColor: 'neutral.5a',
    color: 'neutral.12',
    bg: 'surface',
    _placeholder: {
      color: 'neutral.9a',
    },
    _hover: {
      borderColor: 'neutral.6a',
    },
    _active: {
      borderColor: `${scheme}.8a`,
    },
  }),
  element: defineStyle({
    color: 'neutral.11a',
  }),
}))

const softVariant = definePartsStyle(({ colorScheme: scheme }) => ({
  field: defineStyle({
    fontWeight: 'regular',
    bg: 'neutral.3a',
    color: 'neutral.12',
    borderColor: 'transparent',
    _placeholder: {
      color: 'neutral.9a',
    },
    _hover: {
      bg: 'neutral.4a',
    },
    _active: {
      bg: 'neutral.5a',
      borderColor: `${scheme}.8a`,
    },
  }),
  element: defineStyle({
    color: 'neutral.11a',
  }),
}))

const variants = {
  outline: outlineVariant,
  soft: softVariant,
}

export const inputTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    size: '2',
    variant: 'outline',
    colorScheme: 'neutral',
  },
})
