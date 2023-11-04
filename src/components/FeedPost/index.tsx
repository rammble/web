import { HStack, Text, VStack } from '@chakra-ui/layout'
import { EmptyHeartIcon } from 'src/icons/EmptyHeartIcon'
import { RepostIcon } from 'src/icons/RepostIcon'
import { ShareIcon } from 'src/icons/ShareIcon'
import { ThreeDotsIcon } from 'src/icons/ThreeDotsIcon'
import { Image } from '@chakra-ui/image'
import { FC } from 'react'
import { LikeButton } from 'src/components/LikeButton'
import { IconButton } from '@chakra-ui/button'
import { Link } from '@chakra-ui/next-js'

export const FeedPost: FC = () => (
  <HStack bg="#15151F" w="100%" p={2} spacing={3} align="start">
    <Link href="/@from-feed-username" flexShrink={0}>
      <Image rounded="12px" src="https://picsum.photos/48" boxSize="48px" />
    </Link>
    <VStack spacing={4} w="full" align="start">
      <VStack align="start" spacing={1}>
        <VStack align="start" spacing={1}>
          <HStack fontSize={16}>
            <Text fontWeight={500}>Hello world</Text>
            <Text color="ui.40">·</Text>
            <Text color="ui.40">32m</Text>
          </HStack>
          <Text>
            just wanted the latest{' '}
            <Text as="span" color="brand">
              #movie
            </Text>
          </Text>
        </VStack>
        <HStack spacing={3} color="#515E6A">
          <Text>#movie</Text>
          <Text>#idk i didnt watch the movie</Text>
        </HStack>
      </VStack>
      <HStack w="full" justify="space-between">
        <LikeButton />
        <HStack spacing={4}>
          <IconButton
            aria-label="Repost"
            color="ui.60"
            icon={
              <RepostIcon boxSize="32px" transition="all 0.05s ease-in-out" />
            }
            _active={{
              color: 'brand',
            }}
          />
          <IconButton
            aria-label="Share"
            color="ui.60"
            icon={
              <ShareIcon boxSize="32px" transition="all 0.05s ease-in-out" />
            }
            _active={{
              color: 'brand',
            }}
          />
          <IconButton
            aria-label="Menu"
            color="ui.40"
            icon={
              <ThreeDotsIcon
                boxSize="32px"
                transition="all 0.05s ease-in-out"
              />
            }
            _active={{
              color: 'ui',
            }}
          />
        </HStack>
      </HStack>
    </VStack>
  </HStack>
)
