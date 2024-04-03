import { useBoolean } from '@chakra-ui/hooks'
import { HStack, Text, VStack } from '@chakra-ui/layout'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { FeedButtons } from 'src/components/Posts/FeedPost/FeedButtons'
import { FeedMenu } from 'src/components/Posts/FeedPost/FeedMenu'
import { FeedText } from 'src/components/Posts/FeedPost/FeedText'
import { GetMeQuery } from '@rammble/sdk'
import { Avatar } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'

export interface FeedPostProps {
  data: GetMeQuery['me']['posts'][number]
  isLoading?: boolean
}

export const FeedPost: FC<FeedPostProps> = ({ data }) => {
  const router = useRouter()

  const isPinnedAndUserProfile = router.pathname.includes('/user')

  const [isLiked, { toggle: toggleIsLiked }] = useBoolean(false)
  const [isReposted, { toggle: toggleIsReposted }] = useBoolean(false)

  return (
    <HStack
      align="start"
      w="full"
      spacing="4"
      bg="panel.default"
      p="3"
      rounded="4"
    >
      <Avatar
        onClick={() => router.push(`/user/${data.poster.username}`)}
        cursor={'pointer'}
        src={`https://picsum.photos/40?n=${data.poster.username}`}
        size="4"
      />
      <HStack w="full" align="start">
        <VStack spacing="2" w="full" align="start">
          <HStack w={'full'} fontSize={16} justifyContent={'space-between'}>
            <HStack
              onClick={() => router.push(`/user/${data.poster.username}`)}
              cursor={'pointer'}
              textStyle="3"
              fontWeight="bold"
            >
              <Text color="neutral.11a" isTruncated maxWidth="full">
                {data.poster.username}
              </Text>
              <Text
                textStyle="2"
                fontWeight="medium"
                isTruncated
                maxWidth="full"
                color="neutral.8a"
              >
                {data.poster.username}
              </Text>
              <Text color="neutral.8a">·</Text>
              <Text color="neutral.8a" fontWeight="medium">
                32m
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
            likeCount={69}
            commentCount={420}
            repostCount={1124122}
            shareCount={4120}
            onLike={toggleIsLiked}
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
