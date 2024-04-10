'use client'

import { FC, PropsWithChildren } from 'react'
import { Flex, HStack, StackDivider } from '@chakra-ui/layout'
import { LeftSideContent } from 'src/components/client/LeftSideContent'
import { Navigation } from 'src/components/client/Navigation'

export interface MainLayoutData {}

export interface MainLayoutProps extends PropsWithChildren<MainLayoutData> {}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <HStack
      spacing="4"
      boxSize="full"
      align="stretch"
      justify="center"
      divider={<StackDivider borderColor="neutral.3a" />}
    >
      <Flex id="left-side-node" h="full" w="layouts.main.left" flexGrow={0}>
        <LeftSideContent />
      </Flex>
      <Flex id="main-content" h="full" w="layouts.main.middle" flexGrow={0}>
        {children}
      </Flex>
      <HStack h="full" spacing="4">
        <Flex id="right-side-node" h="full" w="layouts.main.right" flexGrow={0}>
          <Navigation />
        </Flex>
        <Flex id="chat-node" h="full" w="layouts.main.chat" flexGrow={0}></Flex>
      </HStack>
    </HStack>
  )
}
