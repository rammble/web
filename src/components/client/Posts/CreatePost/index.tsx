'use client'

import {FC, PropsWithChildren, useRef, useState} from 'react'
import { Button } from '@chakra-ui/button'
import { PostOptionButtons } from 'src/components/client/Posts/CreatePost/PostOptionButtons'
import {Box, Flex, HStack, Text, VStack} from '@chakra-ui/layout'
import {
  getGetMeQueryKey,
  useCreatePostMutation,
  useQueryClient,
} from '@rammble/sdk'
import { OverflowingTextarea } from 'src/components/client/OverflowingTextarea'
import { Avatar } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import EmojiPicker from "emoji-picker-react";

export interface CreatePostModalProps extends PropsWithChildren {}

const getTextColor = (count: number) => {
  if (count <= 399) {
    return 'neutral.9a'
  }

  if (count <= 469) {
    return 'warn.9a'
  }

  if (count <= 479) {
    return 'error.11a'
  }

  return 'error.9a'
}

export const CreatePost: FC<CreatePostModalProps> = () => {
  const queryClient = useQueryClient()
  const { mutate: createPost } = useCreatePostMutation({
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: getGetMeQueryKey({}),
      }),
  })
  const [content, setContent] = useState('')
  const count = content.length

  return (
    <Flex w="full" gap="4">
      <Avatar src="https://picsum.photos/48" size="4" />
      <VStack w="full" spacing="2">
        <OverflowingTextarea
          minHeight="64px"
          maxAdjustedHeight={240}
          placeholder="Ramble about anything..."
          maxLength={480}
          value={content}
          onChange={(e) => {
            setContent(e.target.value)
          }}
        />
        <HStack w="full" justifyContent="space-between">
          <Link
            href="/guidelines"
            textStyle="2"
            fontWeight="regular"
            color="accent.11a"
            _hover={{
              color: 'accent.10a',
            }}
          >
            Guidelines
          </Link>
          <Text textStyle="1" fontWeight="regular" color={getTextColor(count)}>
            {count}/480
          </Text>
        </HStack>
        <HStack w="full" justifyContent="space-between">
          <PostOptionButtons setContent={setContent} />

          <Button
            size="3"
            colorScheme="accent"
            onClick={() =>
              createPost({
                body: content,
                private: false,
              })
            }
          >
            Post
          </Button>
        </HStack>
      </VStack>
    </Flex>
  )
}
