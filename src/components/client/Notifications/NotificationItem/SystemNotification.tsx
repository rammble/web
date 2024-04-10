import React, { FC } from 'react'
import { Box, HStack, Text, VStack } from '@chakra-ui/layout'
import { NotificationItemProps } from 'src/components/client/Notifications/NotificationItem'
import { Spacer } from '@chakra-ui/react'
import { NotificationMenu } from 'src/components/client/Notifications/NotificationItem/NotificationMenu'
import { fromTime } from 'src/utils/day'

export const SystemNotificationItem: FC<NotificationItemProps> = ({
  image,
  title,
  text,
  time,
  read,
  system,
}) => (
  <HStack w="full" p={2} bg="blurp.darker" rounded="8px">
    <VStack align="start" spacing={1}>
      <HStack color="ui.40" lineHeight="19px">
        <Text color="brand" fontWeight={700}>
          {title}
        </Text>
        <Text>·</Text>
        <Text>{fromTime(time)} ago</Text>
      </HStack>
      <Text color="ui.60" lineHeight="19px">
        {text}
      </Text>
    </VStack>
    <Spacer />
    <Box alignSelf="start">
      <NotificationMenu />
    </Box>
  </HStack>
)
