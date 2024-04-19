'use client'

import { useBoolean } from '@chakra-ui/hooks'
import { HStack, Text, VStack } from '@chakra-ui/layout'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { FeedButtons } from 'src/components/client/Posts/FeedPost/FeedButtons'
import { FeedMenu } from 'src/components/client/Posts/FeedPost/FeedMenu'
import { Avatar } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import { Image } from '@chakra-ui/image'

export interface MediaPostProps {
  data: any
  isLoading?: boolean
}

export const MediaPost: FC<MediaPostProps> = ({ data }) => {
  const router = useRouter()

  const [isLiked, { toggle: toggleIsLiked }] = useBoolean(false)
  const [isReposted, { toggle: toggleIsReposted }] = useBoolean(false)

  return (
    <HStack
      w="full"
      bg="panel.default"
      rounded="4"
      backgroundImage={`url(${data.imageUrl})`}
      backgroundSize={'cover'}
      overflow={'hidden'}
    >
      <HStack spacing="4" p="3" backdropFilter="blur(60px)" bg={'#000000BF'}>
        <HStack w="full" align="start">
          <VStack spacing="2" w="full" align="start">
            <HStack w={'full'} fontSize={16} justifyContent={'space-between'}>
              <HStack spacing={3}>
                <Avatar
                  onClick={() => router.push(`/users/${data.poster.username}`)}
                  cursor={'pointer'}
                  src={`https://picsum.photos/40?n=${data.poster.username}`}
                  size="2"
                />
                <HStack
                  onClick={() => router.push(`/users/${data.poster.username}`)}
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
              </HStack>
              <FeedMenu />
            </HStack>
            <VStack align="start" spacing={1}>
              <Image src={data.imageUrl} />
              <HStack justifyContent={'space-between'} w={'full'}>
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
                <HStack>
                  <FeedButtons
                    onLike={toggleIsLiked}
                    onRepost={toggleIsReposted}
                    onComment={() => console.log('comment')}
                    onShare={() => console.log('share')}
                    isLiked={isLiked}
                    isReposted={isReposted}
                  />
                </HStack>
              </HStack>
            </VStack>
          </VStack>
        </HStack>
      </HStack>
    </HStack>
  )
}
