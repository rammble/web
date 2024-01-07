import { FC, PropsWithChildren, ReactNode } from 'react'
import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/layout'
import { UserOverlay } from 'src/components/AuthLayout/UserOverlay'

import { Image } from '@chakra-ui/image'
import { useMediaQuery } from '@chakra-ui/react'

interface AuthLayoutProps extends PropsWithChildren {
  heading: string
  isMobile: boolean
}

export const AuthLayout: FC<AuthLayoutProps> = ({
  heading,
  isMobile,
  children,
}) => {
  return (
    <Flex>
      <Box h={'full'} w={isMobile ? 'full' : '0px'}>
        <Box
          userSelect={'none'}
          h={'full'}
          w={'full'}
          position={'absolute'}
          backgroundSize={'cover'}
          backgroundImage={
            'linear-gradient(342deg, rgba(73, 160, 238, 0.20) -7.26%, rgba(0, 0, 0, 0.00) 98.18%), linear-gradient(0deg, rgba(18, 18, 23, 0.60) 0%, rgba(18, 18, 23, 0.60) 100%), url("/signup-page-background.png"), lightgray 50% / cover no-repeat'
          }
        />
        {isMobile && (
          <Box
            position={'fixed'}
            content={''}
            width={'full'}
            h={'full'}
            bgColor={'bg.darker'}
            clipPath={'polygon(55% 0, 0 0, 0 400%)'}
            transform={'rotateY(180deg)'}
          />
        )}
        <Image position={'fixed'} p={5} src="/full-logo.png" alt={'logo'} />
        <UserOverlay isMobile={isMobile} />
      </Box>
      <Center mt={100} w={'full'} zIndex={100} flexDir={'column'} gap={'32px'}>
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
