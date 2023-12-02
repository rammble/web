import { useBoolean } from '@chakra-ui/hooks'
import { Image } from '@chakra-ui/image'
import { HStack, Text, VStack } from '@chakra-ui/layout'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { FeedProps } from 'src/pages'
import { UserAvatar } from 'src/components/UserAvatar'
import { FeedButtons } from 'src/components/FeedPost/FeedButtons'
import { FeedMenu } from 'src/components/FeedPost/FeedMenu'
import { FeedText } from 'src/components/FeedPost/FeedText'

export interface FeedPostProps {
  data: FeedProps
  isLoading?: boolean
}

export const FeedPost: FC<FeedPostProps> = ({ data }) => {
  const router = useRouter()
  const isPinned = data.post.isPinned
  const onUserProfile = router.pathname.includes('/user')

  const isPinnedAndUserProfile = isPinned && onUserProfile

  const [isLiked, { toggle: toggleIsLiked }] = useBoolean(false)
  const [isReposted, { toggle: toggleIsReposted }] = useBoolean(false)

  return (
    <HStack alignItems={'flex-start'} w={'100%'} gap={4} m={1}>
      <UserAvatar user={data.user} />
      <HStack
        outline={isPinnedAndUserProfile ? '1.5px solid' : 'none'}
        outlineColor={isPinnedAndUserProfile ? 'brand' : 'none'}
        p={'12px 16px 16px 16px'}
        borderRadius={'8px'}
        bg="bg.lighter"
        w="100%"
        align="start"
      >
        <VStack spacing={3} w="full" align="start">
          {isPinnedAndUserProfile && (
            <Text
              color={'brand'}
              fontWeight={600}
              textTransform={'uppercase'}
              letterSpacing={1.92}
              fontSize={12}
            >
              Pinned Ramble
            </Text>
          )}
          <HStack w={'100%'} fontSize={16} justifyContent={'space-between'}>
            <HStack
              cursor={'pointer'}
              onClick={() => router.push(`/user/${data.user.username}`)}
            >
              <Text fontWeight={500} isTruncated maxWidth={150}>
                {data.user.displayName}
              </Text>
              <Text color={'ui.40'} isTruncated maxWidth={150}>
                {data.user.username}
              </Text>
              <Text color="ui.40">·</Text>
              <Text color="ui.40">32m</Text>
            </HStack>
            <FeedMenu />
          </HStack>
          <VStack align="start" spacing={1}>
            <VStack align="start" spacing={1}>
              <FeedText text={data.post.text} />
              {data.post.images[0] && (
                <Image
                  mt={2}
                  objectFit={'cover'}
                  w={'100%'}
                  h={'315px'}
                  rounded="12px"
                  src={data.post.images[0].url}
                />
              )}
            </VStack>
            <HStack spacing={3} color="ui.alt">
              {data.post.tags.map((t, i) => {
                return (
                  <Text _hover={{ color: 'brand' }} cursor={'pointer'} key={i}>
                    #{t}
                  </Text>
                )
              })}
            </HStack>
          </VStack>
          <FeedButtons
            likeCount={69}
            commentCount={420}
            repostCount={1124122}
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
