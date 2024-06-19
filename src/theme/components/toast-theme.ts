import { alertAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(alertAnatomy.keys)

const baseStyle = definePartsStyle(({ colorScheme: scheme }) => {
  return {
    container: {
      bg: `${scheme}.2`,
      color: `${scheme}.11a`,
      border: '1px solid',
      borderColor: `${scheme}.6`,
      display: 'flex',
      flexDir: 'row',
      gap: '3',
      padding: '4',
    },
    title: {
      color: `${scheme}.7a`,
      fontWeight: 'bold',
    },
    description: {
      color: `${scheme}.12a`,
    },
    icon: {
      marginTop: '1',
      padding: '0',
      boxSize: '4',
    },
  }
})

export const toastTheme = defineMultiStyleConfig({
  baseStyle,
  defaultProps: {
    colorScheme: 'neutral',
  },
})
