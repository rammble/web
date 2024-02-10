import { ChakraTheme } from '@chakra-ui/theme'
import { buttonTheme } from 'src/theme/components/button-theme'
import { popoverTheme } from 'src/theme/components/popover-theme'
import { tooltipTheme } from 'src/theme/components/tooptip-theme'

export const components = {
  Button: buttonTheme,
  Popover: popoverTheme,
  Tooltip: tooltipTheme,
} satisfies Partial<ChakraTheme>['components']
