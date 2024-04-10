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
import { CreatePost } from 'src/components/client/Posts/CreatePost'
import { FakeFeedPosts } from 'src/utils/placeholder.data'
import { FeedPost } from 'src/components/client/Posts/FeedPost'

export interface FeedProps {
  posts?: typeof FakeFeedPosts
}

export const Feed: FC<FeedProps> = ({ posts = FakeFeedPosts }) => {
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
            <CreatePost />
            <Divider height={'1px'} mt={4} mb={2} bg="neutral.3a" />
            <VStack w="full" spacing="2">
              {posts.map((post, index) => (
                <FeedPost key={index} data={post} isLoading={false} />
              ))}
            </VStack>
          </VStack>
        </TabPanels>
      </Tabs>
    </VStack>
  )
}
