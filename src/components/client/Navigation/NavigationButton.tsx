import { FC } from 'react'
import { Flex, Text } from '@chakra-ui/layout'
import { PagesObjectProps } from './index'
import { useRouter, usePathname } from 'next/navigation'
import { Icon } from '@chakra-ui/react'
import { Button } from '@chakra-ui/button'

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
  const pathname = usePathname()

  const isActive = pathname === page.path
  return (
    <Button
      size={'4'}
      variant="ghost"
      w={'200px'}
      alignItems={'center'}
      justifyContent={'flex-start'}
      h={'48px'}
      p={2}
      gap={4}
      onClick={() => router.push(page.path as string)}
    >
      <Icon as={page.icon} color={isActive ? 'ui.90' : 'ui.60'} boxSize={5} />
      <Text fontSize={'20px'} color={isActive ? 'ui.90' : 'ui.60'}>
        {page.title}
      </Text>
      {/*<NavigationButtonNotificationBadge />*/}
    </Button>
  )
}
