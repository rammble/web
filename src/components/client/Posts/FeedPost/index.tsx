'use client'

import { useBoolean } from '@chakra-ui/hooks'
import { HStack, Text, VStack } from '@chakra-ui/layout'
import { useRouter } from 'next/navigation'
import { FC, useCallback, useEffect, useMemo } from 'react'
import { FeedButtons } from 'src/components/client/Posts/FeedPost/FeedButtons'
import { FeedMenu } from 'src/components/client/Posts/FeedPost/FeedMenu'
import { FeedText } from 'src/components/client/Posts/FeedPost/FeedText'
import {
  getGetMeQueryKey,
  GetUserByUsernameQuery,
  useQueryClient,
  useToggleLikePostMutation,
} from '@rammble/sdk'
import { Avatar } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import { parseTimestampToDate } from 'src/utils/parseTimestampToDate'

export interface FeedPostProps {
  data?: GetUserByUsernameQuery['user']['posts'][number] & {
    poster: Omit<
      GetUserByUsernameQuery['user'],
      'posts' | 'mutuals' | 'followers' | 'followed'
    >
  }
  shouldLink?: boolean
  isLoading?: boolean
}

export const FeedPost: FC<FeedPostProps> = ({ shouldLink = true, data }) => {
  const router = useRouter()
  const queryClient = useQueryClient()

  const [isLiked, setIsLiked] = useBoolean(data?.isLikedBySelf)
  const [isReposted, { toggle: toggleIsReposted }] = useBoolean(false)

  const onSuccess = () =>
    queryClient.invalidateQueries({
      queryKey: [getGetMeQueryKey({})],
    })

  const { mutateAsync: toggleLikePost } = useToggleLikePostMutation({
    onSuccess,
  })

  const toggleLike = useCallback(async () => {
    const postId = data?.id
    if (!postId) return

    await toggleLikePost({
      id: postId,
    }).then(() => setIsLiked.toggle())
  }, [isLiked, data?.id])

  const likeCount = useMemo(
    () =>
      (data?.likeCount ?? 0) +
      (isLiked
        ? Number(data?.isLikedBySelf ? 0 : 1)
        : Number(data?.isLikedBySelf ? -1 : 0)),
    [data, isLiked, data?.likeCount, data?.isLikedBySelf],
  )

  useEffect(() => {
    if (data && isLiked !== data.isLikedBySelf) {
      if (data.isLikedBySelf) {
        setIsLiked.on()
      } else {
        setIsLiked.off()
      }
    }
  }, [data, data?.isLikedBySelf])

  const post = (
    <HStack
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
          router.push(`/users/${data?.poster?.username}`)
        }}
        cursor={'pointer'}
        src={`https://picsum.photos/40?n=${data?.poster?.username}`}
        size="4"
      />
      <HStack w="full" align="start">
        <VStack spacing="2" w="full" align="start">
          <HStack w={'full'} fontSize={16} justifyContent={'space-between'}>
            <HStack
              onClick={(e) => {
                e.stopPropagation()
                router.push(`/users/${data?.poster?.username}`)
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
                {data?.poster?.displayName}
              </Text>
              <Text
                textStyle="2"
                fontWeight="medium"
                isTruncated
                maxWidth="full"
                color="neutral.8a"
              >
                {data?.poster?.username}
              </Text>
              <Text color="neutral.8a">·</Text>
              <Text color="neutral.8a" fontWeight="medium">
                {parseTimestampToDate(
                  data?.createdAt ?? new Date().toDateString(),
                )}
              </Text>
            </HStack>
            <FeedMenu postId={data?.id ?? '0'} />
          </HStack>
          <VStack align="start" spacing={1}>
            <VStack align="start" spacing={1}>
              {data?.body && <FeedText text={data.body} />}
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
            commentCount={data?.replyCount ?? 0}
            repostCount={0}
            shareCount={0}
            onLike={toggleLike}
            onRepost={toggleIsReposted}
            onComment={() => router.push(`/posts/${data?.id}`)}
            onShare={() => console.log('share')}
            isLiked={isLiked}
            isCommented={false}
            isReposted={isReposted}
          />
        </VStack>
      </HStack>
    </HStack>
  )

  if (shouldLink) {
    return (
      <Link w="full" href={`/posts/${data?.id}`}>
        {post}
      </Link>
    )
  }

  return post
}
