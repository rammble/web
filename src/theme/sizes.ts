import { ChakraTheme } from '@chakra-ui/theme'

export const sizes = {
  full: '100%',
  half: '50%',
  avatars: {
    1: '24px',
    2: '32px',
    3: '40px',
    4: '48px',
    5: '64px',
    6: '80px',
    7: '96px',
    8: '128px',
    9: '160px',
  },
  layouts: {
    main: {
      left: '296px',
      middle: '640px',
      right: '240px',
      chat: '48px',
    },
  },
} satisfies Partial<ChakraTheme>['sizes']
