import { ChakraTheme } from '@chakra-ui/theme'
import { inputTheme } from 'src/theme/components/input-theme'
import { avatarTheme } from 'src/theme/components/avatar-theme'
import { buttonTheme } from 'src/theme/components/button-theme'
import { popoverTheme } from 'src/theme/components/popover-theme'
import { textareaTheme } from 'src/theme/components/textaerea-theme'
import { tabsTheme } from 'src/theme/components/tabs-theme'
import { toastTheme } from 'src/theme/components/toast-theme'

export const components = {
  Tabs: tabsTheme,
  Input: inputTheme,
  Avatar: avatarTheme,
  Button: buttonTheme,
  Popover: popoverTheme,
  Textarea: textareaTheme,
  Alert: toastTheme,
} satisfies Partial<ChakraTheme>['components']
