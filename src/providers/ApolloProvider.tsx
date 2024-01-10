import { FC, PropsWithChildren, useMemo } from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

export const AppApolloProvider: FC<PropsWithChildren> = ({ children }) => {
  const client = useMemo(
    () =>
      new ApolloClient({
        cache: new InMemoryCache(),
        uri: 'http://api.rammble.local',
        credentials: 'include',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Credentials': 'true',
        },
      }),
    [],
  )

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
