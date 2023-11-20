import { ChakraTheme } from '@chakra-ui/theme'
import { buttonTheme } from 'src/theme/components/button-theme'
import { popoverTheme } from 'src/theme/components/popover-theme'

export const components = {
  Button: buttonTheme,
  Popover: popoverTheme,
} satisfies Partial<ChakraTheme>['components']
