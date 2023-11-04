import { FC } from 'react'
import { Button } from '@chakra-ui/button'
import { HStack } from '@chakra-ui/layout'

export interface ProfileFeedTabsProps {}

export const ProfileFeedTabs: FC<ProfileFeedTabsProps> = () => {
  return (
    <HStack w="100%" fontSize={16} fontWeight={500} color="ui.40">
      <Button
        w="100%"
        py={3}
        color="ui.100"
        borderTopRadius="8px"
        bg="ui.5"
        borderBottom="2px solid"
        borderBottomColor="brand"
      >
        Rambles
      </Button>
      <Button w="100%" py={3}>
        Media
      </Button>
      <Button w="100%" py={3}>
        Likes
      </Button>
    </HStack>
  )
}
