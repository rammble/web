'use client'

import { FC, PropsWithChildren } from 'react'
import { current } from 'src/theme'
import {
  ChakraBaseProvider,
  ColorMode,
  ColorModeScript,
} from '@chakra-ui/react'
import { AppApolloProvider } from 'src/providers/ApolloProvider'
import { CacheProvider } from '@chakra-ui/next-js'
import { setCookie } from 'cookies-next'
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev'

if (process.env.NODE_ENV === 'development') {
  loadDevMessages()
  loadErrorMessages()
}

export const AppProvider: FC<
  PropsWithChildren<{
    overrideColorMode?: 'dark' | 'light'
    colorMode?: ColorMode
  }>
> = ({ colorMode, children, overrideColorMode }) => (
  <AppApolloProvider>
    <CacheProvider>
      <ChakraBaseProvider
        theme={current}
        colorModeManager={{
          type: 'cookie',
          ssr: true,
          get: (init) => colorMode ?? init,
          set: (value) => {
            setCookie('chakra-ui-color-mode', value)
          },
        }}
      >
        <ColorModeScript
          initialColorMode={current.config.initialColorMode}
          type="cookie"
        />
        {children}
      </ChakraBaseProvider>
    </CacheProvider>
  </AppApolloProvider>
)
