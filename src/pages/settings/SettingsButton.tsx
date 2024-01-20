import { FC } from 'react'
import { Flex, Text } from '@chakra-ui/layout'
import { useRouter } from 'next/router'
import { Icon } from '@chakra-ui/react'
import { PagesObjectProps } from 'src/components/Navigation'
import { Button } from '@chakra-ui/button'

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

  const isActive = router.pathname == page.path
  return (
    <Button
      bg={isActive ? 'ui.3' : 'bg'}
      cursor={'pointer'}
      borderRadius={'12px'}
      w={'full'}
      gap={4}
      p={4}
      whiteSpace="normal"
      height="auto"
      blockSize="auto"
      onClick={() => router.push(page.path as string)}
    >
      <Icon color={isActive ? 'ui.90' : 'ui.60'} boxSize={8}>
        {page.icon}
      </Icon>
      <Flex
        textAlign={'left'}
        w={'full'}
        flexDir={'column'}
        alignItems={'flex-start'}
      >
        <Text fontSize={'16px'} fontWeight={500}>
          {page.title}
        </Text>
        <Text fontSize={'12px'} fontWeight={400} color={'ui.40'}>
          {page.description}
        </Text>
      </Flex>
    </Button>
  )
}
