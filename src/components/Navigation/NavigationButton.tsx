import { FC } from 'react'
import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { PagesObjectProps } from './index'
import { useRouter } from 'next/router'
import { Icon } from '@chakra-ui/react'

export interface NavigationButtonProps {
  page: PagesObjectProps
}

// Navigation Button notification badge component, should just show in top left corner of the button
export const NavigationButtonNotificationBadge: FC = () => {
  return (
    <Flex
      w={'8px'}
      h={'8px'}
      bg={'accent.red'}
      borderRadius={'50%'}
      position={'relative'}
    />
  )
}

export const NavigationButton: FC<NavigationButtonProps> = ({ page }) => {
  const router = useRouter()

  const isActive = router.pathname == page.path
  return (
    <HStack
      w={'200px'}
      h={'48px'}
      bg={isActive ? 'ui.3' : 'bg'}
      p={2}
      cursor={'pointer'}
      borderRadius={8}
      gap={4}
      onClick={() => router.push(page.path as string)}
    >
      <Icon color={isActive ? 'ui.90' : 'ui.60'} boxSize={6}>
        {page.icon}
      </Icon>
      <Text fontSize={'20px'} color={isActive ? 'ui.90' : 'ui.60'}>
        {page.title}
      </Text>
      {/*<NavigationButtonNotificationBadge />*/}
    </HStack>
  )
}
