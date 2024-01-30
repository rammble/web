import { FC, PropsWithChildren, useEffect } from 'react'
import { current } from 'src/theme'
import { ChakraBaseProvider, useColorMode } from '@chakra-ui/react'
import { AppApolloProvider } from 'src/providers/ApolloProvider'
import { Montserrat } from 'next/font/google'

const OverrideColorMode = ({ mode }: any) => {
  const { setColorMode } = useColorMode()

  useEffect(() => {
    if (!mode) {
      return
    }
    localStorage.setItem('chakra-ui-color-mode', mode)
    setColorMode(mode)
  }, [mode])

  return null
}

const montserrat = Montserrat({
  preload: true,
  subsets: ['latin'],
  display: 'swap',
})

export const AppProvider: FC<
  PropsWithChildren<{ overrideColorMode?: 'dark' | 'light' }>
> = ({ children, overrideColorMode }) => (
  <AppApolloProvider>
    <style jsx global>{`
      :root {
        --rammble-font: ${montserrat.style.fontFamily};
      }
    `}</style>
    <ChakraBaseProvider theme={current}>
      {children}
      <OverrideColorMode mode={overrideColorMode} />
    </ChakraBaseProvider>
  </AppApolloProvider>
)
