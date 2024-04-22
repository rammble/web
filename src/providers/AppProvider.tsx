'use client'
import {FC, PropsWithChildren, useMemo} from 'react'
import {current} from 'src/theme'
import {ChakraBaseProvider, ColorMode, ColorModeScript,} from '@chakra-ui/react'
import {CacheProvider} from '@chakra-ui/next-js'
import {setCookie} from 'cookies-next'
import {
  createClient,
  GraphQlClientProvider,
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@rammble/sdk'
import {useNotification} from "src/hooks/useNotification";

export const AppProvider: FC<
  PropsWithChildren<{
    overrideColorMode?: 'dark' | 'light'
    colorMode?: ColorMode
  }>
> = ({ colorMode, children, overrideColorMode }) => {

  const notification = useNotification()

  const client = useMemo(
    () =>
      createClient({
        endpoint: '/api/graphql',
      }),
    [],
  )

  const onErrorHandler = (error: Error) => {
    const errorResponse = JSON.parse(JSON.stringify(error))
    const errors = errorResponse.response?.errors


    errors?.map((err: { message: string }) => {
      notification({
        colorScheme: 'error',
        status: 'error',
        title: 'Error occurred',
        description: err?.message || "Something wrong"
      })
    })
  }

  const queryClient = useMemo(() => new QueryClient({
    defaultOptions: {
    },
    queryCache: new QueryCache({
      onError: onErrorHandler
    }),
    mutationCache: new MutationCache({
      onError: onErrorHandler
    })
  }), [])

  return (
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
        <GraphQlClientProvider client={client}>
          <QueryClientProvider client={queryClient}>
            <ColorModeScript
              initialColorMode={current.config.initialColorMode}
              type="cookie"
            />
            {children}
          </QueryClientProvider>
        </GraphQlClientProvider>
      </ChakraBaseProvider>
    </CacheProvider>
  )
}
