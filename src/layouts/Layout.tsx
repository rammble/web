import { Box, Flex, Text, VStack } from '@chakra-ui/layout'
import { useMediaQuery } from '@chakra-ui/react'
import { FC, PropsWithChildren, Suspense } from 'react'
import { Footer } from 'src/components/Footer'
import { Header } from 'src/components/Header'
import { Navigation } from 'src/components/Navigation'

export interface LayoutProps extends PropsWithChildren {}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const [isMobile] = useMediaQuery('(max-width: 1280px)')

  return (
    <VStack w="100%" spacing={0}>
      <Flex w={isMobile ? '100%' : '800px'}>
        {isMobile && <Header />}
        <Box w={'80%'}>
          <Suspense fallback={<Text>LOADING</Text>}>{children}</Suspense>
        </Box>
        <Box>{isMobile ? <Footer /> : <Navigation />}</Box>
      </Flex>
    </VStack>
  )
}
