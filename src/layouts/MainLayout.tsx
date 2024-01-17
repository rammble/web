import { FC, PropsWithChildren, ReactNode, useEffect, useMemo } from 'react'
import { Center, Flex, HStack } from '@chakra-ui/layout'
import { useSelf } from 'src/hooks/useSelf'
import { Spinner } from '@chakra-ui/spinner'

export interface MainLayoutData {
  isFeed?: boolean
  isAuthenticationRequired?: boolean
}

export interface MainLayoutProps extends PropsWithChildren<MainLayoutData> {
  renderLeftNode?: (data: MainLayoutData) => ReactNode
  renderRightNode: (data: MainLayoutData) => ReactNode
  renderChatNode: (data: MainLayoutData) => ReactNode
}

export const MainLayout: FC<MainLayoutProps> = ({
  renderLeftNode,
  renderRightNode,
  renderChatNode,
  isFeed = false,
  isAuthenticationRequired = true,
  children,
}) => {
  const [self, { gotoLogin }] = useSelf()

  const leftNode = useMemo(
    () => renderLeftNode?.({ isFeed }),
    [renderLeftNode, isFeed],
  )
  const rightNode = useMemo(
    () => renderRightNode({ isFeed }),
    [renderRightNode, isFeed],
  )
  const chatNode = useMemo(
    () => renderChatNode({ isFeed }),
    [renderChatNode, isFeed],
  )

  useEffect(() => {
    if (!isAuthenticationRequired) {
      return
    }

    if (self.isLoading) {
      return
    }

    if (!self.isLoggedIn) {
      gotoLogin()
    }
  }, [self.isLoading, self.isLoggedIn, isAuthenticationRequired])

  if (self.isLoading || (!self.isLoggedIn && isAuthenticationRequired)) {
    return (
      <Center>
        <Spinner />
      </Center>
    )
  }

  return (
    <HStack spacing={8} boxSize="full" align="stretch" justify="center">
      <Flex
        mt={4}
        id="left-side-node"
        h="full"
        w="layouts.main.left"
        flexGrow={0}
      >
        {leftNode}
      </Flex>
      <Flex
        mt={4}
        id="main-content"
        h="full"
        w="layouts.main.middle"
        flexGrow={0}
      >
        {children}
      </Flex>
      <Flex id="right-side-node" h="full" w="layouts.main.right" flexGrow={0}>
        {rightNode}
      </Flex>
      <Flex id="chat-node" h="full" w="layouts.main.chat" flexGrow={0}>
        {chatNode}
      </Flex>
    </HStack>
  )
}
