import {FC, PropsWithChildren} from 'react'
import {Header} from 'src/components/Header'
import {Footer} from 'src/components/Footer'
import {WebHeader} from "../components/WebHeader/index";
import {Box, Flex, VStack} from "@chakra-ui/layout";
import {Navigation} from "../components/Navigation/index";
import {useMediaQuery} from "@chakra-ui/react";
import {Head} from "next/document";

export interface LayoutProps extends PropsWithChildren {
}

export const Layout: FC<LayoutProps> = ({children}) => {

  const [isMobile] = useMediaQuery('(max-width: 1280px)')


  return (
      <VStack w="100%" spacing={0}>
        <Flex w={isMobile ? '100%' : '800px'}>
          {isMobile && <Header/>}
          <Box w={'80%'}>
            {children}
          </Box>
          <Box>
            {isMobile ? <Footer/> : <Navigation/>}
          </Box>
        </Flex>
      </VStack>
  )
}

