import { FC } from 'react'
import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/layout'
import { useRouter } from 'next/router'

export interface NavigationSubButtonProps {}

const pages = [
  {
    title: 'Support',
    path: '/support',
  },
  {
    title: 'Terms',
    path: '/terms',
  },
  {
    title: 'Privacy',
    path: '/privacy',
  },
  {
    title: 'Logout',
    path: '',
    isDangerous: true,
  },
]

export const NavigationSubButtons: FC<NavigationSubButtonProps> = () => {
  const router = useRouter()

  return (
    <HStack gap={3} w={'200px'} h={'48px'}>
      {pages.map((p, i) => {
        return (
          <Text
            key={i}
            fontWeight={400}
            cursor={'pointer'}
            onClick={() => router.push(p.path as string)}
            color={p?.isDangerous ? 'accent.red' : 'ui.60'}
            fontSize={12}
          >
            {p.title}
          </Text>
        )
      })}
    </HStack>
  )
}
