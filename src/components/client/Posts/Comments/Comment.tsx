'use client'

import { HStack, Text, VStack } from '@chakra-ui/layout'
import { FC, useCallback } from 'react'
import { CommentHeader } from 'src/components/client/Posts/Comments/CommentHeader'
import { LikeButton } from 'src/components/client/Posts/PostInteractions/LikeButton'
import { ReplyButton } from 'src/components/client/Posts/Comments/ReplyButton'
import {
  GetPostRepliesQuery,
  useGetPostRepliesQuery,
  useLikePostMutation,
  useUnlikePostMutation,
} from '@rammble/sdk'
import { useBoolean } from '@chakra-ui/hooks'
import {
  PostingModule,
  PostingModuleType,
} from 'src/components/client/Posts/PostingModule'

export interface CommentProps {
  depth: number
  distanceToParentComment?: number
  comment: GetPostRepliesQuery['replies'][number]
}

export const Comment: FC<CommentProps> = ({
  depth,
  distanceToParentComment = 0,
  comment,
}) => {
  // const replies = useGetPostRepliesQuery({
  //   postId: comment.id,
  // })
  const [isLiked, setIsLiked] = useBoolean(comment?.isLikedBySelf)
  const [isReplying, setIsReplying] = useBoolean(false)

  const likeCount =
    comment.likeCount +
    (isLiked
      ? Number(comment.isLikedBySelf ? 0 : 1)
      : Number(comment.isLikedBySelf ? -1 : 0))

  const onSuccess = () => {}

  const { mutateAsync: likePost } = useLikePostMutation({
    onSuccess,
  })

  const { mutateAsync: unlikePost } = useUnlikePostMutation({
    onSuccess,
  })

  const toggleLike = useCallback(async () => {
    if (isLiked) {
      setIsLiked.off()
      await unlikePost(comment)
    } else {
      setIsLiked.on()
      await likePost(comment)
    }
  }, [isLiked])

  return (
    <VStack
      w="full"
      spacing={2}
      align="start"
      position="relative"
      // _before={
      //   depth === 0
      //     ? {
      //         content: "''",
      //         position: 'absolute',
      //         top: '-108px',
      //         left: '11px',
      //         width: '2px',
      //         height: '104px',
      //         zIndex: 0,
      //         borderLeft: '2px solid',
      //         borderColor: 'neutral.5',
      //       }
      //     : {
      //         content: "''",
      //         position: 'absolute',
      //         top: `calc(calc(-90px - ${distanceToParentComment}px) + 12px)`,
      //         left: '-21px',
      //         width: '12px',
      //         height: `calc(90px + ${distanceToParentComment}px)`,
      //         borderLeft: '2px solid',
      //         borderBottom: '2px solid',
      //         borderColor: 'neutral.5',
      //         borderBottomLeftRadius: '12px',
      //       }
      // }
    >
      <VStack spacing={2} align="start" w="full">
        <CommentHeader
          user={comment.poster}
          commentId={comment.id}
          createdAt={comment.createdAt}
        />
        <VStack spacing={2} pl={7} align="start" w="full">
          <Text fontStyle="3" color="neutral.11a">
            {comment?.body}
          </Text>
          <VStack w="full" spacing={4} align="start">
            <HStack>
              <LikeButton
                ariaLabel={'Like comment'}
                label={likeCount.toLocaleString()}
                onClick={toggleLike}
                isActive={isLiked}
              />
              {/*<ReplyButton
                ariaLabel={'Reply to post'}
                onClick={setIsReplying.toggle}
              />*/}
            </HStack>
            {isReplying && (
              <PostingModule
                type={PostingModuleType.REPLY_TO_COMMENT}
                replyToPostId={comment.id}
              />
            )}
          </VStack>
        </VStack>
      </VStack>
      {/*<VStack w="full" align="start" pl={6} spacing={2}>
        {replies?.data?.replies?.map((reply, index) => {
          return (
            <Comment
              key={reply.id}
              depth={depth + 1}
              comment={reply}
              distanceToParentComment={
                (replies?.data?.replies?.slice(0, index).reduce((acc, curr) => {
                  return acc + curr.body.length
                }, 0) || 0) * 52
              }
            />
          )
        })}
      </VStack>*/}
    </VStack>
  )
}
