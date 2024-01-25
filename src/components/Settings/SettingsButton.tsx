import { FC } from 'react'
import { Flex, Text } from '@chakra-ui/layout'
import { useRouter } from 'next/router'
import { Icon } from '@chakra-ui/react'
import { PagesObjectProps } from 'src/components/Navigation'
import { Button } from '@chakra-ui/button'
import { SettingsIconDisplayer } from 'src/components/Settings/SettingsIconDisplayer'

export interface NavigationButtonProps {
  page: PagesObjectProps
}

export const SettingsButton: FC<NavigationButtonProps> = ({ page }) => {
  const router = useRouter()

  const isActive = router.asPath === page.path

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
      <SettingsIconDisplayer
        iconName={page.icon as string}
        isActive={isActive}
      />
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
