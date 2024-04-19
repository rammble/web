'use client'

import { useBoolean } from '@chakra-ui/hooks'
import { HStack, Text, VStack } from '@chakra-ui/layout'
import { useRouter } from 'next/navigation'
import { FC, useCallback } from 'react'
import { FeedButtons } from 'src/components/client/Posts/FeedPost/FeedButtons'
import { FeedMenu } from 'src/components/client/Posts/FeedPost/FeedMenu'
import { FeedText } from 'src/components/client/Posts/FeedPost/FeedText'
import {
  getGetMeQueryKey,
  GetUserByUsernameQuery,
  useLikePostMutation,
  useQueryClient,
  useUnlikePostMutation,
} from '@rammble/sdk'
import { Avatar } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import {parseTimestampToDate} from "src/utils/parseTimestampToDate";

export interface FeedPostProps {
  data: GetUserByUsernameQuery['user']['posts'][number] & {
    poster: Omit<GetUserByUsernameQuery['user'], 'posts'>
  }
  isLoading?: boolean
}

export const FeedPost: FC<FeedPostProps> = ({ data }) => {
  const router = useRouter()
  const queryClient = useQueryClient()

  const [isLiked, setIsLiked] = useBoolean(data?.isLikedByUser)
  const [isReposted, { toggle: toggleIsReposted }] = useBoolean(false)

  const onSuccess = () =>
    queryClient.invalidateQueries({
      queryKey: [getGetMeQueryKey({})],
    })

  const { mutateAsync: likePost } = useLikePostMutation({
    onSuccess,
  })

  const { mutateAsync: unlikePost } = useUnlikePostMutation({
    onSuccess,
  })

  const toggleLike = useCallback(async () => {
    if (isLiked) {
      setIsLiked.off()
      await unlikePost(data)
    } else {
      setIsLiked.on()
      await likePost(data)
    }
  }, [isLiked])

  // this is totally necessary and absolutely cannot be made any better - professional progamer
  const likeCount =
    data.likes +
    (isLiked
      ? Number(data.isLikedByUser ? 0 : 1)
      : Number(data.isLikedByUser ? -1 : 0))

  const isFeedPost = true

  return (
    <HStack
      onClick={() => isFeedPost && router.push(`/posts/${data.id}`)}
      cursor={isFeedPost ? 'pointer' : 'auto'}
      align="start"
      w="full"
      spacing="4"
      bg="panel.default"
      p="3"
      rounded="4"
    >
      <Avatar
        onClick={(e) => {
          e.stopPropagation()
          router.push(`/users/${data.poster?.username}`)
        }}
        cursor={'pointer'}
        src={`https://picsum.photos/40?n=${data.poster?.username}`}
        size="4"
      />
      <HStack w="full" align="start">
        <VStack spacing="2" w="full" align="start">
          <HStack w={'full'} fontSize={16} justifyContent={'space-between'}>
            <HStack
              onClick={(e) => {
                e.stopPropagation()
                router.push(`/users/${data.poster?.username}`)
              }}
              cursor={'pointer'}
              textStyle="3"
              fontWeight="bold"
            >
              <Text
                _hover={{ textDecoration: 'underline' }}
                color="neutral.11a"
                isTruncated
                maxWidth="full"
              >
                {data.poster?.displayName}
              </Text>
              <Text
                textStyle="2"
                fontWeight="medium"
                isTruncated
                maxWidth="full"
                color="neutral.8a"
              >
                {data.poster?.username}
              </Text>
              <Text color="neutral.8a">·</Text>
              <Text color="neutral.8a" fontWeight="medium">
                {parseTimestampToDate(data?.createdAt)}
              </Text>
            </HStack>
            <FeedMenu />
          </HStack>
          <VStack align="start" spacing={1}>
            <VStack align="start" spacing={1}>
              <FeedText text={data.body} />
            </VStack>
            <HStack
              spacing="3"
              color="neutral.8a"
              textStyle="2"
              fontWeight="medium"
            >
              <Link href="#hashtag">#hashtag</Link>
              <Link href="#hashtag">#hashtag</Link>
              <Link href="#hashtag">#hashtag</Link>
            </HStack>
          </VStack>
          <FeedButtons
            likeCount={likeCount}
            commentCount={0}
            repostCount={0}
            shareCount={0}
            onLike={toggleLike}
            onRepost={toggleIsReposted}
            onComment={() => console.log('comment')}
            onShare={() => console.log('share')}
            isLiked={isLiked}
            isReposted={isReposted}
          />
        </VStack>
      </HStack>
    </HStack>
  )
}
