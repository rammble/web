import { FC, PropsWithChildren, useMemo } from 'react'
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { useNotification } from 'src/hooks/useNotification'

export const AppApolloProvider: FC<PropsWithChildren> = ({ children }) => {
  const notification = useNotification()
  const httpLink = new HttpLink({
    uri: '/api/graphql',
  })

  const errorLink = onError(
    ({ graphQLErrors, networkError, response, operation, forward }) => {
      if (networkError) {
        console.log(`[Network error]: ${networkError}`)
      }

      if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) => {
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          )
          notification({
            title: 'Error occurred',
            description: message,
            status: 'warn',
            colorScheme: 'error',
          })
        })
        // Only notify the user if absolutely no data came back
        if (!response || !response.data) {
        }
      }
      return forward(operation)
    },
  )

  const client = useMemo(
    () =>
      new ApolloClient({
        defaultOptions: {
          query: {
            errorPolicy: 'all',
          },
          mutate: {
            errorPolicy: 'all',
          },
        },
        cache: new InMemoryCache(),
        uri: '/api/graphql',
        link: ApolloLink.from([errorLink, httpLink]),
      }),
    [],
  )

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
