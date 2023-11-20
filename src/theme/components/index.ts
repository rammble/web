import { ChakraTheme } from '@chakra-ui/theme'
import { buttonTheme } from 'src/theme/components/button-theme'

export const components = {
  Button: buttonTheme,
} satisfies Partial<ChakraTheme>['components']
