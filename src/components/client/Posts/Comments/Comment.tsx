'use client'

import { Box, HStack, Text, VStack } from '@chakra-ui/layout'
import {FC, useCallback} from 'react'
import { CommentHeader } from 'src/components/client/Posts/Comments/CommentHeader'
import { LikeButton } from 'src/components/client/Posts/PostInteractions/LikeButton'
import { ReplyButton } from 'src/components/client/Posts/Comments/ReplyButton'
import { AvatarReadMore } from 'src/components/client/Posts/Comments/AvatarReadMore'
import {
  getGetMeQueryKey, getGetPostRepliesQueryKey,
  GetPostRepliesQuery,
  GetUserByUsernameQuery,
  useLikePostMutation,
  useUnlikePostMutation
} from "@rammble/sdk";
import {useBoolean} from "@chakra-ui/hooks";


export interface CommentProps {
  comment: GetPostRepliesQuery['replies'][number]
}
export const Comment: FC<CommentProps> = ({ comment }) => {
  // const replies = comment.replies
  // const hasReplies = comment.replies != null && comment.replies?.length > 0
  const [isLiked, setIsLiked] = useBoolean(comment?.isLikedByUser)

  const likeCount =
    comment.likes +
    (isLiked
      ? Number(comment.isLikedByUser ? 0 : 1)
      : Number(comment.isLikedByUser ? -1 : 0))

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
      align="start"
      spacing="4"
      position={'relative'}
      _before={{
        content: "''",
        position: 'absolute',
        top: 'calc(0px + 32px)',
        left: '-24px',
        width: '40px',
        height: '110px',
        borderLeft: '2px solid',
        borderBottom: '2px solid',
        borderColor: 'neutral.5',
        borderBottomLeftRadius: '12px',
      }}
    >
      <CommentHeader user={comment?.poster} createdAt={comment?.createdAt} />
      <Text fontStyle={'3'} color={'neutral.11a'}>
        {comment?.body}
      </Text>
      <HStack>
        <LikeButton ariaLabel={'Like comment'}
                    label={likeCount.toLocaleString()}
                    onClick={toggleLike}
                    isActive={isLiked}/>
        <ReplyButton ariaLabel={'Reply to post'} />
      </HStack>
      {
        /*<VStack w={'full'} pl={7}>
        {replies?.map((reply: CommentProps) => {
          return <Comment comment={reply} />
        })}
        {hasReplies && <AvatarReadMore replies={replies} />}
      </VStack>*/
      }

    </VStack>
  )
}
