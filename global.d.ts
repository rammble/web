import { BaseThemeTypings } from '@chakra-ui/styled-system'

declare module '@chakra-ui/styled-system' {
  export interface CustomThemeTypings extends BaseThemeTypings {
    colorSchemes: 'accent' | 'neutral' | 'success' | 'warn' | 'error' | 'info'
  }
}
