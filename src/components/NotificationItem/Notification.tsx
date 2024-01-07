import React, { FC } from 'react'
import { Box, HStack, Text, VStack } from '@chakra-ui/layout'
import { fromTime } from 'src/utils/day'
import { NotificationItemProps } from 'src/components/NotificationItem/index'
import { Image } from '@chakra-ui/image'
import { NotificationMenu } from 'src/components/NotificationItem/NotificationMenu'
import { Spacer } from '@chakra-ui/react'

export const Notification: FC<NotificationItemProps> = ({
  image,
  title,
  text,
  time,
  read,
  system,
}) => (
  <HStack w="full" p={2} bg="bg.lighter" rounded="8px">
    <Image src={image} boxSize="48px" rounded="12px" />
    <VStack align="start" spacing={1}>
      <HStack color="ui.40" lineHeight="19px">
        <Text color="ui" fontWeight={700}>
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
