import { FC, PropsWithChildren, useMemo } from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

export const AppApolloProvider: FC<PropsWithChildren> = ({ children }) => {
  const client = useMemo(
    () =>
      new ApolloClient({
        cache: new InMemoryCache(),
        uri: 'https://api.rammble.net',
      }),
    [],
  )

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
