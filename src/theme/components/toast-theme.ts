import { alertAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(alertAnatomy.keys)

const baseStyle = definePartsStyle(({ colorScheme: scheme }) => {
  return {
    container: {
      bg: `${scheme}.2a`,
      color: `${scheme}.11a`,
      border: '1px solid',
      borderColor: `${scheme}.6`,
      display: 'flex',
      flexDir: 'row',
      gap: '3',
      padding: '4',
    },
    title: {
      fontWeight: 'bold',
    },
    description: {
      //.... description styles
    },
    icon: {
      marginTop: '2px',
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
