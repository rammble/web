import type { Preview } from '@storybook/react'
import { AppProvider } from 'src/providers/AppProvider'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
  globalTypes: {
    theme: {
      description: 'Chakra UI Theme',
      defaultValue: 'Dark',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['Light', 'Dark'],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => (
      <AppProvider overrideColorMode={context.globals.theme.toLowerCase()}>
        <Story />
      </AppProvider>
    ),
  ],
}

export default preview
