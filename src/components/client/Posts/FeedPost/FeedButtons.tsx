'use client'

import { Flex, SimpleGrid } from '@chakra-ui/layout'
import { FC } from 'react'
import { NavButton } from '../PostInteractions/NavButton'
import { LikeButton } from '../PostInteractions/LikeButton'
import { ChatBubbleIcon, Share1Icon, UpdateIcon } from '@radix-ui/react-icons'
import { Icon } from '@chakra-ui/react'

export interface FeedButtonsProps {
  likeCount?: number
  commentCount?: number
  repostCount?: number
  shareCount?: number

  onLike: () => void
  onComment: () => void
  onRepost: () => void
  onShare: () => void

  isLiked?: boolean
  isCommented?: boolean
  isReposted?: boolean
}

const ifZeroLocaleStr = (count: number) =>
  count === 0 ? '0' : count.toLocaleString()

export const FeedButtons: FC<FeedButtonsProps> = ({
  likeCount = 0,
  commentCount = 0,
  repostCount = 0,
  shareCount = 0,
  onLike,
  onComment,
  onRepost,
  onShare,

  isLiked,
  isCommented,
  isReposted,
}) => {
  return (
    <SimpleGrid w="full" columns={4} spacing={0} color={'neutral.8a'}>
      <Flex justify="start">
        <LikeButton
          label={ifZeroLocaleStr(likeCount)}
          ariaLabel="Like post"
          onClick={onLike}
          isActive={isLiked}
        />
      </Flex>
      <Flex justify="start">
        <NavButton
          icon={<Icon as={ChatBubbleIcon} boxSize={4} />}
          label={ifZeroLocaleStr(commentCount)}
          ariaLabel="Comment"
          color="info"
          onClick={onComment}
          isActive={isCommented}
        />
      </Flex>
      <Flex justify="start">
        <NavButton
          icon={<Icon as={UpdateIcon} boxSize={4} />}
          label={ifZeroLocaleStr(repostCount)}
          ariaLabel="Repost"
          color="success"
          onClick={onRepost}
          isActive={isReposted}
        />
      </Flex>
      <Flex justify="end">
        <NavButton
          icon={<Icon as={Share1Icon} boxSize={4} />}
          label={ifZeroLocaleStr(shareCount)}
          ariaLabel="Repost"
          color="warn"
          onClick={onShare}
        />
      </Flex>
    </SimpleGrid>
  )
}
