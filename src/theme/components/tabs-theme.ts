import { tabsAnatomy as parts } from '@chakra-ui/anatomy'
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system'

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle((props) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 'full',
    position: 'relative',
  },
  tab: {
    textStyle: '2',
    fontWeight: 'medium',
    color: 'neutral.10',
    position: 'relative',
    _selected: {
      color: 'neutral.12',
    },
    _after: {
      content: '""',
      position: 'absolute',
      rounded: 3,
      transitionProperty: 'common',
      transitionDuration: 'fast',
      boxShadow: '0 0 2px 4px transparent, 0 0 4px 8px transparent',
    },
    _focus: {
      _after: {
        bg: 'neutral.3a',
        boxShadow: `0 0 0 2px var(--ram-colors-accent-3), 0 0 0 4px var(--ram-colors-accent-8a)`,
      },
    },
    _hover: {
      color: 'neutral.12',
      _after: {
        bg: 'neutral.3a',
      },
    },
    _active: {
      _after: {
        bg: 'neutral.4a',
      },
    },
  },
  indicator: {
    height: '2px',
    bg: 'accent.10',
  },
  tablist: {
    display: 'flex',
    listStyle: 'none',
    p: 0,
    m: 0,
    gap: 0,
    borderBottom: '1px solid',
    borderColor: 'neutral.6a',
    position: 'relative',
  },
}))

const sizes = {
  '1': definePartsStyle({
    tab: {
      py: 2,
      px: 2,
      _after: {
        insetX: 1,
        insetY: '6px',
      },
    },
    indicator: {
      top: '35px',
    },
  }),
  '2': definePartsStyle({
    tab: {
      py: '10px',
      px: 4,
      _after: {
        insetX: 2,
        insetY: 1,
      },
    },
    indicator: {
      top: '39px',
    },
  }),
}

export const tabsTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: '1',
  },
})
