'use client'

import {VStack} from '@chakra-ui/layout'
import React, {FC} from 'react'
import {Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs,} from '@chakra-ui/react'
import {ReplyInput} from "src/components/client/Posts/Comments/ReplyInput";
import {useGetPostQuery, useGetPostRepliesQuery} from "@rammble/sdk";
import {FeedPost} from "src/components/client/Posts/FeedPost";
import {Comment} from "src/components/client/Posts/Comments/Comment";

interface PostPageProps {
  params: {
    id: string
  }
}

const Page: FC<PostPageProps> = ({ params }) => {

  const { data, isSuccess } = useGetPostQuery({postId: params.id})
  const {data: repliesData} = useGetPostRepliesQuery({postId: params.id})

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
            <ReplyInput postId={params.id}/>
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
