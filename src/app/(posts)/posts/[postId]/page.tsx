'use client'

import { HStack, Text, VStack } from '@chakra-ui/layout'
import React, { FC } from 'react'
import { useGetPostQuery, useGetPostRepliesQuery } from '@rammble/sdk'
import { FeedPost } from 'src/components/client/Posts/FeedPost'
import { Comment } from 'src/components/client/Posts/Comments/Comment'
import {
  PostingModule,
  PostingModuleType,
} from 'src/components/client/Posts/PostingModule'
import { Avatar } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'

const Page: FC<{ params: { postId: string } }> = ({ params }) => {
  const { data, isLoading } = useGetPostQuery(params)
  const { data: repliesData } = useGetPostRepliesQuery(params)

  const { data: replyToPost, isLoading: isLoadingReplyTo } = useGetPostQuery({
    postId: data?.post.replyTo ?? '',
  })

  if ((!data || !data.post) && !isLoading) {
    return <>404</>
  }

  const hasReplies = repliesData?.replies && repliesData?.replies?.length > 0
  const isReply = !!data?.post.replyTo

  return (
    <VStack pt={6} w="full" spacing={4}>
      {isReply && replyToPost?.post && (
        <FeedPost
          isLoading={isLoadingReplyTo}
          data={replyToPost?.post}
          shouldLink={false}
        />
      )}
      {isReply && (
        <VStack w="full" align="start" spacing={4}>
          <Link href={`/posts/${data?.post.replyTo}`}>
            <Text textStyle="2" fontWeight="normal" color="accent.10a">
              See all replies
            </Text>
          </Link>
          <Comment depth={0} comment={data?.post} />
        </VStack>
      )}
      {!isReply && (
        <FeedPost isLoading={isLoading} data={data?.post} shouldLink={false} />
      )}
      <PostingModule
        type={PostingModuleType.COMMENT_ON_POST}
        replyToPostId={data?.post.id}
      />
      <VStack spacing={0} w="full" align="start">
        {hasReplies ? (
          repliesData.replies.map((reply, index) => {
            return <Comment key={reply.id} comment={reply} depth={0} />
          })
        ) : (
          <>no replies</>
        )}
      </VStack>
    </VStack>
  )
}

export default Page
