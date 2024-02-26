import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system'
import { inputTheme } from 'src/theme/components/input-theme'

const baseStyle = defineStyle((p) => ({
  ...inputTheme.baseStyle?.(p).field,
  bg: 'transparent',
  appearance: 'none',
  minHeight: 7,
  lineHeight: 'short',
  verticalAlign: 'top',
}))

const sizes = {
  '1': defineStyle((p) => ({
    ...inputTheme.sizes?.['1'](p).field,
    p: 1,
  })),
  '2': defineStyle(() => ({
    ...inputTheme.sizes?.['2'].field,
    p: 2,
  })),
  '3': defineStyle(() => ({
    ...inputTheme.sizes?.['3'].field,
    p: 3,
  })),
}

const outlineVariant = defineStyle((p) => ({
  ...inputTheme.variants?.outline(p).field,
}))

const softVariant = defineStyle((p) => ({
  ...inputTheme.variants?.soft(p).field,
}))

const variants = {
  outline: outlineVariant,
  soft: softVariant,
}

export const textareaTheme = defineStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    size: '2',
    variant: 'outline',
    colorScheme: 'neutral',
  },
})
