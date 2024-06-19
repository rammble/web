'use client'
import { Box, VStack } from '@chakra-ui/layout'
import { useRouter } from 'next/navigation'
import { FC, ReactNode } from 'react'
import {
  BellIcon,
  EnvelopeClosedIcon,
  GearIcon,
  HeartIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PersonIcon,
} from '@radix-ui/react-icons'
import { MotionStack } from 'src/components/client/motion'
import { NavigationButton } from 'src/components/client/Navigation/NavigationButton'
import { NavigationSubButtons } from 'src/components/client/Navigation/NavigationSubButtons'
import { Image } from '@chakra-ui/image'
import { useColorMode } from '@chakra-ui/react'

export interface NavigationProps {}

export interface PagesObjectProps {
  title: String
  description?: String
  path: String
  icon: ReactNode | any
}

const pages = [
  {
    title: 'Home',
    path: '/',
    icon: HomeIcon,
  },
  {
    title: 'Explore',
    path: '/explore',
    icon: MagnifyingGlassIcon,
  },
  {
    title: 'Friends',
    path: '/friends',
    icon: PersonIcon,
  },
  {
    title: 'Notifications',
    path: '/notifications',
    icon: BellIcon,
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: EnvelopeClosedIcon,
  },
  {
    title: 'Ramplify',
    path: '/ramplify',
    icon: HeartIcon,
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: GearIcon,
  },
]

export const Navigation: FC<NavigationProps> = ({}) => {
  const router = useRouter()
  const { toggleColorMode } = useColorMode()

  return (
    <MotionStack
      direction="column"
      h="full"
      justify="space-between"
      zIndex={10}
      bg="bg"
      gap={1.5}
      position={'fixed'}
    >
      <VStack mt={6} mb={4} spacing={7} alignItems={'flex-start'}>
        <Image
          w={'166px'}
          h={'26px '}
          src={'/full-logo.png'}
          alt={'logo'}
          cursor={'pointer'}
          onClick={() => router.push('/')}
        />
        <Box mt={3}>
          {pages.map((p, i) => {
            return <NavigationButton key={i} page={p} />
          })}
        </Box>
        <button onClick={() => toggleColorMode()}>switch color mode</button>
      </VStack>

      <Box>
        <NavigationSubButtons />
      </Box>
    </MotionStack>
  )
}
