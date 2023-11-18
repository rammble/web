import {FC} from "react";
import {useHideOnScroll} from "../../hooks/useHideOnScroll";
import {FeedIcon} from "../../icons/FeedIcon";
import {SearchIcon} from "../../icons/SearchIcon";
import {PeopleIcon} from "../../icons/PeopleIcon";
import {NotificationIcon} from "../../icons/NotificationIcon";
import {MessagingIcon} from "../../icons/MessagingIcon";
import {FilledHeartIcon} from "../../icons/FilledHeartIcon";
import {NavigationButton} from "./NavigationButton";
import {MotionStack, transitions} from "../motion";
import {Image} from "@chakra-ui/image";
import {Icon, Text} from "@chakra-ui/react";
import {PlusIcon} from "../../icons/PlusIcon";
import {Box, Flex} from "@chakra-ui/layout";
import {NavigationSubButtons} from "./NavigationSubButtons";
import {CogIcon} from "../../icons/CogIcon";
import {useRouter} from "next/router";

export interface NavigationProps {
}

export interface PagesObjectProps {
  title: String,
  path: String
  icon: undefined | string | JSX.Element
}

const pages = [
  {
    title: 'Home',
    path: '/',
    icon: <FeedIcon/>
  },
  {
    title: 'Explore',
    path: '/explore',
    icon: <SearchIcon/>
  },
  {
    title: 'Friends',
    path: '/friends',
    icon: <PeopleIcon/>
  },
  {
    title: 'Notifications',
    path: '/notifications',
    icon: <NotificationIcon/>
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <MessagingIcon/>
  },
  {
    title: 'Premium',
    path: '/premium',
    icon: <FilledHeartIcon/>
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <CogIcon/>
  }
]

export const Navigation: FC<NavigationProps> = ({}) => {
  const hideOnScroll = useHideOnScroll()
  const router = useRouter()

  return (
      <MotionStack
          ml={5}
          direction="column"
          h="100%"
          justify="space-between"
          zIndex={10}
          bg="bg"
          gap={1.5}
          position={'fixed'}
      >
        <Box>
          <Image src="/full-logo.png"  alt={'logo'} cursor={'pointer'} onClick={() => router.push('/')}/>

          <Box mt={3}>
            {pages.map((p, i) => {
              return <NavigationButton key={i} page={p}/>
            })}

            <Flex cursor={'pointer'} borderRadius={'45px'} bg={'brand.darkest'} mt={2} p={2} w={'200px'} h={'48px'} alignItems={'center'} gap={4}>
              <Icon bg={'brand'} borderRadius={'100%'} boxSize={6} color={'bg'}>
                <PlusIcon/>
              </Icon>
              <Text fontSize={'20px'} color={'brand'}>
                Ramble
              </Text>
            </Flex>
          </Box>
        </Box>

        <Box>
          <NavigationSubButtons/>
        </Box>
      </MotionStack>
  )
}
