import { Box, Flex, Text, VStack } from '@chakra-ui/layout'
import { FC, PropsWithChildren, Suspense } from 'react'
import { Navigation } from 'src/components/Navigation'
import { useRouter } from 'next/router'

export interface LayoutProps extends PropsWithChildren {}

export const Layout: FC<LayoutProps> = ({ children }) => {
  // Change this please
  const router = useRouter()

  const authRoutes = ['/signin', '/signup', '/forgot']

  const isLoggedIn = !authRoutes.includes(router.pathname)

  if (!isLoggedIn) {
    return (
      <Box h={'full'} w={'full'}>
        {children}
      </Box>
    )
  }

  return (
    <VStack w="full" h={'full'} spacing={0}>
      <Flex w="800px">
        <Box w={'80%'}>
          <Suspense fallback={<Text>LOADING</Text>}>{children}</Suspense>
        </Box>
        <Box>
          <Navigation />
        </Box>
      </Flex>
    </VStack>
  )
}
