'use client'

import { FC, PropsWithChildren, useMemo, useState } from 'react'
import { Button } from '@chakra-ui/button'
import { PostOptionButtons } from 'src/components/client/Posts/PostingModule/PostOptionButtons'
import { Flex, HStack, Text, VStack } from '@chakra-ui/layout'
import { OverflowingTextarea } from 'src/components/client/OverflowingTextarea'
import { Avatar } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import {
  getGetMeQueryKey,
  getGetPostQueryKey,
  getGetPostRepliesQueryKey,
  useCreatePostMutation,
  useGetPostQuery,
  useQueryClient,
  useReplyToPostMutation,
} from '@rammble/sdk'
import { EmojiClickData } from 'emoji-picker-react'

export enum PostingModuleType {
  CREATE_POST,
  COMMENT_ON_POST,
  REPLY_TO_COMMENT,
}

export type PostingModuleProps = PropsWithChildren &
  (
    | {
        type: PostingModuleType.CREATE_POST
      }
    | {
        type: PostingModuleType.COMMENT_ON_POST
        replyToPostId?: string
      }
    | {
        type: PostingModuleType.REPLY_TO_COMMENT
        replyToPostId?: string
      }
  )

const usePosterModuleMutation = (
  type: PostingModuleType,
  onComplete: () => void,
  replyToPostId?: string,
) => {
  const queryClient = useQueryClient()

  const onSuccess = () => {
    if (replyToPostId) {
      queryClient.invalidateQueries({
        queryKey: getGetPostRepliesQueryKey({
          postId: replyToPostId,
        }),
      })
      queryClient.invalidateQueries({
        queryKey: getGetPostQueryKey({
          postId: replyToPostId,
        }),
      })
    }

    queryClient.invalidateQueries({
      queryKey: getGetMeQueryKey({}),
    })

    onComplete()
  }

  const { mutateAsync: createPost } = useCreatePostMutation({
    onSuccess,
  })
  const { mutateAsync: createReply } = useReplyToPostMutation({
    onSuccess,
  })

  switch (type) {
    case PostingModuleType.CREATE_POST:
      return (body: string) =>
        createPost({
          body,
          private: false,
        })
    case PostingModuleType.COMMENT_ON_POST:
    case PostingModuleType.REPLY_TO_COMMENT:
      return (body: string) => {
        if (!replyToPostId) {
          throw new Error('replyToPostId is required for COMMENT_ON_POST type')
        }

        return createReply({
          body,
          postIdReplyTo: replyToPostId,
        })
      }
  }
}

const getButtonLabel = (
  type: PostingModuleType,
  post?: {
    replyTo?: string | null
  },
) => {
  const postType = post?.replyTo ? 'Reply' : 'Comment'

  switch (type) {
    case PostingModuleType.CREATE_POST:
      return 'Post'
    case PostingModuleType.COMMENT_ON_POST:
      return postType
    case PostingModuleType.REPLY_TO_COMMENT:
      return 'Reply'
  }
}

const getAvatarSize = (type: PostingModuleType) => {
  switch (type) {
    case PostingModuleType.CREATE_POST:
      return '4'
    case PostingModuleType.COMMENT_ON_POST:
    case PostingModuleType.REPLY_TO_COMMENT:
      return '1'
  }
}

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

const getPlaceholderText = (
  type: PostingModuleType,
  post?: {
    poster?: {
      username?: string
      displayName?: string
    }
    replyTo?: string | null
  },
) => {
  const name = post?.poster?.displayName ?? post?.poster?.username ?? 'user'
  const postType = post?.replyTo ? 'comment' : 'ramble'

  switch (type) {
    case PostingModuleType.CREATE_POST:
      return 'Ramble about anything...'
    case PostingModuleType.COMMENT_ON_POST:
      return `Reply to ${name}'s ${postType}...`
    case PostingModuleType.REPLY_TO_COMMENT:
      return `Reply to ${name}'s comment...`
  }
}

export const PostingModule: FC<PostingModuleProps> = ({ type, ...props }) => {
  const [content, setContent] = useState('')
  const count = content.length

  const mutate = usePosterModuleMutation(
    type,
    () => setContent(''),
    'replyToPostId' in props ? props.replyToPostId : undefined,
  )

  const { data: replyToPost } = useGetPostQuery({
    postId: 'replyToPostId' in props ? props.replyToPostId ?? '' : '',
  })

  const submitButtonLabel = useMemo(
    () => getButtonLabel(type, replyToPost?.post),
    [type, replyToPost],
  )
  const avatarSize = useMemo(() => getAvatarSize(type), [type])

  const onAddEmoji = ({ emoji }: EmojiClickData) =>
    setContent((prev) => prev + emoji)

  return (
    <Flex w="full" gap="4">
      <Avatar src="https://picsum.photos/48" size={avatarSize} />
      <VStack w="full" spacing="2">
        <OverflowingTextarea
          minHeight="64px"
          maxAdjustedHeight={240}
          placeholder={getPlaceholderText(type, replyToPost?.post)}
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
          <PostOptionButtons onAddEmoji={onAddEmoji} />

          <Button size="3" colorScheme="accent" onClick={() => mutate(content)}>
            {submitButtonLabel}
          </Button>
        </HStack>
      </VStack>
    </Flex>
  )
}
