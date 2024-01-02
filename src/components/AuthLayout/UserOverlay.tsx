import {FC} from "react";
import {Box, Flex, HStack, Text} from "@chakra-ui/layout";
import {Avatar, Tooltip} from "@chakra-ui/react";
import {FakeFeedPosts} from "src/utils/placeholder.data";

export interface UserOverlayProps {
  isMobile: boolean
}

export const UserOverlay: FC<UserOverlayProps> = ({isMobile}) => {
  const user = FakeFeedPosts[0].user

  if (!isMobile) {
    return <></>
  }

  return (
    <Flex flexDir={'column'} gap={1} p={10} position={'fixed'} bottom={0}>
      <Text color={'ui.40'}>
        Posted by
      </Text>
      <Flex gap={2} alignItems={'center'}>
        <Avatar borderRadius={8} src={user.avatarURL}/>
        <Box>
          <Text>
            {user.username}
          </Text>
          <Text color={'ui.40'}>
            @{user.displayName}
          </Text>
        </Box>
      </Flex>

    </Flex>
  )
}
