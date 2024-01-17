import { FC } from 'react'
import { Box, Flex, HStack, Text } from '@chakra-ui/layout'
import { useRouter } from 'next/router'
import { Icon } from '@chakra-ui/react'
import { PagesObjectProps } from 'src/components/Navigation'

export interface NavigationButtonProps {
  page: PagesObjectProps
}

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

export const SettingsButton: FC<NavigationButtonProps> = ({ page }) => {
  const router = useRouter()

  console.log(router.pathname, page.path)
  const isActive = router.pathname == page.path
  return (
    <HStack
      w={'full'}
      h={'48px'}
      bg={isActive ? 'ui.3' : 'bg'}
      p={8}
      cursor={'pointer'}
      borderRadius={8}
      gap={4}
      onClick={() => router.push(page.path as string)}
    >
      <Icon color={isActive ? 'ui.90' : 'ui.60'} boxSize={8}>
        {page.icon}
      </Icon>
      <Box>
        <Text fontSize={'16px'} color={isActive ? 'ui.90' : 'ui.60'}>
          {page.title}
        </Text>
        <Text fontSize={'12px'} color={'ui.60'} fontWeight={400}>
          {page.description}
        </Text>
      </Box>
    </HStack>
  )
}
