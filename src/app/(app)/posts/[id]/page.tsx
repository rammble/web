'use client'

import {VStack} from '@chakra-ui/layout'
import React, {FC} from 'react'
import {Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs,} from '@chakra-ui/react'
import {
  getGetPostRepliesQueryKey,
  useGetPostQuery,
  useGetPostRepliesQuery,
  useQueryClient,
  useReplyToPostMutation
} from "@rammble/sdk";
import {FeedPost} from "src/components/client/Posts/FeedPost";
import {Comment} from "src/components/client/Posts/Comments/Comment";
import {CreatePost} from "src/components/client/Posts/CreatePost";

interface PostPageProps {
  params: {
    id: string
  }
}

const Page: FC<PostPageProps> = ({ params }) => {
  const queryClient = useQueryClient()
  const { data, isSuccess } = useGetPostQuery({postId: params.id})
  const {data: repliesData} = useGetPostRepliesQuery({postId: params.id})


  const { mutate: createReply } = useReplyToPostMutation({
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: getGetPostRepliesQueryKey({postId: params.id}),
      }),
  })

  const replyMutation = (body: string) => {
    createReply({
      postIdReplyTo: params.id,
      body
    })
  }

  return (
    <VStack px={4} pt={2} pb={4} w="full" align="start" spacing={6}>
      <Tabs gap="8" size="2">
        <TabList>
          <Tab>Latest</Tab>
          <Tab>Trending</Tab>
          <Tab>Media</Tab>
        </TabList>
        <TabIndicator />
        <TabPanels>
          <VStack w={'full'} as={TabPanel} spacing="4">
            <VStack w="full" spacing="2">
              {isSuccess && <FeedPost data={data.post}/>}
            </VStack>
            <CreatePost buttonLabel={'Comment'} mutation={replyMutation} guidelineOptions={{path: '/guidelines/posting', label: 'Comment Guidelines'}}/>
            {repliesData?.replies?.map((r, key) => {
              return <Comment comment={r} key={key}/>
            })}
          </VStack>
        </TabPanels>
      </Tabs>
    </VStack>
  )
}

export default Page
