import { FC, PropsWithChildren, useState } from 'react'
import { Button } from '@chakra-ui/button'
import { PostOptionButtons } from './PostOptionButtons'
import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/layout'
import { useCreatePostMutation } from '@rammble/sdk'
import { OverflowingTextarea } from 'src/components/OverflowingTextarea'
import { Avatar } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'

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
  const [createPost] = useCreatePostMutation({
    refetchQueries: ['GetMe'],
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
          <PostOptionButtons />
          <Button
            size="3"
            colorScheme="accent"
            onClick={() =>
              createPost({
                variables: {
                  input: {
                    body: content,
                    private: false,
                  },
                },
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
