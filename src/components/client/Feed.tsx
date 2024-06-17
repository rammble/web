'use client'

import React, { FC } from 'react'
import {
  Divider,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'
import { VStack } from '@chakra-ui/layout'
import { FeedPost } from 'src/components/client/Posts/FeedPost'
import {
  getGetMeQueryKey,
  useCreatePostMutation,
  useGetMeQuery,
  useQueryClient,
} from '@rammble/sdk'
import {
  PostingModule,
  PostingModuleType,
} from 'src/components/client/Posts/PostingModule'

export interface FeedProps {}

export const Feed: FC<FeedProps> = ({}) => {
  const { data } = useGetMeQuery({})

  const queryClient = useQueryClient()

  const { mutate: createPost } = useCreatePostMutation({
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: getGetMeQueryKey({}),
      }),
  })

  return (
    <VStack w="full" spacing={2} py="6">
      <Tabs gap="8" size="2">
        <TabList>
          <Tab>Feed</Tab>
          <Tab>Trending</Tab>
          <Tab>Media</Tab>
        </TabList>
        <TabIndicator />
        <TabPanels>
          <VStack as={TabPanel} spacing="4">
            <PostingModule type={PostingModuleType.CREATE_POST} />
            <Divider height={'1px'} mt={4} mb={2} bg="neutral.3a" />
            <VStack w="full" spacing="2">
              {data?.user.posts.map((post) => (
                <FeedPost
                  key={post.id}
                  data={{
                    ...post,
                    poster: data?.user,
                  }}
                  isLoading={false}
                />
              ))}
            </VStack>
          </VStack>
        </TabPanels>
      </Tabs>
    </VStack>
  )
}
