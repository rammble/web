import { Flex, SimpleGrid } from '@chakra-ui/layout'
import { FC } from 'react'
import { NavButton } from '../NavButton'
import { LikeButton } from 'src/components/LikeButton'
import { CommentIcon } from 'src/icons/CommentIcon'
import { RepostIcon } from 'src/icons/RepostIcon'
import { ShareIcon } from 'src/icons/ShareIcon'

export interface FeedButtonsProps {
  likeCount: number
  commentCount: number
  repostCount: number

  onLike: () => void
  onComment: () => void
  onRepost: () => void
  onShare: () => void

  isLiked?: boolean
  isReposted?: boolean
}

const ifZeroLocaleStr = (count: number) =>
  count === 0 ? undefined : count.toLocaleString()

export const FeedButtons: FC<FeedButtonsProps> = ({
  likeCount = 0,
  commentCount = 0,
  repostCount = 0,
  onLike,
  onComment,
  onRepost,
  onShare,

  isLiked,
  isReposted,
}) => {
  return (
    <SimpleGrid w="full" columns={4} spacing={0}>
      <Flex justify="start">
        <LikeButton
          label={ifZeroLocaleStr(likeCount)}
          ariaLabel="Like"
          onClick={onLike}
          isActive={isLiked}
        />
      </Flex>
      <Flex justify="start">
        <NavButton
          icon={<CommentIcon boxSize={5} />}
          label={ifZeroLocaleStr(commentCount)}
          ariaLabel="Comment"
          color="neutral"
          onClick={onComment}
        />
      </Flex>
      <Flex justify="start">
        <NavButton
          icon={<RepostIcon boxSize={5} />}
          label={ifZeroLocaleStr(repostCount)}
          ariaLabel="Repost"
          color="success"
          onClick={onRepost}
          isActive={isReposted}
        />
      </Flex>
      <Flex justify="end">
        <NavButton
          icon={<ShareIcon boxSize={5} />}
          label={ifZeroLocaleStr(5311)}
          ariaLabel="Repost"
          color="neutral"
          onClick={onShare}
        />
      </Flex>
    </SimpleGrid>
  )
}
