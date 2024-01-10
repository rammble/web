import { ChakraTheme } from '@chakra-ui/theme'

export const sizes = {
  full: '100%',
  half: '50%',
  layouts: {
    main: {
      left: '296px',
      middle: '640px',
      right: '216px',
      chat: '48px',
    },
  },
} satisfies Partial<ChakraTheme>['sizes']
