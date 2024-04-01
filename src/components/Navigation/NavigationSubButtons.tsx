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
    path: `/logout?ref=${encodeURIComponent('/')}`,
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
            textStyle={'1'}
            cursor={'pointer'}
            color={p?.isDangerous ? 'error.11' : 'neutral.11a'}
            onClick={() => router.push(p.path as string)}
          >
            {p.title}
          </Text>
        )
      })}
    </HStack>
  )
}
