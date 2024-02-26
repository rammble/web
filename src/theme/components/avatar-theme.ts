import { avatarAnatomy as parts } from '@chakra-ui/anatomy'
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle((props) => ({
  badge: defineStyle({}),
  excessLabel: defineStyle({}),
  container: defineStyle({
    overflow: 'hidden',
    img: {
      objectFit: 'cover',
    },
  }),
  label: defineStyle({}),
}))

const solid = definePartsStyle(({ colorScheme: color = 'accent' }) => ({
  badge: defineStyle({}),
  excessLabel: defineStyle({}),
  container: defineStyle({
    bg: `${color}.9`,
    color: 'contrast.white',
  }),
  label: defineStyle({}),
}))

const soft = definePartsStyle(({ colorScheme: color = 'accent' }) => ({
  badge: defineStyle({}),
  excessLabel: defineStyle({}),
  container: defineStyle({
    bg: `${color}.3a`,
    color: `${color}.11a`,
  }),
  label: defineStyle({}),
}))

const getSizeToRounded = (size: number) => {
  switch (size) {
    case 1:
    case 2:
      return 2
    case 3:
    case 4:
      return 3
    case 5:
      return 4
    case 6:
    case 7:
      return 5
    case 8:
    case 9:
      return 6
  }
}

const getSize = (size: number) =>
  definePartsStyle({
    container: {
      textStyle: size,
      fontWeight: 'medium',
      boxSize: `avatars.${size}` as const,
      rounded: getSizeToRounded(size),
      img: {
        rounded: getSizeToRounded(size),
      },
    },
  })

const sizes = {
  '1': getSize(1),
  '2': getSize(2),
  '3': getSize(3),
  '4': getSize(4),
  '5': getSize(5),
  '6': getSize(6),
  '7': getSize(7),
  '8': getSize(8),
  '9': getSize(9),
}

const variants = {
  solid,
  soft,
}

export const avatarTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    size: '3',
    variant: 'solid',
    colorScheme: 'accent',
  },
})
