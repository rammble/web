import {FC, PropsWithChildren, ReactNode} from 'react'
import {Box, Center, Flex, Heading, HStack, Text, VStack} from '@chakra-ui/layout'
import {UserOverlay} from "src/components/AuthLayout/UserOverlay";

import {Image} from "@chakra-ui/image";
import {useMediaQuery} from "@chakra-ui/react";

interface AuthLayoutProps extends PropsWithChildren {
  heading: string
  isMobile: boolean
}

export const AuthLayout: FC<AuthLayoutProps> = ({heading, isMobile, children}) => {
  return (
    <Flex>
      <Box h={'100%'} w={isMobile ? '100%' : '0px'}>
        <Box userSelect={'none'} h={'100%'} w={'100%'} position={'absolute'} backgroundSize={'cover'}
             backgroundImage={'linear-gradient(342deg, rgba(73, 160, 238, 0.20) -7.26%, rgba(0, 0, 0, 0.00) 98.18%), linear-gradient(0deg, rgba(18, 18, 23, 0.60) 0%, rgba(18, 18, 23, 0.60) 100%), url("/place-holder.png"), lightgray 50% / cover no-repeat'}
        />
        {isMobile && <Box position={'fixed'} content={''} width={'100%'} h={'100%'} bgColor={'bg.darker'}
             clipPath={"polygon(55% 0, 0 0, 0 400%)"} transform={'rotateY(180deg)'}/>}
        <Image
          position={'fixed'}
          p={5}
          src="/full-logo.png"
          alt={'logo'}
        />
        <UserOverlay isMobile={isMobile}/>
      </Box>
      <Center mt={100} w={"100%"} zIndex={100} flexDir={'column'} gap={'32px'}>
        <Box>
          <Heading fontSize={'28px'} textAlign={'left'}>
            {heading}
          </Heading>
        </Box>
      {children}
      </Center>
    </Flex>
  )
}
