'use client'

import {HStack, Text, VStack} from '@chakra-ui/layout'
import {FC} from 'react'
import {Avatar} from '@chakra-ui/react'
import {FeedMenu} from 'src/components/client/Posts/FeedPost/FeedMenu'
import {CommentProps} from 'src/components/client/Posts/Comments/Comment'
import {parseTimestampToDate} from "src/utils/parseTimestampToDate";

export interface CommentHeaderProps {
  user: CommentProps['comment']['poster']
  createdAt: CommentProps['comment']['createdAt']
}

export const CommentHeader: FC<CommentHeaderProps> = ({ user, createdAt }) => {

  return (
    <VStack w="full" align="start" spacing="4">
      <HStack w={'full'} fontSize={16} justifyContent={'space-between'}>
        <HStack w={'full'} spacing={3}>
          <Avatar size={'1'} name={user?.username} />
          <Text>{user?.username}</Text>
          <Text color="neutral.8a">·</Text>
          <Text textStyle={'2'} color={'neutral.8a'}>
            {parseTimestampToDate(createdAt)}
          </Text>
        </HStack>
        <FeedMenu />
      </HStack>
    </VStack>
  )
}
