import { FC, PropsWithChildren, useState } from 'react'
import { Button } from '@chakra-ui/button'
import { PostOptionButtons } from './PostOptionButtons'
import { Textarea } from '@chakra-ui/textarea'
import { Box, Flex, HStack, Text } from '@chakra-ui/layout'
import { useCreatePostMutation } from '@rammble/sdk'
import { UserAvatar } from 'src/components/UserAvatar'
import { FakeFeedPosts } from 'src/utils/placeholder.data'

export interface CreatePostModalProps extends PropsWithChildren {}

export const CreatePost: FC<CreatePostModalProps> = () => {
  const [createPost] = useCreatePostMutation({
    refetchQueries: ['GetMe'],
  })
  const [content, setContent] = useState('')
  const count = content.length

  return (
    <Flex w={'full'} gap={4}>
      <UserAvatar user={FakeFeedPosts[0].user as any} />
      <Box w={'full'}>
        <Textarea
          resize="none"
          _hover={{ borderColor: 'brand' }}
          placeholder="Ramble about anything..."
          backgroundColor="bg.lighter"
          borderColor="brand"
          onChange={(e) => {
            setContent(e.target.value)
          }}
          maxLength={140}
        />
        <HStack mt={2} justifyContent="space-between">
          <HStack>
            <Text cursor="pointer" fontSize={12} color="brand.darker">
              Posting guidelines
            </Text>
            <Text cursor="pointer" fontSize={12} color="ui.40" fontWeight={200}>
              Support
            </Text>
          </HStack>
          <Text
            fontSize={12}
            color={count >= 130 ? 'accent.yellow' : 'ui.40'}
            fontWeight={200}
          >
            {count}/140
          </Text>
        </HStack>
        <HStack mt={2} justifyContent="space-between">
          <PostOptionButtons />
          <Button
            borderRadius={10}
            size="md"
            _hover={{ bg: 'brand', color: 'ui.100' }}
            bg="brand.darkest"
            color="brand"
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
      </Box>
    </Flex>
  )
}
