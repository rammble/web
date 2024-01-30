import { ChakraTheme } from '@chakra-ui/theme'

export const spacing = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '24px',
  6: '32px',
  7: '40px',
  8: '48px',
  9: '64px',

  // TODO: implement scaling: https://www.figma.com/file/q6WVvZIoBMUxlMudwLCZnk/1.-Themes?type=design&node-id=967-81833&mode=design&t=749XSHW5kpHbT4by-4
} satisfies Partial<ChakraTheme>['sizes']
