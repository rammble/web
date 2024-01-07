import { Image } from '@chakra-ui/image'
import { Box, Flex } from '@chakra-ui/layout'
import { Icon, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { CogIcon } from 'src/icons/CogIcon'
import { FeedIcon } from 'src/icons/FeedIcon'
import { FilledHeartIcon } from 'src/icons/FilledHeartIcon'
import { MessagingIcon } from 'src/icons/MessagingIcon'
import { NotificationIcon } from 'src/icons/NotificationIcon'
import { PeopleIcon } from 'src/icons/PeopleIcon'
import { PlusIcon } from 'src/icons/PlusIcon'
import { SearchIcon } from 'src/icons/SearchIcon'
import { MotionStack } from 'src/components/motion'
import { NavigationButton } from 'src/components/Navigation/NavigationButton'
import { NavigationSubButtons } from 'src/components/Navigation/NavigationSubButtons'

export interface NavigationProps {}

export interface PagesObjectProps {
  title: String
  path: String
  icon: undefined | string | JSX.Element
}

const pages = [
  {
    title: 'Home',
    path: '/',
    icon: <FeedIcon />,
  },
  {
    title: 'Explore',
    path: '/explore',
    icon: <SearchIcon />,
  },
  {
    title: 'Friends',
    path: '/friends',
    icon: <PeopleIcon />,
  },
  {
    title: 'Notifications',
    path: '/notifications',
    icon: <NotificationIcon />,
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <MessagingIcon />,
  },
  {
    title: 'Premium',
    path: '/premium',
    icon: <FilledHeartIcon />,
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <CogIcon />,
  },
]

export const Navigation: FC<NavigationProps> = ({}) => {
  const router = useRouter()

  return (
    <MotionStack
      ml={5}
      direction="column"
      h="full"
      justify="space-between"
      zIndex={10}
      bg="bg"
      gap={1.5}
      position={'fixed'}
    >
      <Box>
        <Image
          src="/full-logo.png"
          alt={'logo'}
          cursor={'pointer'}
          onClick={() => router.push('/')}
        />

        <Box mt={3}>
          {pages.map((p, i) => {
            return <NavigationButton key={i} page={p} />
          })}

          <Flex
            cursor={'pointer'}
            borderRadius={'45px'}
            bg={'brand.darkest'}
            mt={2}
            p={2}
            w={'200px'}
            h={'48px'}
            alignItems={'center'}
            gap={4}
          >
            <Icon bg={'brand'} borderRadius={'100%'} boxSize={6} color={'bg'}>
              <PlusIcon />
            </Icon>
            <Text fontSize={'20px'} color={'brand'}>
              Ramble
            </Text>
          </Flex>
        </Box>
      </Box>

      <Box>
        <NavigationSubButtons />
      </Box>
    </MotionStack>
  )
}
